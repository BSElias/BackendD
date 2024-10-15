import { usuariosModelo } from "./models/usersModel.js";

export class UsersMongoDAO{
    static async getBy(filtro={}){
        return await usuariosModelo.findOne(filtro).lean()
    }

    static async create(usuario){
        return await usuariosModelo.create(usuario)
    }
}