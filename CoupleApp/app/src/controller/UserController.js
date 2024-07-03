const output = {
    login: (req, res) => {
        res.render("home/login");
    },

    sign: (req, res) => {
        res.render("home/sign");
    }
};

const UserService = require("../Service/UserService");

const input = {
    login: (req, res) => {
        const user = new UserService(req.body);
        const response = user.login();
        console.log(response);
        return res.json(response);
    },
    sign: (req, res) => {
        const user = new UserService(req.body);
        const response = user.sign();
        console.log(response);
        return res.json(response);
    },
};



// 원래 key:value 값이지만 아래처럼 key만 선언할 경우
// key:key  value값이 key값으로 들어감
module.exports = {
    output,
    input
};