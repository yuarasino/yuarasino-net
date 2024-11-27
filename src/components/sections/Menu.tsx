import { forwardRef } from "preact/compat";
import { defineComponent } from "~/utils/preact.ts";
import { tw } from "~/utils/tailwind.ts";
import ImageLink from "~/components/inlines/ImageLink.tsx";
import IconButton from "~/components/inlines/IconButton.tsx";
import TextLink from "~/components/inlines/TextLink.tsx";
import IconLink from "~/components/inlines/IconLink.tsx";

import type { Ref } from "preact";

export type MenuProps = {
  ref: Ref<HTMLDialogElement>;
  close: () => void;
};

export default defineComponent<MenuProps>(
  forwardRef<HTMLDialogElement, MenuProps>(({ close }, ref) => {
    return (
      <dialog
        class={tw`
          block fixed inset-0 z-50 bg-primary-300 text-white
          transition-transform duration-500 -translate-x-full
          [&[data-active]]:translate-x-0
        `}
        aria-label="menu dialog"
        ref={ref}
      >
        <nav>
          <div class={tw`flex justify-between items-center h-16 px-4`}>
            <p class={tw``}>
              <ImageLink
                href="/#top"
                src="/images/logo.webp"
                alt="top"
                onClick={close}
              />
            </p>
            <p class={tw``}>
              <IconButton
                src="/icons/xmark.svg"
                alt="close menu"
                onClick={close}
              />
            </p>
          </div>
          <div class={tw`py-4`}>
            <p class={tw`flex flex-col items-center gap-12`}>
              <TextLink
                href="/#prof"
                label="prof"
                onClick={close}
              />
              <TextLink
                href="/#news"
                label="news"
                onClick={close}
              />
              <TextLink
                href="/#spec"
                label="spec"
                onClick={close}
              />
              <TextLink
                href="/#work"
                label="work"
                onClick={close}
              />
              <TextLink
                href="/info"
                label="info"
                onClick={close}
              />
              <TextLink
                href="/blog"
                label="blog"
                onClick={close}
              />
              <IconLink
                href="https://github.com/yuarasino/yuarasino-net"
                src="/icons/github.svg"
                alt="github"
                target="_blank"
                onClick={close}
              />
            </p>
          </div>
        </nav>
      </dialog>
    );
  }),
);
