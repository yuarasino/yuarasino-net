import { defineComponent } from "../utils/preact.ts";
import Icon from "./Icon.tsx";

import type { ComponentProps } from "preact";

export interface IconButtonProps extends ComponentProps<"button"> {
  src: string;
  alt: string;
}

export default defineComponent<IconButtonProps>((
  { class: class_, src, alt, ...props },
) => {
  return (
    <button
      {...props}
      class={`inline-block ${class_}`}
      type="button"
    >
      <Icon
        class="h-6 w-6"
        src={src}
        alt={alt}
      />
    </button>
  );
});
