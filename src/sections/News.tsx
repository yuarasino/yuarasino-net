import { defineComponent } from "../utils/define.ts";

export default defineComponent(() => {
  return (
    <section
      class="h-screen pt-16 bg-white split:ml-auto split:w-1/2"
      id="news"
    >
      <div class="max-w-screen-clamp mx-auto p-4">
        <h2 class="uppercase">news</h2>
      </div>
    </section>
  );
});
