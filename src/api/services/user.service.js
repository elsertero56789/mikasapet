

class UserService{
    /*constructor({UserRepository}){
        this._userRepository = UserRepository;
    }*/
    constructor(){
    }
    getUsers(){
        //const users = await this._userRepository.getUsers();
        const user = {
            "id": 1,
            "name":"Juan",
            "lastname":"Perez"        
        }
        return user;
    }

    /*async createUser(user){
        const createUser = await this._userRepository.createUser(user);
        return createUser;
    }*/
}
module.exports = UserService;