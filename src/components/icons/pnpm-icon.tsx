import type { SVGProps } from "react";

export function PnpmIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M30 10.75h-8.749V2H30Z" />
      <path d="M20.374 10.75h-8.75V2h8.75Z" />
      <path d="M10.749 10.75H2V2h8.749Z" />
      <path d="M30 20.375h-8.749v-8.75H30Z" />
      <path d="M20.374 20.375h-8.75v-8.75h8.75Z" />
      <path d="M20.374 30h-8.75v-8.75h8.75Z" />
      <path d="M30 30h-8.749v-8.75H30Z" />
      <path d="M10.749 30H2v-8.75h8.749Z" />
    </svg>
  );
}
