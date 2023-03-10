import React, { useState } from "react";

import "./styles.css";

import { Checkbox } from "../../UI/Checkbox";
import { Button } from "../../UI/Button";

import { ItemProps } from "./interface";

export const Item: React.FC<ItemProps> = ({
  id,
  title,
  completed,
  updateData,
  showItemInfo,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(completed);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;

    updateData(id, isChecked);

    isChecked ? setIsChecked(true) : setIsChecked(false);
  };

  const onShowClick = (id: number) => {
    showItemInfo(id);
  };

  return (
    <div className={isChecked ? "item item--checked" : "item"}>
      <label className="item__content">
        <div className="item__checkbox">
          <Checkbox completed={completed} onChange={handleChange} />
        </div>
        <div className="item__title">{title}</div>
      </label>
      <div className="item__button">
        <Button title="Look" onClick={() => onShowClick(id)} />
      </div>
    </div>
  );
};
