const UserDAO = require("../DAO/UserDAO");

class User {
    constructor(body) {
        this.body = body;
    };

    async login() {
        const body = this.body;
        const userFindResult = await UserDAO.userFind(body);
        const { u_id, u_pw, coupleURL } = await userFindResult[0];

        if (u_id) {
            if (u_id === body.u_id && u_pw === body.u_pw) {
                
                return {
                    success: true,
                    u_id: u_id,
                    coupleURL: coupleURL,
                };
            }
            return { success: false, msg: "비밀번호가 틀립니다." };
        }
        return { success: false, msg: "없는 계정입니다" };
    }

    async sign() {
        const body = this.body;
        const userSaveResult = await UserDAO.userSave(body);
        if (userSaveResult) {
            return { success: true };
        }
        return { success: false };
    }
}

module.exports = User;