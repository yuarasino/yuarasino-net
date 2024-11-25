import { createRef } from "preact";
import { effect } from "@preact/signals";
import { defineComponent } from "../utils/preact.ts";
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
      class="dialog fixed inset-0 z-50 bg-primary-300 text-white"
      aria-label="メニューダイアログ"
      ref={menu}
    >
      <nav class="flex flex-col h-full w-full gap-4">
        <div class="flex justify-between h-16 p-2">
          <ImageLink
            class="p-2"
            href="/#top"
            src="/images/logo.webp"
            alt="サイトトップに戻る"
            onClick={close}
          />
          <IconButton
            class="p-3"
            src="/icons/xmark.svg"
            alt="メニューダイアログを閉じる"
            onClick={close}
          />
        </div>
        <div class="flex flex-col items-center gap-8 p-2">
          <TextLink
            class="p-3"
            href="/#prof"
            label="prof"
            alt="プロフィールセクションを見る"
            onClick={close}
          />
          <TextLink
            class="p-3"
            href="/#news"
            label="news"
            alt="ニュースセクションを見る"
            onClick={close}
          />
          <TextLink
            class="p-3"
            href="/#spec"
            label="spec"
            alt="スペックセクションを見る"
            onClick={close}
          />
          <TextLink
            class="p-3"
            href="/#work"
            label="work"
            alt="ワークセクションを見る"
            onClick={close}
          />
          <TextLink
            class="p-3"
            href="/info"
            label="info"
            alt="インフォページを見る"
            onClick={close}
          />
          <TextLink
            class="p-3"
            href="/blog"
            label="blog"
            alt="ブログページを見る"
            onClick={close}
          />
          <IconLink
            class="p-3"
            href="https://github.com/yuarasino/yuarasino-net"
            src="/icons/github.svg"
            alt="ソースコードを見る"
            target="_blank"
          />
        </div>
      </nav>
    </dialog>
  );
});
