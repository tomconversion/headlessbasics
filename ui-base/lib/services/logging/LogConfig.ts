import { LogLevel } from "typescript-logging";
import { Log4TSProvider } from "typescript-logging-log4ts-style";

const log4TSProvider = Log4TSProvider.createProvider("AwesomeLog4TSProvider", {
  level: LogLevel.Debug,
  groups: [{
    expression: new RegExp(".+"),
  }]
});

export const getLogger = (loggerName: string) => {
  return log4TSProvider.getLogger(loggerName);
};