const config = exports;
config.nodeEnv = process.env.NODE_ENV || 'development';
config.port = process.env.PORT,
config.helpscoutHost = process.env.HELPSCOUT_HOST;
config.helpscoutAuth = process.env.HELPSCOUT_AUTH;
config.sessionSecret = process.env.SESSION_SECRET;

if (config.nodeEnv === 'development') {
  config.sessionSecret = 'secretSession';
  config.port = 3000;
}
