import { defineComponent } from "../utils/preact.ts";
import { tw } from "../utils/tailwind.ts";

import type { ComponentProps } from "preact";

export interface IconProps extends ComponentProps<"i"> {
  src: string;
  alt: string;
}

export default defineComponent<IconProps>((
  { class: class_, src, alt, ...props },
) => {
  return (
    <i
      {...props}
      class={tw`
        inline-block bg-current text-inherit [mask-size:100%_100%]
        ${class_}
      `}
      style={{ maskImage: `url('${src}')` }}
      role="img"
      aria-label={alt}
    />
  );
});
