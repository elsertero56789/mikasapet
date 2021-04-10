require('dotenv').config();
const path = require('path');
global.ROOT_PATH = require('app-root-path').toString();
global.ROOT_PATH_VIEWS = path.join(global.ROOT_PATH,'src/views');

const container = require('./src/api/container');

const application = container.resolve('app');
application.startUp().catch(err => {
    console.log(err);
    
    process.exit();
})