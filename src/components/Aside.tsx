import { defineComponent } from "../utils/define.ts";

export default defineComponent(() => {
  return (
    <aside class="fixed inset-0 -z-50">
      <div class="absolute inset-0 pt-16 bg-secondary-300 split:right-1/2">
        <img
          class="size-full object-cover object-top"
          src="/images/illust.webp"
          alt="yuarasino illust"
          loading="eager"
        />
      </div>
      <div class="absolute inset-0 -z-10 pt-16 bg-secondary-300 split:left-1/2">
        <img
          class="size-full object-cover object-top"
          src="/images/illust2.webp"
          alt="yuarasino illust 2"
          loading="lazy"
        />
      </div>
    </aside>
  );
});
