// components/ui/AnimatedLink.tsx
"use client";

import AnchorLink from "./AnchorLink";
import PageLink from "./PageLink";

export interface AnimatedLinkProps {
  to: string;
  offset?: number;
  className?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export default function AnimatedLink({
  to,
  offset,
  className = "",
  children,
  onClick,
}: AnimatedLinkProps) {
  const isPageLink = to.startsWith("/");

  const baseClass = `
    relative inline-block text-white
    after:absolute after:bottom-0 after:left-0
    after:h-[2px] after:w-full after:origin-center
    after:scale-x-0 after:bg-lime-400
    after:transition-transform after:duration-300
    hover:after:scale-x-100
  `.trim();

  const combined = `${baseClass} ${className}`.trim();

  if (isPageLink) {
    return (
      <PageLink to={to} className={combined} onClick={onClick}>
        {children}
      </PageLink>
    );
  } else {
    return (
      <AnchorLink
        to={to}
        offset={offset}
        className={combined}
        onClick={onClick}
      >
        {children}
      </AnchorLink>
    );
  }
}
