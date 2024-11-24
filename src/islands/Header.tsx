import { defineComponent } from "../utils/preact.ts";
import ImageLink from "../components/ImageLink.tsx";
import IconButton from "../components/IconButton.tsx";
import TextLink from "../components/TextLink.tsx";
import IconLink from "../components/IconLink.tsx";

import type { Signal } from "@preact/signals";

export type HeaderProps = {
  open: Signal<boolean>;
};

export default defineComponent<HeaderProps>(({ open }) => {
  const show = () => open.value = true;

  return (
    <header class="fixed inset-0 z-40 h-16">
      <nav class="flex justify-between h-16 w-full">
        <div class="flex p-2">
          <ImageLink
            class="p-2"
            href="/#top"
            src="/images/logo.webp"
            alt="サイトトップに戻る"
          />
        </div>
        <div class="flex p-2 split:hidden">
          <IconButton
            class="p-3"
            src="/icons/bars.svg"
            alt="メニューダイアログを開く"
            onClick={show}
          />
        </div>
        <div class="hidden gap-4 p-2 split:flex">
          <TextLink
            class="p-3"
            href="/#prof"
            label="prof"
            alt="プロフィールセクションを見る"
          />
          <TextLink
            class="p-3"
            href="/#news"
            label="news"
            alt="ニュースセクションを見る"
          />
          <TextLink
            class="p-3"
            href="/#spec"
            label="spec"
            alt="スペックセクションを見る"
          />
          <TextLink
            class="p-3"
            href="/#work"
            label="work"
            alt="ワークセクションを見る"
          />
          <TextLink
            class="p-3"
            href="/info"
            label="info"
            alt="インフォページを見る"
          />
          <TextLink
            class="p-3"
            href="/blog"
            label="blog"
            alt="ブログページを見る"
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
    </header>
  );
});
