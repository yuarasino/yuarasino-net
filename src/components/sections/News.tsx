import { defineComponent } from "~/utils/preact.ts";
import { tw } from "~/utils/tailwind.ts";
import Container from "~/components/blocks/Container.tsx";

export default defineComponent(() => {
  return (
    <section id="news">
      <Container>
        <h2 class={tw`uppercase`}>news</h2>
      </Container>
    </section>
  );
});
