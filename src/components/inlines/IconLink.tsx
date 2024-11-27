import { defineComponent } from "~/utils/preact.ts";
import { tw } from "~/utils/tailwind.ts";
import Icon from "~/components/inlines/Icon.tsx";

import type { DefineProps } from "~/utils/preact.ts";

export type IconLinkProps = DefineProps<"a", {
  href: string;
  src: string;
  alt: string;
}>;

export default defineComponent<IconLinkProps>((
  { class: class_, href, src, alt, ...props },
) => {
  return (
    <a
      {...props}
      class={tw`inline-block hover:opacity-75 ${class_}`}
      href={href}
    >
      <Icon
        class={tw`size-6`}
        src={src}
        alt={alt}
      />
    </a>
  );
});
