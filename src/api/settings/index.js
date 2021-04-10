const express = require('express');
const path = require('path');
const express_handlebars = require('express-handlebars');

module.exports = function(){
    const settings = express();
    
    
    settings.engine('hbs',express_handlebars({
        defaultLayout:'main',
        layoutsDir:path.join(ROOT_PATH ,'views/layouts'),
        partialsDir: path.join(ROOT_PATH ,'views/partials'),
        extname:'hbs',
    }));
    settings.set('view engine','hbs');
    return settings;
};