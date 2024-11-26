import { defineComponent } from "../utils/preact.ts";
import { tw } from "../utils/tailwind.ts";
import Section from "./Section.tsx";

export default defineComponent(() => {
  return (
    <Section id="work" flip={true}>
      <h2 class={tw`uppercase`}>work</h2>
    </Section>
  );
});
