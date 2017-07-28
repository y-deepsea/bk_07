//入口文件
var express = require("express");
var app = express();
//设置默认模板引擎
app.set('view engine', 'ejs');
//设置默认模板页面的存放路径
app.set('views', './views');
//托管静态资源
app.use('/node_modules')