import {User} from "./entities/user.js"

export const constants = {
    baseUrl: "https://api.github.com/search/users?q=boys"
}

export const adaptData = (users) => {

    const userList = users.map((user) => {
        const { id, login, avatar_url } = user
        return new User(id, login, avatar_url)
    })

    return userList
}

// export {
//     constants,
//     adaptData
// };