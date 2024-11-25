import { defineComponent } from "../utils/preact.ts";

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
      class={`icon ${class_}`}
      style={{ maskImage: `url("${src}")` }}
      role="img"
      aria-label={alt}
    />
  );
});
