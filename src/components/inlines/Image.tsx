import { defineComponent } from "~/utils/preact.ts";
import { tw } from "~/utils/tailwind.ts";

import type { DefineProps } from "~/utils/preact.ts";

export type ImageProps = DefineProps<"img", {
  src: string;
  alt: string;
}>;

export default defineComponent<ImageProps>((
  { class: class_, src, alt, ...props },
) => {
  return (
    <img
      {...props}
      class={tw`inline-block ${class_}`}
      src={src}
      alt={alt}
    />
  );
});
