let logger;

module.exports = function getLogger() {
  if (logger) {
    return logger;
  }
  let FCLogger;
  try {
    FCLogger = require('@fc/logger').FcLogger;
  } finally {
  }
  if (FCLogger) {
    try {
      const { container } = require('@tpp/common/framework/ioc/container');
      logger = container.get(FCLogger);
    } catch {
      logger = new FCLogger({});
    }
  }
  if (!logger) {
    logger = {
      emerg: () => {},
      alert: () => {},
      crit: () => {},
      error: () => {},
      warning: () => {},
      warn: () => {},
      notice: () => {},
      info: () => {},
      debug: () => {},
      trace: () => {},
    };
  }
  return logger;
};
