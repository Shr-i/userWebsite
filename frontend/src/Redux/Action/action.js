export const signUpUser = (payload) => {
  return {
    type: "SIGN_UP",
    payload: payload,
  };
};

export const signInUser = (payload) => {
  return {
    type: "SIGN_IN",
    payload: payload
  }
}

export const signInUserSuccess = (payload) => {
  return {
    type: "SIGN_IN_SUCCESS",
    payload: payload
  }
}

export const signInUserFailure = (payload) => {
  return {
    type: "SIGN_IN_FAILURE",
    payload: payload,
  };
};

export const signOutUser = (payload) => {
  return {
    type: "SIGN_OUT",
  };
};

export const loadingUserData = (payload) => {
  return {
    type: "LOAD_USER_DATA",
  };
};

export const loadingUserDataSuccess = (payload) => {
  return {
    type: "LOADING_USER_DATA_SUCCESS",
    payload: payload
  }
}

export const loadingUserDataFialure = (payload) => {
  return {
    type: "LOADING_USER_DATA_FAILURE",
    payload: payload
  }
}