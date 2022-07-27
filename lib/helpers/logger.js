let logger;

module.exports = function getLogger() {
  if (logger) {
    return logger;
  }
  let FCLogger;
  try {
    FCLogger = require('@fc/logger');
  } finally {
  }
  if (FCLogger) {
    try {
      const { Container } = require('inversify');
      logger = Container.get(FCLogger);
    } finally {
      logger = new FCLogger();
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
