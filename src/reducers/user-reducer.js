import { ACTION_TYPE } from "../action";
import { ROLE } from "../constants";

const inintialUserState = {
  id: null,
  login: null,
  roleId: ROLE.Guest,
  session: null,
};

export const userReducer = (state = inintialUserState, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_USER: {
      return {
        ...state,
        ...action.payload,
      };
    }

    default:
      return state;
  }
};
