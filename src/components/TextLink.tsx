import { defineComponent } from "../utils/preact.ts";

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
      class={`inline-block uppercase ${class_}`}
      href={href}
    >
      <span aria-label={alt}>{label}</span>
    </a>
  );
});
