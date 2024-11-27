import { forwardRef } from "preact/compat";
import { defineComponent } from "~/utils/preact.ts";
import { tw } from "~/utils/tailwind.ts";
import Image from "~/components/inlines/Image.tsx";

import type { Ref } from "preact";

export type HeroProps = {
  ref: Ref<HTMLElement>;
};

export default defineComponent<HeroProps>(
  forwardRef<HTMLElement, HeroProps>((_, ref) => {
    return (
      <aside
        class={tw`fixed inset-0 -z-50`}
        ref={ref}
      >
        <figure
          class={tw`
            absolute top-0 left-0 size-full bg-secondary-300 pt-16
            split:w-1/2
          `}
        >
          <Image
            class={tw`size-full object-cover object-top`}
            src="/images/illust.webp"
            alt="VTuberとしての新篠ゆうのイラスト"
          />
        </figure>
        <figure
          class={tw`
            absolute top-0 right-0 size-full -z-10 bg-secondary-300 pt-16
            split:w-1/2
            [[data-active]>&]:z-10
          `}
        >
          <Image
            class={tw`size-full object-cover object-top`}
            src="/images/illust2.webp"
            alt="プログラマーとしての新篠ゆうのイラスト"
          />
        </figure>
      </aside>
    );
  }),
);
