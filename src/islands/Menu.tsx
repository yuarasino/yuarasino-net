import { createRef } from "preact";
import { effect } from "@preact/signals";
import { defineComponent } from "../utils/preact.ts";
import { tw } from "../utils/tailwind.ts";
import ImageLink from "../components/ImageLink.tsx";
import IconButton from "../components/IconButton.tsx";
import TextLink from "../components/TextLink.tsx";
import IconLink from "../components/IconLink.tsx";

import type { Signal } from "@preact/signals";

export interface MenuProps {
  open: Signal<boolean>;
}

export default defineComponent<MenuProps>(({ open }) => {
  const menu = createRef<HTMLDialogElement>();

  const close = () => open.value = false;

  effect(() => open.value ? menu.current?.show() : menu.current?.close());

  return (
    <dialog
      class={tw`
        block fixed inset-0 z-50 bg-primary-300 text-white
        transition-transform duration-500 -translate-x-full
        [&[open]]:translate-x-0
      `}
      aria-label="メニューダイアログ"
      ref={menu}
    >
      <nav class={tw`flex flex-col h-full gap-4`}>
        <div class={tw`flex justify-between h-16 p-2`}>
          <ImageLink
            href="/#top"
            src="/images/logo.webp"
            alt="サイトトップに戻る"
            onClick={close}
          />
          <IconButton
            src="/icons/xmark.svg"
            alt="メニューダイアログを閉じる"
            onClick={close}
          />
        </div>
        <div class={tw`flex flex-col items-center gap-8 p-2`}>
          <TextLink
            href="/#prof"
            label="prof"
            alt="プロフィールセクションを見る"
            onClick={close}
          />
          <TextLink
            href="/#news"
            label="news"
            alt="ニュースセクションを見る"
            onClick={close}
          />
          <TextLink
            href="/#spec"
            label="spec"
            alt="スペックセクションを見る"
            onClick={close}
          />
          <TextLink
            href="/#work"
            label="work"
            alt="ワークセクションを見る"
            onClick={close}
          />
          <TextLink
            href="/info"
            label="info"
            alt="インフォページを見る"
            onClick={close}
          />
          <TextLink
            href="/blog"
            label="blog"
            alt="ブログページを見る"
            onClick={close}
          />
          <IconLink
            href="https://github.com/yuarasino/yuarasino-net"
            src="/icons/github.svg"
            alt="ソースコードを見る"
            target="_blank"
            onClick={close}
          />
        </div>
      </nav>
    </dialog>
  );
});
