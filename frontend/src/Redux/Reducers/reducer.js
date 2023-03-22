const initialState = {
  isLoading: false,
  token: "",
  data: "",
  error: "",
  message: ""
}

export const userReducer = ( state = initialState, action) => {
  if ( action.type === "SIGN_UP") {
    return {
      ...state,
      isLoading: true
    };
  } else if (action.type === "SIGN_UP_SUCCESS") {
    return {
      ...state,
      isLoading: false,
      message: action.payload,
      error: ""
    };
  } else if (action.type === "SIGN_UP_ERROR") {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
      message: ""
    };
  } else if (action.type === "SIGN_IN") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "SIGN_IN_SUCCESS") {
    return {
      ...state,
      isLoading: false,
      token: action.payload,
      message: "SignIn Successfull!",
      error: ""
    };
  } else if (action.type === "SIGN_IN_FAILURE") {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
      message: ""
    };
  } else if (action.type === "SIGN_OUT") {
    return {
      ...state,
      message: "",
      token: "",
      data: "",
      error: ""
    };
  } else if (action.type === "LOAD_USER_DATA") {
    return {
      ...state,
      isLoading: true
    };
  } else if (action.type === "LOADING_USER_DATA_SUCCESS") {
    return {
      ...state,
      isLoading: false,
      data: action.payload,
      message: "User Data Found!",
      error: ""
    };
  } else if (action.type === "LOADING_USER_DATA_FAILURE") {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
      message: ""
    };
  } else {
    return state;
  } 
}
