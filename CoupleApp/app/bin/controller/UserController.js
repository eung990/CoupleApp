const output ={
     login : (req,res) => {
        res.render("home/login");
    },
    
     sign : (req,res) => {
        res.render("home/sign");
    }
};

const input = {
    login : (req,res) => {
       const id = req.body.id;
       const pw = req.body.pw;

        if(users.id.includes(id)){ //includes() : 포함 한다면
            const idx = users.id.indexOf(id);
            if(users.pw[idx] === pw){
                
                return res.json({
                    success: true,
                    
                });
            }
        }

        return res.json({
            success:false,
            msg: "로그인에 실패하였습니다",
        });
    },
};

const users = {
    id: ["wan","two","tre"],
    pw: ["123","123","12345"]
};

// 원래 key:value 값이지만 아래처럼 key만 선언할 경우
// key:key  value값이 key값으로 들어감
module.exports = {
    output,
    input
};