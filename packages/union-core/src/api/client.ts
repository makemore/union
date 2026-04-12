/**
 * Union API client.
 *
 * Thin wrapper around fetch that handles auth tokens, base URL,
 * and JSON serialisation. Designed to be used directly or through
 * the React hooks in @union/core/auth.
 */

import { getEnv } from "../env";

export interface ApiError {
  status: number;
  message: string;
  detail?: unknown;
}

export class UnionApiError extends Error {
  status: number;
  detail?: unknown;

  constructor({ status, message, detail }: ApiError) {
    super(message);
    this.name = "UnionApiError";
    this.status = status;
    this.detail = detail;
  }
}

export interface ApiClientOptions {
  /** Override the base URL (defaults to env) */
  baseUrl?: string;
  /** Auth token to include in requests */
  token?: string | null;
}

export function createApiClient(options: ApiClientOptions = {}) {
  const baseUrl = options.baseUrl || getEnv().apiUrl;

  async function request<T = unknown>(
    path: string,
    init: RequestInit = {}
  ): Promise<T> {
    const url = `${baseUrl}${path}`;
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      ...(init.headers as Record<string, string>),
    };

    if (options.token) {
      headers["Authorization"] = `Token ${options.token}`;
    }

    const response = await fetch(url, { ...init, headers });

    if (!response.ok) {
      let detail: unknown;
      try {
        detail = await response.json();
      } catch {
        // no JSON body
      }
      throw new UnionApiError({
        status: response.status,
        message: `API error: ${response.status} ${response.statusText}`,
        detail,
      });
    }

    if (response.status === 204) return undefined as T;
    return response.json() as Promise<T>;
  }

  return {
    get: <T = unknown>(path: string) => request<T>(path),
    post: <T = unknown>(path: string, data?: unknown) =>
      request<T>(path, {
        method: "POST",
        body: data ? JSON.stringify(data) : undefined,
      }),
    patch: <T = unknown>(path: string, data?: unknown) =>
      request<T>(path, {
        method: "PATCH",
        body: data ? JSON.stringify(data) : undefined,
      }),
    delete: <T = unknown>(path: string) =>
      request<T>(path, { method: "DELETE" }),
  };
}
