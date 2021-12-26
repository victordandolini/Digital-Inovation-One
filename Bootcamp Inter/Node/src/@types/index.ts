import express, {Request, Response, NextFunction } from 'express'
import usersRoute from '../routes/users.routes';

const app = express()
const port = 3000

// Configurações de Aplicação
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Configurações de Rotas
app.use(usersRoute);

app.get('/status', (req:Request, res:Response, next: NextFunction) => {
    res.status(200).send({foo: 'sucess'});
});
// Inicialização do Servidor
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});
