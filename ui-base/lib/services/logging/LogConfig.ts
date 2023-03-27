import { LogLevel } from "typescript-logging";
import { Log4TSProvider } from "typescript-logging-log4ts-style";

export const getLogger = (loggerName: string) => {
  const log4TSProvider = Logger.getProvider();
  return log4TSProvider.getLogger(loggerName);
};

class Logger {
  private static log4TSProvider: Log4TSProvider;

  private constructor() {}

  public static getProvider(): Log4TSProvider {
    if (!Logger.log4TSProvider) {
      Logger.log4TSProvider = Log4TSProvider.createProvider("AwesomeLog4TSProvider" + Date.now(), {
        level: LogLevel.Debug,
        groups: [{
          expression: new RegExp(".+"),
        }]
      });
    }
    return Logger.log4TSProvider;
  }
}

export default Logger;