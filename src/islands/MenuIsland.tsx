import { createRef } from "preact";
import { defineComponent } from "~/utils/preact.ts";
import Header from "~/components/sections/Header.tsx";
import Menu from "~/components/sections/Menu.tsx";

export default defineComponent(() => {
  const menu = createRef<HTMLDialogElement>();

  const show = () => {
    menu.current?.show();
    menu.current?.toggleAttribute("data-active", true);
  };

  const close = () => {
    menu.current?.close();
    menu.current?.toggleAttribute("data-active", false);
  };

  return (
    <>
      <Header show={show} />
      <Menu ref={menu} close={close} />
    </>
  );
});
