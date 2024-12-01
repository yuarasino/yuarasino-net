import { definePage } from "~/utils/fresh.ts";
import { MenuIsland } from "~/islands/MenuIsland.tsx";
import { Footer } from "~/components/sections/Footer.tsx";

export default definePage(({ Component }) => {
  return (
    <body>
      <MenuIsland />
      <Component />
      <Footer />
    </body>
  );
});
