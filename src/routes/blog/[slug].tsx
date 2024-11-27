import { page } from "fresh";
import { defineHandlers, definePage } from "~/utils/fresh.ts";
import { tw } from "~/utils/tailwind.ts";

export const handler = defineHandlers({
  GET: ({ state, params }) => {
    state.title = `${params.slug} | yuarasino.net`;
    state.description = `${params.slug} | 新篠ゆうのウェブサイト`;
    return page();
  },
});

export default definePage<typeof handler>(({ state }) => {
  return (
    <main class={tw`min-h-screen pt-16`}>
      <h1 class={tw`text-primary-500`}>{state.title}</h1>
      <p class={tw`text-secondary-500`}>{state.description}</p>
    </main>
  );
});
