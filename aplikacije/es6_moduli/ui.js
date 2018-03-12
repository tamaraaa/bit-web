const $dataElement = $(".data")

const displayUsers = (users) => {
    users.forEach(user => {
        const $userCard = createUserCard(user);
        $dataElement.append($userCard);
    });
}

const createUserCard = (user) => {
    const {
        avatar,
        username
    } = user

    return $(`
            <div>
                <img src="${avatar}" alt="${username}" style="">
                <h4>${username}</h4>
            </div>
        `)
}


const displayError = (error) => {
    $dataElement.innerHTML = "<h3>Error</h3>"
}

export {
    displayUsers,
    displayError
}