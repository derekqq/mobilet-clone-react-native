module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "mysql",
        host: env("DATABASE_HOST", "mysql54.mydevil.net"),
        port: env.int("DATABASE_PORT", 3306),
        database: env("DATABASE_NAME", "m1361_ticketapp"),
        username: env("DATABASE_USERNAME", "m1361_ticket"),
        password: env("DATABASE_PASSWORD", "kY51VmFjGRcrGO2qcjbx"),
        ssl: env.bool("DATABASE_SSL", true),
      },
      options: {},
    },
  },
});
