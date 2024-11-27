import { defineComponent } from "~/utils/preact.ts";
import { tw } from "~/utils/tailwind.ts";
import Container from "~/components/blocks/Container.tsx";

export default defineComponent(() => {
  return (
    <section
      class={tw`mt-screen split:mt-0`}
      id="prof"
    >
      <Container>
        <h2 class={tw`uppercase`}>prof</h2>
      </Container>
    </section>
  );
});
