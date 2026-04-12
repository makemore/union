/**
 * Environment configuration for Union frontends.
 *
 * Validates and exposes environment variables with sensible defaults.
 * Each frontend reads from its own .env.local — this module provides
 * a consistent interface across all skins.
 */

export interface UnionEnv {
  /** Union backend API base URL */
  apiUrl: string;
  /** Current environment name */
  environment: "development" | "staging" | "production";
  /** Enable debug logging */
  debug: boolean;
}

let _cachedEnv: UnionEnv | null = null;

export function getEnv(): UnionEnv {
  if (_cachedEnv) return _cachedEnv;

  const apiUrl =
    process.env.NEXT_PUBLIC_UNION_API_URL || "http://localhost:8000";

  const environment = (process.env.NEXT_PUBLIC_UNION_ENV || "development") as
    | "development"
    | "staging"
    | "production";

  const debug =
    process.env.NEXT_PUBLIC_UNION_DEBUG === "true" ||
    environment === "development";

  _cachedEnv = { apiUrl, environment, debug };
  return _cachedEnv;
}

/**
 * Template .env.local content for new frontends.
 * Used by setup scripts to bootstrap env configuration.
 */
export const ENV_TEMPLATE = `# Union Backend
NEXT_PUBLIC_UNION_API_URL=http://localhost:8000
NEXT_PUBLIC_UNION_ENV=development
NEXT_PUBLIC_UNION_DEBUG=true
`;
