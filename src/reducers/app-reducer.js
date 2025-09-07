import { ACTION_TYPE } from "../action";

const inintialAppState = {
  wasLogout: false,
};

export const appReducer = (state = inintialAppState, action) => {
  switch (action.type) {
    case ACTION_TYPE.LOGOUT:
      return {
        ...state,
        wasLogout: !state.wasLogout,
      };
    default:
      return state;
  }
};
