import { defineComponent } from "../utils/preact.ts";
import { tw } from "../utils/tailwind.ts";

import type { ComponentProps } from "preact";

export interface SectionProps extends ComponentProps<"section"> {
  flip?: boolean;
}

export default defineComponent<SectionProps>((
  { class: class_, flip, children, ...props },
) => {
  return (
    <section
      {...props}
      class={tw`
        min-h-screen bg-white pt-16
        split:w-1/2
        ${flip ? "split:mr-auto" : "split:ml-auto"}
        ${class_}
      `}
    >
      <div class={tw`mx-auto max-w-screen-clamp p-4`}>
        {children}
      </div>
    </section>
  );
});
