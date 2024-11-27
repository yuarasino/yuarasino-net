import { defineComponent } from "~/utils/preact.ts";
import { tw } from "~/utils/tailwind.ts";
import Container from "~/components/blocks/Container.tsx";

export default defineComponent(() => {
  return (
    <section id="work">
      <Container flip={true}>
        <h2 class={tw`uppercase`}>work</h2>
      </Container>
    </section>
  );
});
