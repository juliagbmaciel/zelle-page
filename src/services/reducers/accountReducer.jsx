import {
    SET_TOKEN,
    SET_SIGNED,
    SET_CLIENT_DATA,
    RESET_STATE
} from "./actions";

const initialSTate = {
    token: '',
    signed: false,
    clientData: {},
}



function userReducer(state = initialSTate, action) {
    switch (action.type) {
        case RESET_STATE:
            return initialSTate;
        case SET_TOKEN:
            return { ...state, token: action.payload }
        case SET_SIGNED:
            return { ...state, signed: action.payload }
        case SET_CLIENT_DATA:
            return { ...state, clientData: action.payload }
        default:
            return state;
    }
}


export default userReducer;