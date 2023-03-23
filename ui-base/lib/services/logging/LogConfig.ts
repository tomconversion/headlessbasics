/*--- LogConfig.ts ---*/
import {LogLevel} from "typescript-logging";
import {Log4TSProvider, Logger} from "typescript-logging-log4ts-style";

const provider = Log4TSProvider.createProvider("HeadlessProvider", {
  /* Specify the various group expressions to match against */
  groups: [{
    expression: new RegExp("debug.+"),
    level: LogLevel.Debug, /* This group will log on debug instead */
  }, {
    expression: new RegExp("info.+"),
    level: LogLevel.Info
  }],
});

export function getLogger(name: string): Logger {
  return provider.getLogger(name);
}

export const debug = getLogger("debug.headless");
export const info = getLogger("info.headless");