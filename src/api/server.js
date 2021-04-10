const express = require('express');
const path = require('path');

const express_handlebars = require('express-handlebars');
class Server{
    constructor({Router}){
        this._port = process.env.PORT;
        this._server = express();
        //this._server.set(settings);
        this._server.use(Router);

    }
    start(){
        return new Promise((resolve)=>{

            this._server.engine('hbs',express_handlebars({
                defaultLayout:'main',
                layoutsDir:path.join(ROOT_PATH_VIEWS ,'layouts'),
                partialsDir: path.join(ROOT_PATH_VIEWS ,'partials'),
                extname:'hbs',
                
            }));
            this._server.set('view engine','hbs');
            
            const http = this._server.listen(this._port,()=>{
                const { port } = http.address();
                console.log("Servidor encendido en el puerto",this._port);
            });
            resolve();
        });
    }
}
module.exports = Server;