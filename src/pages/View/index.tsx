import React, { useState } from "react";

import { Checkbox } from "../../components/Checkbox";
import { Title } from "../../components/Title";
import { Button } from "../../UI/Button";

import "./styles.css";

import { ViewProps } from "./interface";

export const View: React.FC<ViewProps> = ({
  activeItem,
  closeViewPage,
  updateData,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(activeItem?.completed);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;

    updateData(activeItem?.id, isChecked);

    isChecked ? setIsChecked(true) : setIsChecked(false);
  };

  const checkboxStatusText = isChecked? "Closed" : "Opened";

  return (
    <div className="view">
      <div className="view__header">
        <Title title={`Task #${activeItem?.id}`} />
        <Button title="Back to" onClick={closeViewPage} />
      </div>
      <div className="view__content">
        <div className="view__text">{activeItem?.title}</div>
      </div>
      <div className="view__bottom">
        <Checkbox onChange={handleChange} completed={activeItem?.completed} />
        <div className="view__checkbox-status">{checkboxStatusText}</div>
      </div>
    </div>
  );
};
