import { createRef } from "preact";
import { defineComponent } from "../utils/define.ts";
import HeaderLink from "./HeaderLink.tsx";

import type { AstroBuiltinProps } from "astro";

export interface HeaderProps extends AstroBuiltinProps {}

export default defineComponent<HeaderProps>(() => {
  const dialog = createRef<HTMLDialogElement>();

  return (
    <header class="fixed inset-0 bottom-auto font-display">
      <nav class="flex justify-between items-center h-16">
        <div class="flex p-2">
          <a class="block p-2" href="/#top">
            <img
              class="block h-8 w-auto"
              src="/images/logo.webp"
              alt="yuarasino logo"
              loading="eager"
            />
          </a>
        </div>
        <div class="flex p-3 split:hidden">
          <button class="block p-2" onClick={() => dialog.current?.show()}>
            <i class="block size-6 iconify fa6-solid--bars" />
          </button>
        </div>
        <div class="hidden gap-4 p-3 split:flex">
          <HeaderLink name="prof" href="/#prof" />
          <HeaderLink name="news" href="/#news" />
          <HeaderLink name="spec" href="/#spec" />
          <HeaderLink name="work" href="/#work" />
          <HeaderLink name="info" href="/info" />
          <HeaderLink name="blog" href="/blog" />
          <HeaderLink
            name="github"
            href="https://github.com/yuarasino/yuarasino-net"
            icon="fa6-brands--github"
          />
        </div>
      </nav>
      <dialog class="split:hidden" ref={dialog}>dialog</dialog>
    </header>
  );
});
