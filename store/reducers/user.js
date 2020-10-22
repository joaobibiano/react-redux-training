const initialState = {
  user: { name: "", id: undefined },
  token: "",
};

const userReducer = (state = initialState, action) => {
  // ACTION, (TYPE, PAYLOAD)

  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };

    case "LOGOUT":
      return initialState;

    default:
      return state;
  }
};

export default userReducer;
