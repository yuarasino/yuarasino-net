import { createRef } from "preact";
import { useEffect } from "preact/hooks";
import throttle from "lodash.throttle";
import { defineComponent } from "~/utils/preact.ts";
import Hero from "~/components/sections/Hero.tsx";

export default defineComponent(() => {
  const hero = createRef<HTMLElement>();

  useEffect(() => {
    const handler = throttle(
      () => {
        hero.current?.toggleAttribute(
          "data-active",
          scrollY > innerHeight * 1.5,
        );
      },
      100,
    );
    addEventListener("scroll", handler);
    return () => removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <Hero ref={hero} />
    </>
  );
});
