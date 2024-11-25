import { page } from "fresh";
import { defineHandlers, definePage } from "../utils/fresh.ts";

export const handler = defineHandlers({
  GET: ({ state }) => {
    state.title = "yuarasino.net";
    state.description = "新篠ゆうのウェブサイト";
    return page();
  },
});

export default definePage<typeof handler>(({ state }) => {
  return (
    <main class="min-h-screen pt-16">
      <h1 class="text-primary-500">{state.title}</h1>
      <p class="text-secondary-500">{state.description}</p>
    </main>
  );
});
