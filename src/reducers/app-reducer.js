import { ACTION_TYPE } from "../actions";

const inintialAppState = {
  wasLogout: false,
  modal: {
    isOpen: false,
    text: "",
    onConfirm: () => {},
    onCancel: () => {},
  },
};

export const appReducer = (state = inintialAppState, action) => {
  switch (action.type) {
    case ACTION_TYPE.LOGOUT:
      return {
        ...state,
        wasLogout: !state.wasLogout,
      };

    case ACTION_TYPE.OPEN_MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          ...action.payload,
          isOpen: true,
        },
        isOpen: true,
        ...action.payload,
      };

    case ACTION_TYPE.CLOSE_MODAL:
      return inintialAppState;

    default:
      return state;
  }
};
