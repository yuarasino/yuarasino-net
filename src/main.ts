import { App, fsRoutes, staticFiles, trailingSlashes } from "fresh";

import type { State } from "./utils/fresh.ts";

export const app = new App<State>();
app.use(staticFiles());
app.use(trailingSlashes("never"));

await fsRoutes(app, {
  dir: "src/",
  loadRoute: (path) => import(`./routes/${path}`),
  loadIsland: (path) => import(`./islands/${path}`),
});

if (import.meta.main) {
  await app.listen();
}
