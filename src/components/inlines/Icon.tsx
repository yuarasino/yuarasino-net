import { clsx, defineComponent } from "~/utils/preact.ts";

export type IconProps = {
  class?: string;
  src: string;
  alt: string;
};

export const Icon = defineComponent<IconProps>((
  { class: class_, src, alt },
) => {
  return (
    <i
      class={clsx(
        "inline-block bg-current [mask-size:100%_100%]",
        class_,
      )}
      style={{ maskImage: `url('${src}')` }}
      role="img"
      aria-label={alt}
    />
  );
});
