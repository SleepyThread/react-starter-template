
const UserReducers = (state = { isLoggedIn: false, userName: "" }, action) => {

    switch (action.type) {
        case "USER_LOGIN":
            return {
                isLoggedIn: true,
                userName: action.payload.userName
            };
        case "USER_LOGOUT":
            return {
                isLoggedIn: false,
                userName: ""
            };
        default:
            return state;
    }
};

export default UserReducers;
