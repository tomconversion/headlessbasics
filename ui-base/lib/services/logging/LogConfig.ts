import {LogLevel} from "typescript-logging";
import {Log4TSProvider} from "typescript-logging-log4ts-style";

export const log4TSProvider = Log4TSProvider.createProvider("AwesomeLog4TSProvider", {
  level: LogLevel.Debug,
  groups: [{
    expression: new RegExp(".+"),
  }]
});

/* Creates a logger called "model.Account" */
export const log = log4TSProvider.getLogger("headless.general");