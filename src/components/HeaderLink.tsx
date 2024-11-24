import { defineComponent } from "../utils/define.ts";

export interface HeaderLinkProps {
  name: string;
  href: string;
  icon?: string;
}

export default defineComponent<HeaderLinkProps>(({
  name,
  href,
  icon,
}) => {
  const isExternal = !href.startsWith("/");
  const isIcon = !!icon;
  return (
    <a class="block p-2" href={href} target={isExternal ? "_blank" : undefined}>
      {isIcon
        ? <i class={`size-6 iconify ${icon}`} />
        : <span class="block uppercase">{name}</span>}
    </a>
  );
});
