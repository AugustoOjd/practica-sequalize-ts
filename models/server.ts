import express, { Application, json } from 'express'
import userRoutes from '../routes/usuario'
import cors  from 'cors'

class Server {

    private app: Application;
    private port: string;
    private paths = {
        usuarios: '/api/usuarios'
    }

    constructor(){
        this.app    = express()
        this.port   = process.env.PORT || '8000'


        // Middlewares
        this.middlewares();

        // Definir rutas
        this.routes();
    }

    middlewares(){

        // CORS

        this.app.use( cors())
        // Lectura del body

        this.app.use( express.json() )
        // Carpeta Publica

        this.app.use( express.static( 'public' ) )
    }


    routes(){
        this.app.use( this.paths.usuarios, userRoutes )
    }


    listen(){
        this.app.listen( this.port, ()=>{
            console.log('Servidor corriendo en puerto ' + this.port)
        })
    }

    

}


export default Server