import type { FunctionComponent } from "preact";

export const defineComponent = <Props = Record<never, never>>(
  component: FunctionComponent<Props>,
): FunctionComponent<Props> => component;
