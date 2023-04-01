"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const profesores_route_1 = __importDefault(require("../routes/profesores.route"));
const user_route_1 = __importDefault(require("../routes/user.route"));
const user_route_2 = __importDefault(require("../routes/user.route"));
const bata_route_1 = __importDefault(require("../routes/bata.route"));
const malabo_route_1 = __importDefault(require("../routes/malabo.route"));
const mbini_route_1 = __importDefault(require("../routes/mbini.route"));
const cogo_route_1 = __importDefault(require("../routes/cogo.route"));
const anisok_route_1 = __importDefault(require("../routes/anisok.route"));
const niefang_route_1 = __importDefault(require("../routes/niefang.route"));
const mikomiseng_route_1 = __importDefault(require("../routes/mikomiseng.route"));
const luba_route_1 = __importDefault(require("../routes/luba.route"));
const annobon_route_1 = __importDefault(require("../routes/annobon.route"));
const centro_route_1 = __importDefault(require("../routes/centro.route"));
const cors_1 = __importDefault(require("cors"));
const contacto_route_1 = __importDefault(require("../routes/contacto.route"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3000';
        this.listen();
        this.midlewares();
        this.routes();
    }
    //una funcion 
    listen() {
        this.app.listen(this.port, () => {
            // console.log('Servidor levantado en el puerto ' + this.port)
        });
    }
    //una funcion para las rutas de prof,  user
    routes() {
        this.app.use('/api/contacto', contacto_route_1.default);
        this.app.use('/api/profesor', profesores_route_1.default);
        this.app.use('/api', bata_route_1.default);
        this.app.use('/api', malabo_route_1.default);
        this.app.use('/api', mbini_route_1.default);
        this.app.use('/api', cogo_route_1.default);
        this.app.use('/api', anisok_route_1.default);
        this.app.use('/api', niefang_route_1.default);
        this.app.use('/api', mikomiseng_route_1.default);
        this.app.use('/api', luba_route_1.default);
        this.app.use('/api', annobon_route_1.default);
        this.app.use('/api', centro_route_1.default);
        this.app.use('/api/users', user_route_1.default);
        this.app.use('/api', user_route_2.default);
    }
    //una foncion 
    midlewares() {
        //parceo body
        this.app.use(express_1.default.json());
        //cors
        this.app.use((0, cors_1.default)());
    }
}
exports.Server = Server;
exports.default = Server;
