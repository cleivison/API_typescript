module.exports = {
  type: process.env.DB_TYPE || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5433,
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'root',
  database: process.env.DB_NAME || 'projecttype',
  synchronize: true,
  logging: true,
  entities: [process.env.TS_NODE_DEV ? 'src/models/**/*.ts' : 'dist/models/**/*.js'],
  migrations: ['src//migrations/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
};
console.log(process.env.TS_NODE_DEV);
