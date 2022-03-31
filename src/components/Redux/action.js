

export const  LOGIN_SUCCESS= 'LOGIN_SUCCESS';


const initialState = {
  user: {},
  error: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {

    case LOGIN_SUCCESS:
      return { ...state, user: action.payload, error: null, };

    default:
      return state;
  }
}

