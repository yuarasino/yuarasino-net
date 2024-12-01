import { clsx, defineComponent } from "~/utils/preact.ts";
import { Image } from "~/components/inlines/Image.tsx";
import { Icon } from "~/components/inlines/Icon.tsx";

import type { RefObject } from "preact";
import type { MenuItem } from "~/types.ts";

export type DialogProps = {
  menuRef: RefObject<HTMLDialogElement>;
  menuItems: MenuItem[];
};

export const Dialog = defineComponent<DialogProps>((
  { menuRef, menuItems },
) => {
  const closeMenu = () => menuRef.current?.close();

  return (
    <dialog
      class="dialog fixed inset-0 z-50 bg-primary-300 text-white"
      ref={menuRef}
    >
      <nav>
        <div class="flex justify-between items-center h-16 px-4">
          <p>
            <a
              class={clsx(
                "inline-flex",
                "hover:opacity-85",
              )}
              href="/#top"
              onClick={closeMenu}
            >
              <Image
                class="h-8 w-auto"
                src="/images/logo.webp"
                alt="新篠ゆうのウェブサイト"
              />
            </a>
          </p>
          <p>
            <button
              class={clsx(
                "inline-flex items-center gap-1 p-1",
                "hover:opacity-70",
              )}
              type="button"
              onClick={closeMenu}
            >
              <span class="uppercase">close</span>
              <Icon
                class="size-6"
                src="/icons/xmark.svg"
                alt=""
              />
            </button>
          </p>
        </div>
        <div class="py-8">
          <p class="flex flex-col items-center gap-8">
            {menuItems.map(({ label, href }) => (
              <a
                class={clsx(
                  "inline-flex p-2",
                  "hover:opacity-70",
                )}
                href={href}
              >
                <span class="inline-block uppercase">{label}</span>
              </a>
            ))}
          </p>
        </div>
      </nav>
    </dialog>
  );
});
