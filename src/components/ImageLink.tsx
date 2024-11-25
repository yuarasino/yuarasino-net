import { defineComponent } from "../utils/preact.ts";
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
      class={`inline-block ${class_}`}
      href={href}
    >
      <Image
        class="h-8 w-auto"
        src={src}
        alt={alt}
      />
    </a>
  );
});
