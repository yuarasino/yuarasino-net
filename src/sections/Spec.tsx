import { defineComponent } from "../utils/define.ts";

export default defineComponent(() => {
  return (
    <section
      class="mt-[100vh] h-screen pt-16 bg-white split:mt-0 split:mr-auto split:w-1/2"
      id="spec"
    >
      <div class="max-w-screen-clamp mx-auto p-4">
        <h2 class="uppercase">spec</h2>
      </div>
    </section>
  );
});
