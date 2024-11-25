import { definePage } from "../utils/fresh.ts";
import Header from "../islands/Header.tsx";
import Dialog from "../islands/Dialog.tsx";
import Footer from "../components/Footer.tsx";

export default definePage(({ Component }) => {
  return (
    <body>
      <Header />
      <Dialog />
      <Component />
      <Footer />
    </body>
  );
});
