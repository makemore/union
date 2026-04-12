"use client";

/**
 * Default login page component.
 *
 * Provides a working email/password login form wired to useAuth().
 * Frontends can use this directly, wrap it with custom styling, or
 * replace it entirely with their own implementation.
 *
 * Overridable via props:
 *   - title, subtitle: customise the heading text
 *   - logo: render a custom logo element
 *   - onSuccess: callback after successful login
 *   - registerHref: link to the registration page
 *   - className: additional CSS classes on the outer container
 */

import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { useAuth } from "../auth/hooks";

export interface LoginPageProps {
  title?: string;
  subtitle?: string;
  logo?: ReactNode;
  onSuccess?: () => void;
  registerHref?: string;
  className?: string;
}

export function LoginPage({
  title = "Sign in to Union",
  subtitle = "Enter your email and password to continue.",
  logo,
  onSuccess,
  registerHref = "/register",
  className = "",
}: LoginPageProps) {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await login({ email, password });
      onSuccess?.();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Login failed. Please try again."
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
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
        <p className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <a href={registerHref} className="font-medium text-primary underline-offset-4 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
