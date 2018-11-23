'use strict';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require("./webpack.config");

new WebpackDevServer(webpack(config),{
    publicPath:config.output.publicPath,
    hot:true,
    historyApiFallback:true,
    stats:{
        colors:true
    }
}).listen(3000,()=>{
    if(err){
        return console.log(err);
    }

    console.log('Listando em http://localhost:3000');
})