const express = require('express');
const { Router} = require('express');

const path = require('path');
const cors = require('cors');
const morgan = require('morgan');


module.exports = function(){
    const middlewares = Router();
    middlewares.use(morgan('dev'));
    middlewares.use(cors());
    middlewares.use(express.json());
    middlewares.use(express.urlencoded({extended:false}));
    middlewares.use(express.static(path.join(ROOT_PATH,'/src/public')));
    return middlewares;
}