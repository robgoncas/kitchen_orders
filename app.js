import express from 'express';
import dotenv from 'dotenv';
import { sequelize } from './src/config/db.js';
import auth_routes from './src/routes/auth_routes.js';
import comanda_routes from './src/routes/comanda_routes.js';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/auth', auth_routes);
app.use('/api/comandas', comanda_routes);

const iniciar = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Base de datos conectada - ok');
    //app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));
  } catch (e) {
    console.error(e);
  }
};

iniciar();
