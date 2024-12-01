import { clsx, defineComponent } from "~/utils/preact.ts";
import { Image } from "~/components/inlines/Image.tsx";
import { Icon } from "~/components/inlines/Icon.tsx";

import type { RefObject } from "preact";
import type { MenuItem } from "~/types.ts";

export type HeaderProps = {
  menuRef: RefObject<HTMLDialogElement>;
  menuItems: MenuItem[];
};

export const Header = defineComponent<HeaderProps>((
  { menuRef, menuItems },
) => {
  const showMenu = () => menuRef.current?.showModal();

  return (
    <header class="fixed inset-0 bottom-auto z-40">
      <nav>
        <div
          class={clsx(
            "flex justify-between items-center h-16 px-4",
            "split:px-8",
          )}
        >
          <p>
            <a
              class={clsx(
                "inline-flex",
                "hover:opacity-85",
              )}
              href="/#top"
            >
              <span class="sr-only">新篠ゆうのウェブサイト</span>
              <Image
                class="h-8 w-auto"
                src="/images/logo.webp"
                alt=""
              />
            </a>
          </p>
          <p
            class={clsx(
              "split:hidden",
            )}
          >
            <button
              class={clsx(
                "inline-flex items-center gap-1 p-1",
                "hover:opacity-70",
              )}
              type="button"
              onClick={showMenu}
            >
              <span class="uppercase">menu</span>
              <Icon
                class="size-6"
                src="/icons/bars.svg"
                alt=""
              />
            </button>
          </p>
          <p
            class={clsx(
              "hidden gap-8",
              "split:flex",
            )}
          >
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
    </header>
  );
});
