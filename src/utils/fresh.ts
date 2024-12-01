import { createDefine } from "fresh";

import type { MetaState } from "~/types.ts";

const define = createDefine<MetaState>();

export const defineMiddleware = define.middleware;

export const defineHandlers = define.handlers;

export const definePage = define.page;
