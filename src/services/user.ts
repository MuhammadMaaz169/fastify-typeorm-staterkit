import { appDataSource } from "../data-source";
import { User } from "../entity/User";

interface CreateUserDto {

}
interface UpdateUserDto {

}
export const findAll = async () => {
        
    return await appDataSource.getRepository(User).find()

};

export const create = async (createUserDto: CreateUserDto) => {
    const newUser = appDataSource.getRepository(User).create(createUserDto)
    return await appDataSource.getRepository(User).save(newUser)
}

export const findOne = async (id: number) => {
    return await appDataSource.getRepository(User).findOne({
        where: {
            id
        }
    })
}

export const update = async (id: number, updateUserDto: UpdateUserDto) => {
    return await appDataSource.getRepository(User).update(id, updateUserDto)
}
 
export const remove = async (id: number) => {
    return await appDataSource.getRepository(User).delete(id)
}

