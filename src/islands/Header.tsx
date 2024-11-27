import { defineComponent } from "~/utils/preact.ts";
import { tw } from "~/utils/tailwind.ts";
import ImageLink from "~/components/ImageLink.tsx";
import IconButton from "~/components/IconButton.tsx";
import TextLink from "~/components/TextLink.tsx";
import IconLink from "~/components/IconLink.tsx";

import type { Signal } from "@preact/signals";

export type HeaderProps = {
  open: Signal<boolean>;
};

export default defineComponent<HeaderProps>(({ open }) => {
  const show = () => open.value = true;

  return (
    <header class={tw`fixed inset-0 bottom-auto z-40`}>
      <nav class={tw`flex justify-between h-16`}>
        <div class={tw`flex p-2`}>
          <ImageLink
            href="/#top"
            src="/images/logo.webp"
            alt="サイトトップに戻る"
          />
        </div>
        <div
          class={tw`
            flex p-2
            split:hidden
          `}
        >
          <IconButton
            src="/icons/bars.svg"
            alt="メニューダイアログを開く"
            onClick={show}
          />
        </div>
        <div
          class={tw`
            hidden gap-4 p-2
            split:flex
          `}
        >
          <TextLink
            href="/#prof"
            label="prof"
            alt="プロフィールセクションを見る"
          />
          <TextLink
            href="/#news"
            label="news"
            alt="ニュースセクションを見る"
          />
          <TextLink
            href="/#spec"
            label="spec"
            alt="スペックセクションを見る"
          />
          <TextLink
            href="/#work"
            label="work"
            alt="ワークセクションを見る"
          />
          <TextLink
            href="/info"
            label="info"
            alt="インフォページを見る"
          />
          <TextLink
            href="/blog"
            label="blog"
            alt="ブログページを見る"
          />
          <IconLink
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
