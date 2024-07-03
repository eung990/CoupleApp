class UserVO {
    static #users = {
        id: ["wan","two","tre"],
        pw: ["123","123","12345"],
        name : ["완","투","뜨리"]
    };

    static getUsers(...fields){
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
};

module.exports = UserVO;