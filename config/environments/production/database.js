const parse = require('postgres://nqxtymsbtwlwru:67c583e21160e452e07a1fcaf8490d7b8279ff39954a73da7b3936f556635c68@ec2-3-225-213-67.compute-1.amazonaws.com:5432/d691ib4687u0qv').parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: config.host,
        port: config.port,
        database: config.database,
        username: config.user,
        password: config.password,
        ssl: {
          rejectUnauthorized: false,
        },
      },
      options: {
        ssl: true,
      },
    },
  },
});
