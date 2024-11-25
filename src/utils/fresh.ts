import { createDefine } from "fresh";

export interface State {
  title?: string;
  description?: string;
}

const define = createDefine<State>();

export const defineMiddleware = define.middleware;

export const defineHandlers = define.handlers;

export const definePage = define.page;
