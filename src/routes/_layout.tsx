import { definePage } from "~/utils/fresh.ts";
import { Header } from "~/components/sections/Header.tsx";
import { Footer } from "~/components/sections/Footer.tsx";

export default definePage(({ Component }) => {
  return (
    <body>
      <Header />
      <Component />
      <Footer />
    </body>
  );
});
