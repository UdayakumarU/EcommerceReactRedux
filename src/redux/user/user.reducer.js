import USER_CONST from './user.const';
const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_CONST.SET_CURRENT_USER : return {
            ...currentState,
            currentUser : action.payload
        }
        default:
            return currentState;
    }
}

export default userReducer;