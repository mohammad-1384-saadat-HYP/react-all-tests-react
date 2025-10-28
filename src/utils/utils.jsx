export const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_REQUEST":
            return {
                ...state,
                user: null,
                token: null,
                loading: true,
                error: null
            };
        case "LOGIN_SUCCESS": {
            const {user, token} = action.payload;
            return {
                ...state,
                user: user,
                token: token,
                loading: false,
                error: null
            };
        }
        case "LOGIN_ERROR":
            return {
                ...state,
                user: null,
                token: null,
                loading: null,
                error: action.payload.error
            };
        case "LOGOUT":
            return {
                ...state,
                user: null,
                token: null,
                loading: false,
                error: null
            };
        default:
            throw Error(`action type not allowed: ${action.type}`);
    }
}