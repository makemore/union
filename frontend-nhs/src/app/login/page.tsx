"use client";

import { LoginPage } from "@union/core/components";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  return (
    <LoginPage
      title="Sign in to Union"
      subtitle="NHS clinical system — enter your credentials to continue."
      onSuccess={() => router.push("/")}
    />
  );
}
