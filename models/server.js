const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosRoute = '/api/usuarios';

        // MIDDLEWARES 
        this.middlewares();

        // ROUTES 
        this.routes();
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // LECTURA Y PARSEO DEL BODY
        // intenta que los datos que se reciban se serialicen a json 
        this.app.use(express.json());

        // DIRECTORIO PUBLICO
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.usuariosRoute, require('../routes/usuariosRoute'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ', process.env.PORT);
        });
    }
}

module.exports = Server;