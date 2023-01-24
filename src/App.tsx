import React, { useEffect, useState } from "react";

import { Title } from "./components/Title";
import { Options } from "./components/Options";
import { Item } from "./components/Item";

import { Container } from "./UI/Container";

import { View } from "./pages/View";

import { data as mockData } from "./mock.js";

const optionsList = ["All", "Opened", "Closed"];

export interface Item {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const App = () => {
  const [activeOption, setActiveOption] = useState(optionsList[0]);
  const [data, setData] = useState<Item[]>(mockData);

  const [filteredData, setFilteredData] = useState<Item[]>();

  const [activeItem, setActiveItem] = useState<Item>();

  useEffect(() => {
    if (activeOption === "Opened") {
      setFilteredData(data?.filter((item: Item) => !item?.completed));
      return;
    } else if (activeOption === "Closed") {
      setFilteredData(data?.filter((item: Item) => item?.completed));
      return;
    }

    setFilteredData(data);
  }, [activeOption]);

  const changeActiveOption = (title: string) => {
    setActiveOption(title);
  };

  const updateData = (id: number, isChecked: boolean) => {
    const updatedData = data.map((item) => {
      if (item.id === id) {
        return { ...item, completed: isChecked };
      }
      return item;
    });

    setData(updatedData);
  };

  const showItemInfo = (id: number) => {
    const searchableItem = data.find((item) => item.id === id);

    if (searchableItem) {
      setActiveItem(searchableItem);
    }
  };

  const closeViewPage = () => setActiveItem(undefined);

  return (
    <Container>
      <Title title="Tasks title" />
      <Options
        list={optionsList}
        activeOption={activeOption}
        changeActiveOption={changeActiveOption}
      />

      {filteredData?.map((todo) => (
        <Item
          key={todo.id}
          updateData={updateData}
          showItemInfo={showItemInfo}
          {...todo}
        />
      ))}

      {activeItem && <View activeItem={activeItem} closeViewPage={closeViewPage} />}
    </Container>
  );
};

export default App;
