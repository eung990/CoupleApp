const login = (req,res) => {
    res.render("home/login");
}

const sign = (req,res) => {
    res.render("home/sign");
}


// 원래 key:value 값이지만 아래처럼 key만 선언할 경우
// key:key  value값이 key값으로 들어감
module.exports = {
    login,
    sign
}