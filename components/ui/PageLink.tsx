// components/ui/PageLink.tsx
"use client";

import { MouseEventHandler } from "react";
import Link from "next/link";

interface PageLinkProps {
  to: string;
  className?: string;
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export default function PageLink({
  to,
  className,
  children,
  onClick,
}: PageLinkProps) {
  const handleClick: MouseEventHandler<HTMLAnchorElement> = e => {
    window.scrollTo(0, 0);
    onClick?.(e);
  };

  return (
    <Link href={to} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
