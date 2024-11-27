import { page } from "fresh";
import { defineHandlers, definePage } from "~/utils/fresh.ts";
import Prof from "~/components/sections/Prof.tsx";
import News from "~/components/sections/News.tsx";
import Spec from "~/components/sections/Spec.tsx";
import Work from "~/components/sections/Work.tsx";

export const handler = defineHandlers({
  GET: ({ state }) => {
    state.title = "yuarasino.net";
    state.description = "新篠ゆうのウェブサイト";
    return page();
  },
});

export default definePage<typeof handler>(() => {
  return (
    <main>
      <Prof />
      <News />
      <Spec />
      <Work />
    </main>
  );
});
