const { Router} =require('express');

module.exports = function({UserController}){
    
    const router = Router();
    //peticiones
    router.get('/',UserController.sayHello);
    router.get('/users',UserController.getControllerUsers);
    
    return router;
}