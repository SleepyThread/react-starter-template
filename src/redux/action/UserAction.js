import ActionTypes from './ActionsType';


export const LoginAction = (dispatch) => (userName) => {
    console.log("Logging in with " + userName);
    dispatch({
        type: ActionTypes.USER_LOGIN,
        payload: {
            userName: userName
        }
    });
};

export const LogoutAction = (dispatch) => () => {
    dispatch({
        type: ActionTypes.USER_LOGOUT
    });
};

