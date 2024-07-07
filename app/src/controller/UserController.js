const output = {
    login: (req, res) => {
        res.render("home/login");
    },

    sign: (req, res) => {
        res.render("home/sign");
    },
    board: (req, res) => {
        res.render("home/board");
    },
    Map: (req, res) => {
        res.render("home/Map");
    },

    session: async (req, res) => {
        const u_id = await req.session.u_id;
        const coupleURL = await req.session.coupleURL;
        const userInfo = {
            u_id : u_id,
            coupleURL : coupleURL
        };
        console.log(userInfo);
        
        return res.json(userInfo);
        
    }
};


const UserService = require("../Service/UserService");

const input = {
    login: async (req, res) => {
        const user = new UserService(req.body);
        const response = await user.login();
        if (response.success) {
            req.session.u_id = response.u_id;
            req.session.coupleURL = response.coupleURL;
            console.log(req.session.u_id);
            console.log(req.session.coupleURL);
    
            return res.json(response);
            
        } 

        
    },
    sign: async (req, res) => {
        const user = new UserService(req.body);
        const response = await user.sign();
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