import { definePage } from "~/utils/fresh.ts";

export default definePage(({ Component, state }) => {
  return (
    <html lang="ja">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>{state.title}</title>
        <meta name="description" content={state.description} />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
});
