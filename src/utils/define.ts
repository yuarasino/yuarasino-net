import type { FunctionComponent } from "preact";

export const defineComponent = <P = Record<string, never>>(
  component: FunctionComponent<P>,
): FunctionComponent<P> => component;
