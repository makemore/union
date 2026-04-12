"use client";

import { LoginPage } from "@union/core/components";
import { useRouter } from "next/navigation";

/**
 * EMIS-skin login page.
 *
 * Uses the shared LoginPage from @union/core. Customise by passing
 * props (title, logo, className) or replace this file entirely with
 * a bespoke implementation for EMIS-style branding.
 */
export default function Login() {
  const router = useRouter();

  return (
    <LoginPage
      title="EMIS — Sign In"
      subtitle="Sign in to access the clinical record system."
      onSuccess={() => router.push("/")}
    />
  );
}
