import { defineComponent } from "../utils/preact.ts";
import { tw } from "../utils/tailwind.ts";
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
      class={tw`
        inline-block p-3
        hover:opacity-75
        ${class_}
      `}
      type="button"
    >
      <Icon
        class={tw`size-6`}
        src={src}
        alt={alt}
      />
    </button>
  );
});
