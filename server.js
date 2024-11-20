import express from 'express'; // importar express
import routes from './src/routes/postsRoutes.js';

const app = express();
routes(app);

// Servidor local sendo executado na porta 3000.
app.listen(3000,()=>{
  console.log('servidor escutando...');
});