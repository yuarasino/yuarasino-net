import { createRef } from "preact";
import { defineComponent } from "../utils/define.ts";

import type { AstroBuiltinProps } from "astro";

export interface HeaderProps extends AstroBuiltinProps {}

export default defineComponent<HeaderProps>(() => {
  const dialog = createRef<HTMLDialogElement>();

  return (
    <header class="font-display">
      <p>header</p>
      <button onClick={() => dialog.current?.show()}>open</button>
      <dialog ref={dialog}>dialog</dialog>
    </header>
  );
});
