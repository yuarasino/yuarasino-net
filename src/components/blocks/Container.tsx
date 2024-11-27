import { defineComponent } from "~/utils/preact.ts";
import { tw } from "~/utils/tailwind.ts";

import type { ComponentChildren } from "preact";
import type { DefineProps } from "~/utils/preact.ts";

export type ContainerProps = DefineProps<"div", {
  children?: ComponentChildren;
  flip?: boolean;
}>;

export default defineComponent<ContainerProps>((
  { class: class_, children, flip, ...props },
) => {
  return (
    <div
      {...props}
      class={tw`
        min-h-screen pt-16 bg-white
        split:w-1/2
        ${flip ? "split:mr-auto" : "split:ml-auto"}
        ${class_}
      `}
    >
      <div class={tw`max-w-screen-clamp mx-auto p-4`}>
        {children}
      </div>
    </div>
  );
});
