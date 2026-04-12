"use client";

import { AuthProvider } from "@union/core/auth";

/**
 * Client-side providers wrapper.
 *
 * Wraps the app with shared providers from @union/core.
 * Add skin-specific providers here as needed.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
