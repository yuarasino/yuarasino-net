import type { FunctionComponent, JSX } from "preact";

export type DefineProps<
  Tag extends keyof JSX.IntrinsicElements,
  Props = Record<string, never>,
> = JSX.IntrinsicElements[Tag] & Props;

export const defineComponent = <
  Props = Record<string, never>,
>(
  component: FunctionComponent<Props>,
): FunctionComponent<Props> => component;
