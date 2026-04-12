"use client";

import { useContext } from "react";
import { AuthContext } from "./provider";
import type { AuthContextValue } from "./provider";

/**
 * Access the full auth context — state + actions.
 *
 * Returns: { user, token, isAuthenticated, isLoading, login, register, logout }
 */
export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an <AuthProvider>");
  }
  return context;
}

/**
 * Convenience hook — returns the current user or null.
 */
export function useUser() {
  const { user } = useAuth();
  return user;
}
