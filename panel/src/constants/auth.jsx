const loggedIn = () => {
    return JSON.parse(localStorage.user);
}

export default loggedIn