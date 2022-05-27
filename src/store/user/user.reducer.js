import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

export const UserReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action; //type is guaranteed, but payload is optional

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      return state; // won't re-render because the state is not changed (same memory)
  }
};
