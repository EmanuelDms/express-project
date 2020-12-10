import express from 'express';
import routes from './routes';

const app = express();

// Faz com que as requisições entendam json
app.use(express.json());

// Usa as rotas
app.use(routes);

export default app; 