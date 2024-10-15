import { UsersMongoDAO } from "../dao/UserMongoDao.js"


class UsersService{
    constructor(dao){
        this.dao=dao
    }

    async getUserById(id){
        return await this.dao.getBy({_id:id})
    }
    async getUserByEmail(email){
        return await this.dao.getBy({email})
    }
    async createUser(user){
        return await this.dao.create(user)
    }
}

export const usersService=new UsersService(UsersMongoDAO)