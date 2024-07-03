class UserDTO {
    static #users = {
        id: ["wan", "two", "tre"],
        pw: ["123", "123", "12345"],
        name: ["완", "투", "뜨리"],
        email:[]
    };

    //reduce함수를 통해 DB에서 받은 값을 가져와 newUsers에 담아줘서 로직 처리
    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        console.log(newUsers);
        return newUsers;
    }

    //id값만 가지고 나머지 값 가져오기
    static getUserInfo(id) {
        const users = this.#users;
        // 입력된 id 값과 같은 id의 위치 반환
        const idx = users.id.indexOf(id);
        // 받아온 users의 key값들만 가져옴 
        const usersKeys = Object.keys(users);
        // usersKeys를 가지고 reduce를 돌려줌
        const userInfo = usersKeys.reduce((newUser, info) => {
            // newUser 키값에 users 키값의 idx(위치)의 값을 넣어줌
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    }

    static userSave(userInfo){
        const users = this.#users;
        users.id.push(userInfo.id);
        users.pw.push(userInfo.pw);
        users.name.push(userInfo.name);
        users.email.push(userInfo.email);
        console.log(users);
    }


};

module.exports = UserDTO;