import { page } from "fresh";
import { defineHandlers, definePage } from "~/utils/fresh.ts";
import { Parallax } from "~/components/blocks/Parallax.tsx";
import { Profile } from "~/components/sections/home/Profile.tsx";
import { News } from "~/components/sections/home/News.tsx";
import { Resume } from "~/components/sections/home/Resume.tsx";
import { Works } from "~/components/sections/home/Works.tsx";

export const handler = defineHandlers({
  GET: ({ state }) => {
    state.title = "INFO | yuarasino.net";
    state.description = "INFO | 新篠ゆうのウェブサイト";
    return page();
  },
});

export default definePage<typeof handler>(() => {
  return (
    <main>
      <Parallax
        src="/images/illust.webp"
        alt="VTuberとしての新篠ゆうのイラスト"
        direction="left"
      >
        <Profile />
        <News />
      </Parallax>
      <Parallax
        src="/images/illust2.webp"
        alt="プログラマーとしての新篠ゆうのイラスト"
        direction="right"
      >
        <Resume />
        <Works />
      </Parallax>
    </main>
  );
});
