import { getTodoss } from "./action";

export const getTodos = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => res.json())
      .then((json) => dispatch(getTodoss(json)));
  };
};
