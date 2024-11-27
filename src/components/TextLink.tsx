import { defineComponent } from "~/utils/preact.ts";
import { tw } from "~/utils/tailwind.ts";

import type { ComponentProps } from "preact";

export interface TextLinkProps extends ComponentProps<"a"> {
  href: string;
  label: string;
  alt: string;
}

export default defineComponent<TextLinkProps>((
  { class: class_, href, label, alt, ...props },
) => {
  return (
    <a
      {...props}
      class={tw`
        inline-block p-3 uppercase
        hover:opacity-75
        ${class_}
      `}
      href={href}
    >
      <span aria-label={alt}>{label}</span>
    </a>
  );
});
