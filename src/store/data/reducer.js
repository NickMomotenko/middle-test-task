import {
  GET_TODOS,
  UPDATE_DATA,
  SET_ACTIVE_ITEM,
  UPDATE_FILTERED_DATA,
} from "../types";

const initialState = {
  data: [],
  activeItem: undefined,
  filteredData: [],
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        data: [...action.payload],
        filteredData: [...action.payload],
      };

    case UPDATE_DATA:
      return {
        ...state,
        data: [...action.payload],
        filteredData: [...action.payload],
      };

    case SET_ACTIVE_ITEM:
      return { ...state, activeItem: action.payload };

    case UPDATE_FILTERED_DATA: {
      const optionName = action.payload;
      let updatedData = [];

      if (optionName === "Opened") {
        updatedData = [...state.data?.filter((item) => !item?.completed)];
      } else if (optionName === "Closed") {
        updatedData = [...state.data?.filter((item) => item?.completed)];
      } else {
        updatedData = [...state.data];
      }

      return { ...state, filteredData: [...updatedData] };
    }

    default:
      return state;
  }
};
