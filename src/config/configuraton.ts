export default () => ({
  db_url: process.env.db_url,
  port: process.env.port || 1000,
  JWT_KEY: process.env.JWT_KEY,
});
