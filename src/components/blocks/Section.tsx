import { defineComponent } from "~/utils/preact.ts";
import { tw } from "~/utils/tailwind.ts";

import type { DefineProps } from "~/utils/preact.ts";

export type SectionProps = DefineProps<"section", {
  flip?: boolean;
}>;

export default defineComponent<SectionProps>((
  { class: class_, flip, children, ...props },
) => {
  return (
    <section
      {...props}
      class={tw`
        min-h-screen bg-white pt-16
        split:w-1/2 ${flip ? "split:mr-auto" : "split:ml-auto"}
        ${class_}
      `}
    >
      <div class={tw`max-w-screen-clamp mx-auto p-4`}>
        {children}
      </div>
    </section>
  );
});
