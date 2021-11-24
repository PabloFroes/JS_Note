function GetUser () {
    try {
        const user = JSON.parse(localStorage.getItem('user'))
        const userName = {name:(user.name)}
        return user
    } catch (error) {
        return error
    }
}

export default GetUser