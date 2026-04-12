"use client";

/**
 * AuthProvider — shared authentication context for all Union frontends.
 *
 * Wraps the app and provides useAuth() / useUser() hooks. Handles
 * token storage, login, register, logout, and user fetching against
 * the Union backend (dj-rest-auth).
 *
 * Each frontend skin wraps this provider in its own layout — no need
 * to duplicate auth logic.
 */

import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { ReactNode } from "react";
import { createApiClient } from "../api/client";
import type {
  AuthActions,
  AuthState,
  LoginCredentials,
  RegisterCredentials,
  UnionUser,
} from "./types";

const TOKEN_KEY = "union_auth_token";

export interface AuthContextValue extends AuthState, AuthActions {}

export const AuthContext = createContext<AuthContextValue | null>(null);

export interface AuthProviderProps {
  children: ReactNode;
  /** Override API base URL */
  apiUrl?: string;
}

export function AuthProvider({ children, apiUrl }: AuthProviderProps) {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UnionUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Hydrate token from localStorage on mount
  useEffect(() => {
    const stored = typeof window !== "undefined"
      ? localStorage.getItem(TOKEN_KEY)
      : null;
    if (stored) {
      setToken(stored);
    } else {
      setIsLoading(false);
    }
  }, []);

  // Fetch user when token changes
  useEffect(() => {
    if (!token) {
      setUser(null);
      setIsLoading(false);
      return;
    }
    const api = createApiClient({ token, baseUrl: apiUrl });
    api
      .get<{ email: string; full_name: string; preferred_name: string }>(
        "/api/accounts/auth/user/"
      )
      .then((data) => {
        setUser({
          email: data.email,
          fullName: data.full_name,
          preferredName: data.preferred_name,
        });
      })
      .catch(() => {
        // Token invalid — clear it
        localStorage.removeItem(TOKEN_KEY);
        setToken(null);
        setUser(null);
      })
      .finally(() => setIsLoading(false));
  }, [token, apiUrl]);

  const login = useCallback(
    async (credentials: LoginCredentials) => {
      const api = createApiClient({ baseUrl: apiUrl });
      const data = await api.post<{ key: string }>(
        "/api/accounts/auth/login/",
        credentials
      );
      localStorage.setItem(TOKEN_KEY, data.key);
      setToken(data.key);
    },
    [apiUrl]
  );

  const register = useCallback(
    async (credentials: RegisterCredentials) => {
      const api = createApiClient({ baseUrl: apiUrl });
      const data = await api.post<{ key: string }>(
        "/api/accounts/auth/registration/",
        credentials
      );
      localStorage.setItem(TOKEN_KEY, data.key);
      setToken(data.key);
    },
    [apiUrl]
  );

  const logout = useCallback(async () => {
    if (token) {
      const api = createApiClient({ token, baseUrl: apiUrl });
      try {
        await api.post("/api/accounts/auth/logout/");
      } catch {
        // Best effort — clear local state regardless
      }
    }
    localStorage.removeItem(TOKEN_KEY);
    setToken(null);
    setUser(null);
  }, [token, apiUrl]);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      token,
      isAuthenticated: !!user,
      isLoading,
      login,
      register,
      logout,
    }),
    [user, token, isLoading, login, register, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
