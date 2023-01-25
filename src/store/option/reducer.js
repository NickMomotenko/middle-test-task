import { CHANGE_ACTIVE } from "../types";

const optionState = {
  options: ["All", "Opened", "Closed"],
  activeOption: "All",
};

export const optionsReducer = (state = optionState, action) => {
  switch (action.type) {
    case CHANGE_ACTIVE:
      return { ...state, activeOption: action.payload };

    default:
      return state;
  }
};
