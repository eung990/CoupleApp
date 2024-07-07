// 모듈
const express = require("express");
//const bodyParser = require("body-parser");
const app = express();

const cookieParser = require("cookie-parser");

const session = require("express-session");


// 포트번호
const PORT = 3030;

// 라우팅
const ROUTES_HOME = require("./src/routes/home/index.js");


app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized:true ,
}));

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");


//미들웨어 등록
app.use(express.static(`${__dirname}/src/public`));

/*express 4.16.0 버전에서는 bodyParser가 express generator에 내장되어 있어 따로 설치하지 않아도 된다
그냥 express로 사용하면됨*/
//body를 json 형태로 구분해줘
app.use(express.json());

//URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(express.urlencoded({ extended: true }));



//use ->미들웨어를 등록해주는 메소드
app.use("/", ROUTES_HOME);
module.exports = app;