const { Router} = require('express');

module.exports = function({UserRoutes,middlewares}){
    const router = Router();
    router.use(middlewares);
    router.use('/',UserRoutes);
    return router;
}
