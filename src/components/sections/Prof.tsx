import { defineComponent } from "~/utils/preact.ts";
import { tw } from "~/utils/tailwind.ts";
import Section from "~/components/blocks/Section.tsx";

export default defineComponent(() => {
  return (
    <Section
      class={tw`mt-[100vh] split:mt-0`}
      id="prof"
    >
      <h2 class={tw`uppercase`}>prof</h2>
    </Section>
  );
});
