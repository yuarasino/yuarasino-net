import { defineComponent } from "../utils/preact.ts";

import type { ComponentProps } from "preact";

export interface ImageProps extends ComponentProps<"img"> {
  src: string;
  alt: string;
}

export default defineComponent<ImageProps>((
  { class: class_, src, alt, ...props },
) => {
  return (
    <img
      {...props}
      class={`inline-block ${class_}`}
      src={src}
      alt={alt}
    />
  );
});
