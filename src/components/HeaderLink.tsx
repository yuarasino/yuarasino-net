import { defineComponent } from "../utils/define.ts";

import type { ComponentProps } from "preact";

export interface HeaderLinkProps {
  name: string;
  href: string;
  icon?: string;
  onClick?: ComponentProps<"a">["onClick"];
}

export default defineComponent<HeaderLinkProps>(({
  name,
  href,
  icon,
  onClick,
}) => {
  const isExternal = !href.startsWith("/");
  const isIcon = !!icon;
  return (
    <a
      class="block p-2"
      href={href}
      target={isExternal ? "_blank" : undefined}
      onClick={onClick}
    >
      {isIcon
        ? <i class={`size-6 iconify ${icon}`} />
        : <span class="block uppercase">{name}</span>}
    </a>
  );
});
