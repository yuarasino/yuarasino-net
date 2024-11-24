import { createRef } from "preact";
import { defineComponent } from "../utils/define.ts";
import HeaderLink from "./HeaderLink.tsx";

import type { AstroBuiltinProps } from "astro";

export interface HeaderProps extends AstroBuiltinProps {}

export default defineComponent<HeaderProps>(() => {
  const dialogRef = createRef<HTMLDialogElement>();

  const openDialog = () => dialogRef.current?.show();

  const closeDialog = () => dialogRef.current?.close();

  return (
    <header class="fixed inset-0 bottom-auto z-10 font-display">
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
          <button class="block p-2" onClick={openDialog}>
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
        <dialog
          class="fixed inset-0 z-20 m-0 p-0 size-auto bg-primary-300 text-white split:hidden"
          ref={dialogRef}
        >
          <div class="flex justify-between items-center h-16">
            <div class="flex p-2">
              <a class="block p-2" href="/#top" onClick={closeDialog}>
                <img
                  class="block h-8 w-auto"
                  src="/images/logo.webp"
                  alt="yuarasino logo"
                  loading="eager"
                />
              </a>
            </div>
            <div class="flex p-3">
              <button class="block p-2" onClick={closeDialog}>
                <i class="block size-6 iconify fa6-solid--xmark" />
              </button>
            </div>
          </div>
          <div class="flex flex-col justify-start items-center gap-4 p-3">
            <HeaderLink name="prof" href="/#prof" onClick={closeDialog} />
            <HeaderLink name="news" href="/#news" onClick={closeDialog} />
            <HeaderLink name="spec" href="/#spec" onClick={closeDialog} />
            <HeaderLink name="work" href="/#work" onClick={closeDialog} />
            <HeaderLink name="info" href="/info" onClick={closeDialog} />
            <HeaderLink name="blog" href="/blog" onClick={closeDialog} />
            <HeaderLink
              name="github"
              href="https://github.com/yuarasino/yuarasino-net"
              icon="fa6-brands--github"
              onClick={closeDialog}
            />
          </div>
        </dialog>
      </nav>
    </header>
  );
});
