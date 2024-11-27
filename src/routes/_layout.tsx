import { definePage } from "~/utils/fresh.ts";
import MenuIsland from "~/islands/MenuIsland.tsx";
import HeroIsland from "~/islands/HeroIsland.tsx";
import Footer from "~/components/sections/Footer.tsx";

export default definePage(({ Component }) => {
  return (
    <body>
      <MenuIsland />
      <HeroIsland />
      <Component />
      <Footer />
    </body>
  );
});
