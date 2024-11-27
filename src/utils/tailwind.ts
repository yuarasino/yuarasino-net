export const tw = (
  fragments: TemplateStringsArray,
  ...values: unknown[]
): string => {
  const class_ = String.raw(
    { raw: fragments },
    ...values.map((value) => value ? value : ""),
  );
  return class_.trim().replaceAll(/\s+/g, " ");
};
