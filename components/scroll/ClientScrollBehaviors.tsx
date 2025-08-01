// components/ClientScrollBehaviors.tsx
"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

// on crée un composant client-only qui fait le dynamic
const ScrollBehaviors = dynamic(
  () => import("@/components/scroll/ScrollBehaviors"),
  { ssr: false, loading: () => null }
);

export default function ClientScrollBehaviors() {
  return (
    <Suspense fallback={null}>
      <ScrollBehaviors />
    </Suspense>
  );
}
