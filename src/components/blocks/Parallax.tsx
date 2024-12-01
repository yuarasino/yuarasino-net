import { clsx, defineComponent } from "~/utils/preact.ts";

import type { ComponentChildren } from "preact";
import { Image } from "~/components/inlines/Image.tsx";

export type ParallaxProps = {
  src: string;
  alt: string;
  direction: "left" | "right";
  children: ComponentChildren;
};

export const Parallax = defineComponent<ParallaxProps>((
  { src, alt, direction, children },
) => {
  return (
    <div
      class={clsx(
        "flex flex-col",
        direction === "left" && "split:flex-row",
        direction === "right" && "split:flex-row-reverse",
      )}
    >
      <div
        class={clsx(
          "h-screen [clip-path:inset(0)]",
          "split:h-auto split:w-1/2",
        )}
      >
        <div
          class={clsx(
            "fixed inset-0 bg-secondary-300 pt-8",
            direction === "left" && "split:right-1/2",
            direction === "right" && "split:left-1/2",
          )}
        >
          <Image
            class="size-full object-cover object-top"
            src={src}
            alt={alt}
          />
        </div>
      </div>
      <div
        class={clsx(
          "bg-white",
          "split:w-1/2",
        )}
      >
        {children}
      </div>
    </div>
  );
});
