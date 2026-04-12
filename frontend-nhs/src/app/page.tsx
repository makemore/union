import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-nhs-pale-grey">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold text-nhs-dark-blue">Union</h1>
        <p className="text-nhs-grey-3">NHS design system with configurable clinical layouts</p>
        <Link
          href="/design-system"
          className="inline-block rounded bg-nhs-blue px-6 py-2 text-sm font-medium text-white hover:bg-nhs-dark-blue"
        >
          Open Design System
        </Link>
      </div>
    </div>
  );
}
