"use client";

import { RegisterPage } from "@union/core/components";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  return (
    <RegisterPage
      title="Create an account"
      subtitle="NHS clinical system — register to get started."
      onSuccess={() => router.push("/")}
    />
  );
}
