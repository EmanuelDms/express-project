import express from 'express';
import routes from './routes';
import "./database";

class App{
  constructor() {
    // setup
    this.server = express();
    this.middlewares();
    this.routes();
  }
  
  middlewares(){
    // Faz com que as requisições entendam json (middlewares de configuração)
    this.server.use(express.json())
  }
  
  routes(){
    // Usa as rotas
    this.server.use(routes);
  }
}

export default new App().server;