"use client";

/**
 * Default registration page component.
 *
 * Provides a working email/password registration form wired to useAuth().
 * Same override pattern as LoginPage — use directly, wrap, or replace.
 */

import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { useAuth } from "../auth/hooks";

export interface RegisterPageProps {
  title?: string;
  subtitle?: string;
  logo?: ReactNode;
  onSuccess?: () => void;
  loginHref?: string;
  className?: string;
}

export function RegisterPage({
  title = "Create an account",
  subtitle = "Enter your details to get started.",
  logo,
  onSuccess,
  loginHref = "/login",
  className = "",
}: RegisterPageProps) {
  const { register } = useAuth();
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    if (password1 !== password2) {
      setError("Passwords do not match.");
      return;
    }
    setLoading(true);
    try {
      await register({ email, password1, password2 });
      onSuccess?.();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={`flex min-h-screen items-center justify-center p-4 ${className}`}>
      <div className="w-full max-w-sm space-y-6">
        {logo && <div className="flex justify-center">{logo}</div>}
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
              {error}
            </div>
          )}
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
              placeholder="you@example.com"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password1" className="text-sm font-medium">
              Password
            </label>
            <input
              id="password1"
              type="password"
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
              required
              autoComplete="new-password"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password2" className="text-sm font-medium">
              Confirm password
            </label>
            <input
              id="password2"
              type="password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              required
              autoComplete="new-password"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
          >
            {loading ? "Creating account..." : "Create account"}
          </button>
        </form>
        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <a href={loginHref} className="font-medium text-primary underline-offset-4 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
