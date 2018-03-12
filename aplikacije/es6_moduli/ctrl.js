import {constants, adaptData } from "./data.js"
import * as ui from "./ui.js"

const init = () => {
    const { baseUrl} = constants
    fetchUsers(baseUrl)
}

const fetchUsers = (url) => {
    $.get(url)
        .done(onSuccessHandler)
        .fail(onErrorHandler)
}
const onSuccessHandler = (response) => {
    console.log("DONE", response)

    const adaptedUsers = adaptData(response.items)
    console.log(adaptedUsers)

    ui.displayUsers(adaptedUsers)
}

const onErrorHandler = (error) => {
    console.log(error)
    ui.displayError(error)
}

export {
    init
}