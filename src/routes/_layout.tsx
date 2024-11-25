import { signal } from "@preact/signals";
import { definePage } from "../utils/fresh.ts";
import Header from "../islands/Header.tsx";
import Menu from "../islands/Menu.tsx";
import Footer from "../components/Footer.tsx";

export default definePage(({ Component }) => {
  const open = signal(false);

  return (
    <body>
      <Header open={open} />
      <Menu open={open} />
      <Component />
      <Footer />
    </body>
  );
});
