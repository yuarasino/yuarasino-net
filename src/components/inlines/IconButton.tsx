import { defineComponent } from "~/utils/preact.ts";
import { tw } from "~/utils/tailwind.ts";
import Icon from "~/components/inlines/Icon.tsx";

import type { DefineProps } from "~/utils/preact.ts";

export type IconButtonProps = DefineProps<"button", {
  src: string;
  alt: string;
}>;

export default defineComponent<IconButtonProps>((
  { class: class_, src, alt, ...props },
) => {
  return (
    <button
      {...props}
      class={tw`inline-block hover:opacity-75 ${class_}`}
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
