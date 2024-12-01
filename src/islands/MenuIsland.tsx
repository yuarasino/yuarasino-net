import { createRef } from "preact";
import { defineComponent } from "~/utils/preact.ts";
import { Header } from "~/components/sections/Header.tsx";
import { Dialog } from "~/components/sections/Dialog.tsx";

import type { MenuItem } from "~/types.ts";

export const MenuIsland = defineComponent(() => {
  const menuRef = createRef<HTMLDialogElement>();

  const menuItems: MenuItem[] = [
    { label: "profile", href: "/#profile" },
    { label: "news", href: "/#news" },
    { label: "resume", href: "/#resume" },
    { label: "works", href: "/#works" },
    { label: "blog", href: "/blog" },
    { label: "info", href: "/info" },
  ];

  return (
    <>
      <Header menuRef={menuRef} menuItems={menuItems} />
      <Dialog menuRef={menuRef} menuItems={menuItems} />
    </>
  );
});
