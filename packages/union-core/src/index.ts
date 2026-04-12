/**
 * @union/core — shared infrastructure for all Union frontends.
 *
 * This package provides auth, API client, env config, and base
 * components (login, register) that all frontend skins share.
 * Each skin can import and use these directly, wrap them with
 * custom styling/props, or replace them entirely.
 *
 * Usage:
 *   import { AuthProvider, useAuth } from "@union/core/auth";
 *   import { createApiClient } from "@union/core/api";
 *   import { LoginPage, RegisterPage } from "@union/core/components";
 *   import { getEnv } from "@union/core/env";
 */

// Re-export everything for convenience
export * from "./auth";
export * from "./api";
export * from "./components";
export { getEnv } from "./env";
export type { UnionEnv } from "./env";
