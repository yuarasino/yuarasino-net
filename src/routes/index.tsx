import { page } from "fresh";
import { defineHandlers, definePage } from "~/utils/fresh.ts";
import Prof from "~/components/Prof.tsx";
import News from "~/components/News.tsx";
import Spec from "~/components/Spec.tsx";
import Work from "~/components/Work.tsx";

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
