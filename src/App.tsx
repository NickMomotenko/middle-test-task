import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { Title } from "./components/Title";
import { Options } from "./components/Options";
import { Item as ItemBlock } from "./components/Item";

import { Container } from "./UI/Container";

import { View } from "./pages/View";

import { getTodos } from "./store/data/asyncAction";

import {
  CHANGE_ACTIVE,
  SET_ACTIVE_ITEM,
  UPDATE_DATA,
  UPDATE_FILTERED_DATA,
} from "./store/types";

import { ItemBody, OptionsState, DataState } from "./interface";

const App = () => {
  const { options, activeOption } = useSelector<
    OptionsState,
    OptionsState["options"]
  >((state) => state?.options);

  const { data, activeItem, filteredData } = useSelector<
    DataState,
    DataState["data"]
  >((state) => state?.data);

  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch({ type: UPDATE_FILTERED_DATA, payload: activeOption });
  }, [activeOption]);

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  const changeActiveOption = (title: string) =>
    dispatch({ type: CHANGE_ACTIVE, payload: title });

  const updateData = (id: number, isChecked: boolean) => {
    const updatedData = filteredData?.map((item: ItemBody) => {
      if (item.id === id) {
        return { ...item, completed: isChecked };
      }
      return item;
    });

    dispatch({ type: UPDATE_DATA, payload: updatedData });
  };

  const showItemInfo = (id: number) => {
    const searchableItem = data?.find((item: ItemBody) => item.id === id);

    if (searchableItem) {
      dispatch({ type: SET_ACTIVE_ITEM, payload: searchableItem });
    }
  };

  const closeViewPage = () =>
    dispatch({ type: SET_ACTIVE_ITEM, payload: undefined });

  return (
    <Container>
      <Title title="Tasks title" />
      <Options
        list={options}
        activeOption={activeOption}
        changeActiveOption={changeActiveOption}
      />

      {filteredData?.map((todo: ItemBody) => (
        <ItemBlock
          key={todo.id}
          updateData={updateData}
          showItemInfo={showItemInfo}
          {...todo}
        />
      ))}

      {activeItem && (
        <View
          activeItem={filteredData[activeItem?.id - 1]}
          updateData={updateData}
          closeViewPage={closeViewPage}
        />
      )}
    </Container>
  );
};

export default App;
