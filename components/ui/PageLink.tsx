// components/ui/PageLink.tsx
"use client";

import Link from "next/link";

interface PageLinkProps {
  to: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function PageLink({
  to,
  className,
  children,
  onClick,
}: PageLinkProps) {
  const handleClick = () => {
    // scroll instant sans utiliser 'any' ni comportement non standard
    window.scrollTo(0, 0);
    onClick?.();
  };

  return (
    <Link href={to} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
