export const SET_TOKEN = 'SET_TOKEN'
export const SET_SIGNED = 'SET_SIGNED'
export const SET_CLIENT_DATA = 'SET_CLIENT_DATA'
export const RESET_STATE = 'RESET_STATE'





export const setToken = token => dispatch => {
  dispatch({
    type: SET_TOKEN,
    payload: token
  });
};


export const setSigned = signed => dispatch => {
  dispatch({
    type: SET_SIGNED,
    payload: signed
  });
};


export const setClientData = clientData => dispatch => {
  dispatch({
    type: SET_CLIENT_DATA,
    payload: clientData
  });
};



export const resetState = () => dispatch => {
    dispatch({
      type: RESET_STATE,
    });
};

