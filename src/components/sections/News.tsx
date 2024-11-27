import { defineComponent } from "~/utils/preact.ts";
import { tw } from "~/utils/tailwind.ts";
import Section from "~/components/blocks/Section.tsx";

export default defineComponent(() => {
  return (
    <Section id="news">
      <h2 class={tw`uppercase`}>news</h2>
    </Section>
  );
});
