// 모듈
const express = require("express");
const app = express();

// 포트번호
const PORT = 3030;

// 라우팅
const ROUTES_HOME = require("./src/routes/home");

//앱 세팅
app.set("views","./src/views");
app.set("view engine", "ejs");

app.use("/",ROUTES_HOME); //use ->미들웨어를 등록해주는 메소드
app.use(express.static(`${__dirname}/src/public`));

module.exports = app;