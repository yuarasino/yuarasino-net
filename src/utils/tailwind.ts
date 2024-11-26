import type { Config } from "tailwindcss";

export const defineConfig = (config: Config): Config => config;

export const tw = (
  fragments: TemplateStringsArray,
  ...values: unknown[]
): string => {
  const class_ = String.raw(
    { raw: fragments },
    ...values.map((value) => value ?? ""),
  );
  return class_.trim().replaceAll(/\s+/g, " ");
};
