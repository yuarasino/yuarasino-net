import { createRef } from "preact";
import { useEffect } from "preact/hooks";
import throttle from "lodash.throttle";
import { defineComponent } from "../utils/preact.ts";
import { tw } from "../utils/tailwind.ts";
import Image from "../components/Image.tsx";

export default defineComponent(() => {
  const hero = createRef<HTMLElement>();

  useEffect(() => {
    const handler = throttle(() => {
      if (hero.current) {
        hero.current.toggleAttribute("flip", scrollY > innerHeight * 1.5);
      }
    }, 100);
    addEventListener("scroll", handler);
    return () => {
      removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <aside
      class={tw`fixed inset-0 -z-50`}
      ref={hero}
    >
      <figure
        class={tw`
          absolute inset-0 bg-secondary-300 pt-16
          split:right-1/2
        `}
      >
        <Image
          class={tw`size-full object-cover object-top`}
          src="/images/illust.webp"
          alt="新篠ゆうのイラスト"
        />
      </figure>
      <figure
        class={tw`
          absolute inset-0 -z-10 bg-secondary-300 pt-16
          split:left-1/2
          [[flip]_&]:z-10
        `}
      >
        <Image
          class={tw`size-full object-cover object-top`}
          src="/images/illust2.webp"
          alt="新篠ゆうのイラスト2"
        />
      </figure>
    </aside>
  );
});
