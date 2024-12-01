import { clsx, defineComponent } from "~/utils/preact.ts";

export type ImageProps = {
  class?: string;
  src: string;
  alt: string;
};

export const Image = defineComponent<ImageProps>((
  { class: class_, src, alt },
) => {
  return (
    <img
      class={clsx(
        "inline-block",
        class_,
      )}
      src={src}
      alt={alt}
    />
  );
});
