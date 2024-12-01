import { defineComponent } from "~/utils/preact.ts";

export const News = defineComponent(() => {
  return (
    <section class="min-h-screen pt-16" id="news">
      <div class="max-w-screen-clamp mx-auto p-4">
        <h2 class="uppercase">news</h2>
      </div>
    </section>
  );
});
