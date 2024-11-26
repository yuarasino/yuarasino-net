import { defineComponent } from "../utils/preact.ts";
import { tw } from "../utils/tailwind.ts";
import Icon from "./Icon.tsx";

import type { ComponentProps } from "preact";

export interface IconLinkProps extends ComponentProps<"a"> {
  href: string;
  src: string;
  alt: string;
}

export default defineComponent<IconLinkProps>((
  { class: class_, href, src, alt, ...props },
) => {
  return (
    <a
      {...props}
      class={tw`
        inline-block p-3
        hover:opacity-75
        ${class_}
      `}
      href={href}
    >
      <Icon
        class={tw`h-6 w-6`}
        src={src}
        alt={alt}
      />
    </a>
  );
});
