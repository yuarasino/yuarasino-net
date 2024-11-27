import { defineComponent } from "~/utils/preact.ts";
import { tw } from "~/utils/tailwind.ts";

import type { DefineProps } from "~/utils/preact.ts";

export type IconProps = DefineProps<"i", {
  src: string;
  alt: string;
}>;

export default defineComponent<IconProps>((
  { class: class_, src, alt, ...props },
) => {
  return (
    <i
      {...props}
      class={tw`
        inline-block bg-current text-inherit mask-full
        ${class_}
      `}
      style={{ maskImage: `url('${src}')` }}
      role="img"
      aria-label={alt}
    />
  );
});
