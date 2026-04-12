"use client";

/**
 * Floating action button — mobile-first action trigger.
 * Used when LayoutConfig.actionPlacement === "fab" (Nervecentre-style).
 */

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  onClick?: () => void;
}

export function FabButton({ onClick }: Props) {
  return (
    <Button
      size="icon"
      onClick={onClick}
      className="fixed bottom-20 right-4 z-50 h-14 w-14 rounded-full bg-nhs-blue text-white shadow-lg hover:bg-nhs-dark-blue"
    >
      <Plus className="h-6 w-6" />
    </Button>
  );
}
