import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import Routes from 'routes';
import { singleConnection } from 'config/database';

class App {
  public express: express.Application;

  /**
   * Cosntrutor responsável por habilitar todas as funcionalidades da aplicação
   *
   * @public
   * @constructor
   */
  public constructor() {
    this.express = express();
    this.middlewares();
    this.router();
    this.connect();
  }

  /**
   * Método responsável por habilitar os middlewares da aplicação
   *
   * @private
   * @returns {void} void
   */
  private middlewares(): void {
    this.express.use(express.json({ limit: '25mb' }));
    this.express.use(cors());
  }

  /**
   * Método responsável por habilitar as rotas da aplicação
   *
   * @private
   * @returns {void} void
   */
  private router(): void {
    this.express.use(Routes);
  }

  /**
   * Método responsável por criar uma conexao com o banco de dados
   *
   * @private
   * @returns {Promise<void>} Promise<void>
   */
  private async connect(): Promise<void> {
    await singleConnection();
  }
}

export default new App().express;
