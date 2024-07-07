const con = require("../../DBConfig");
const { v4 } = require('uuid');


class UserDAO {

    static async userInfoFind() {

    }

    static async userFind(userInfo) {
        const request = new con.Request();

        try {

            const userFindQuery = "SELECT u_id, u_pw, coupleURL FROM users WHERE u_id = @u_id AND u_pw = @u_pw";

            const u_id = userInfo.u_id;
            const u_pw = userInfo.u_pw;

            request.input('u_id', u_id);
            request.input('u_pw', u_pw);

            const userFindResult = await request.query(userFindQuery);
            console.log("userFindResult 결과 값===>" + userFindResult.recordset);
            return userFindResult.recordset;
        } catch (err) {
            console.error('Error in userFind:', err);

        }

    }

    static async userSave(userInfo) {

        const request = new con.Request();

        const uuid = () => {
            const tokens = v4().split('-');
            return tokens[2] + tokens[1] + tokens[0] + tokens[3] + tokens[4];
        }

        const coupleURL = uuid();

        try {
            request.input('u_name', userInfo.u_name);
            request.input('u_id', userInfo.u_id);
            request.input('u_pw', userInfo.u_pw);
            request.input('u_email', userInfo.u_email);
            request.input('coupleURL', coupleURL);

            // ID 중복 체크
            const checkIdQuery = "SELECT u_id FROM users WHERE u_id = @u_id";
            const checkIdResult = await request.query(checkIdQuery);

            if (checkIdResult.recordset.length > 0) {
                throw new Error("중복된 아이디입니다. 다시 입력해주세요");
            }

            // 이메일 중복 체크
            const checkEmailQuery = "SELECT u_email FROM users WHERE u_email = @u_email";
            const checkEmailResult = await request.query(checkEmailQuery);

            if (checkEmailResult.recordset.length > 0) {
                throw new Error("중복된 이메일입니다. 다시 입력해주세요");
            }

            // 사용자 정보 저장
            const insertQuery = `
                INSERT INTO users (u_name, u_id, u_pw, u_email, coupleURL) 
                VALUES (@u_name, @u_id, @u_pw, @u_email, @coupleURL)
            `;



            const insertResult = await request.query(insertQuery);

            console.log('Query result:', insertResult);
            return { success: true, message: "사용자 등록 성공" };
        } catch (err) {
            console.error('Error executing query:', err);
            return { success: false, message: err.message };
        }
    }


};

module.exports = UserDAO;