import { defineComponent } from "~/utils/preact.ts";
import { tw } from "~/utils/tailwind.ts";

import type { DefineProps } from "~/utils/preact.ts";

export type TextLinkProps = DefineProps<"a", {
  href: string;
  label: string;
}>;

export default defineComponent<TextLinkProps>((
  { class: class_, href, label, ...props },
) => {
  return (
    <a
      {...props}
      class={tw`inline-block hover:opacity-75 ${class_}`}
      href={href}
    >
      <span class={tw`inline-block uppercase`}>{label}</span>
    </a>
  );
});
