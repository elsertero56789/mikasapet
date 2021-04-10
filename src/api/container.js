const { asClass, createContainer, asFunction , asValue } = require('awilix');
const { UserController } = require('./controller');

const Server = require('./server');
const StartUp = require('./startup');
const router = require('./routes');
const userRoutes = require('./routes/user.routes');
const middlewares = require('./middlewares');
const settings = require('./settings');
const UserService = require('./services/user.service');

const container = createContainer();

container.register({
    app: asClass(StartUp).singleton(),
    server: asClass(Server).singleton()
})
.register({
    UserController: asClass(UserController).singleton()
})
.register({
    Router: asFunction(router).singleton()
})
.register({
    UserRoutes: asFunction(userRoutes).singleton()
})
.register({
    middlewares: asFunction(middlewares).singleton()
})
.register({
    UserService: asClass(UserService).singleton()
})

module.exports = container;