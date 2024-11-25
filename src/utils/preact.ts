import type { FunctionComponent } from "preact";

export const defineComponent = <Props = Record<string, never>>(
  component: FunctionComponent<Props>,
): FunctionComponent<Props> => component;
