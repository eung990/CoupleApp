const UserDTO = require("../DTO/UserDTO");

class User {
    constructor(body) {
        this.body = body;
    };

    login() {
        const body = this.body;
        const { id, pw } = UserDTO.getUserInfo(body.id);


        if (id) {
            if (id === body.id && pw === body.pw) {
                return { success: true };
            }
            return { success: false, msg: "비밀번호가 틀립니다." };
        }
        return { success: false, msg: "없는 계정입니다" };
    }

    sign(){
        const body = this.body;
        UserDTO.userSave(body);
    }
}

module.exports = User;