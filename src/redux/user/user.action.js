import USER_CONST from "./user.const";

export const setCurrentUser =  user => ({
    type : USER_CONST.SET_CURRENT_USER,
    payload: user
});
