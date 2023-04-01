import express, { Application } from 'express';
import routeProf from '../routes/profesores.route';
import routeUser from '../routes/user.route';
import routeLogin from '../routes/user.route';
import routeBata from '../routes/bata.route';
import routeMalabo from '../routes/malabo.route';
import routeMbini from '../routes/mbini.route';
import routeCogo from '../routes/cogo.route';
import routeAnisok from '../routes/anisok.route';
import routeNiefang from '../routes/niefang.route'
import routeMikomiseng from '../routes/mikomiseng.route';
import routeLuba from '../routes/luba.route'
import routeAnnobon from '../routes/annobon.route'
import routeCentroP from '../routes/centro.route'
import cors from 'cors';
import routeContacto from '../routes/contacto.route'





export class Server {
    //declaracion
    private app: Application
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000'
        this.listen();
        this.midlewares();
        this.routes();
    }

    //una funcion 
    listen() {
        this.app.listen(this.port, () => {
            // console.log('Servidor levantado en el puerto ' + this.port)
        })
    }

    //una funcion para las rutas de prof,  user
    routes() {
        this.app.use('/api/contacto', routeContacto)
        this.app.use('/api/profesor', routeProf)
        this.app.use('/api', routeBata)
        this.app.use('/api', routeMalabo)
        this.app.use('/api', routeMbini)
        this.app.use('/api', routeCogo)
        this.app.use('/api', routeAnisok)
        this.app.use('/api', routeNiefang)
        this.app.use('/api', routeMikomiseng)
        this.app.use('/api', routeLuba)
        this.app.use('/api', routeAnnobon)
        this.app.use('/api', routeCentroP)
        this.app.use('/api/users', routeUser)
        this.app.use('/api', routeLogin)

    }

    //una foncion 
    midlewares() {
        //parceo body
        this.app.use(express.json())

        //cors
        this.app.use(cors())
    }

    //tes de conecion


}

export default Server