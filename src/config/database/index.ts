import { createConnection, Connection, getConnection } from 'typeorm';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
async function singleConnection() {
  let connection: Connection;
  try {
    connection = await createConnection();
    console.log('Banco de dados conectado na porta 3306');
  } catch (e) {
    console.log(e);
  }

  return connection;
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function getConnectionDatabase() {
  return getConnection();
}

export { singleConnection, getConnectionDatabase };
