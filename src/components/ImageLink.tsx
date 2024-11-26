import { defineComponent } from "../utils/preact.ts";
import { tw } from "../utils/tailwind.ts";
import Image from "./Image.tsx";

import type { ComponentProps } from "preact";

export interface ImageLinkProps extends ComponentProps<"a"> {
  href: string;
  src: string;
  alt: string;
}

export default defineComponent<ImageLinkProps>((
  { class: class_, href, src, alt, ...props },
) => {
  return (
    <a
      {...props}
      class={tw`
        inline-block p-2
        hover:opacity-75
        ${class_}
      `}
      href={href}
    >
      <Image
        class={tw`h-8 w-auto`}
        src={src}
        alt={alt}
      />
    </a>
  );
});
