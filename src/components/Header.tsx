import { createRef } from "preact";
import { defineComponent } from "../utils/define.ts";

import type { AstroBuiltinProps } from "astro";

export interface HeaderProps extends AstroBuiltinProps {}

export default defineComponent<HeaderProps>(() => {
  const dialog = createRef<HTMLDialogElement>();

  return (
    <header class="fixed inset-x-0 top-0 font-display">
      <nav class="flex justify-between items-center h-16">
        <div class="flex px-2">
          <a class="block p-2" href="/">
            <img
              class="h-8 w-auto"
              src="/images/logo.webp"
              alt="yuarasino logo"
            />
          </a>
        </div>
        <div class="flex px-3 split:hidden">
          <button class="block p-2" onClick={() => dialog.current?.show()}>
            <i class="block h-6 w-6 iconify fa6-solid--bars" />
          </button>
        </div>
      </nav>
      <dialog class="split:hidden" ref={dialog}>dialog</dialog>
    </header>
  );
});
