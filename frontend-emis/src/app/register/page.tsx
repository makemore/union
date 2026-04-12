"use client";

import { RegisterPage } from "@union/core/components";
import { useRouter } from "next/navigation";

/**
 * EMIS-skin register page.
 *
 * Uses the shared RegisterPage from @union/core. Customise by
 * passing props or replace this file for EMIS-specific branding.
 */
export default function Register() {
  const router = useRouter();

  return (
    <RegisterPage
      title="EMIS — Create Account"
      subtitle="Register to access the clinical record system."
      onSuccess={() => router.push("/")}
    />
  );
}
