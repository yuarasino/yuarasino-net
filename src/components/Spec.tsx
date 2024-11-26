import { defineComponent } from "../utils/preact.ts";
import { tw } from "../utils/tailwind.ts";

export default defineComponent(() => {
  return (
    <section
      class={tw`
        min-h-screen bg-white
        split:mr-auto split:w-1/2
      `}
      id="spec"
    >
      <div class={tw`mx-auto max-w-screen-clamp pt-16`}>
        <h2 class={tw`uppercase`}>spec</h2>
      </div>
    </section>
  );
});
