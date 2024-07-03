const output ={
     login : (req,res) => {
        res.render("home/login");
    },
    
     sign : (req,res) => {
        res.render("home/sign");
    }
};

const UserVO = require("../../src/VO/UserVO");

const input = {
    login : (req,res) => {
       const id = req.body.id;
       const pw = req.body.pw;
        
       const users = UserVO.getUsers("id","pw","name");
       const response = {};
        if(users.id.includes(id)){ //includes() : 포함 한다면
            const idx = users.id.indexOf(id);
            if(users.pw[idx] === pw){
                response.success = true;
                return res.json(response);
            }
        }

        response.success = false;
        response.msg = "로그인에 실패하였습니다";
        return res.json(response);
    },
};



// 원래 key:value 값이지만 아래처럼 key만 선언할 경우
// key:key  value값이 key값으로 들어감
module.exports = {
    output,
    input
};