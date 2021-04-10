class UserController{
    constructor({UserService}){
        this.userService = UserService;
    }
    sayHello(req,res){
        return res.render(ROOT_PATH_VIEWS +'/links/home');
    }
    async getControllerUsers(req,res){
        
        return await res.json({"message":this._path});
    } 
};

module.exports = UserController;