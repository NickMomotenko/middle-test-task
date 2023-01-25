import React from "react";
import { ItemBody } from '../../interface';

import { Checkbox } from "../../components/Checkbox";
import { Title } from "../../components/Title";
import { Button } from "../../UI/Button";

import "./styles.css";

interface ViewProps {
  activeItem: ItemBody | undefined;
  closeViewPage: () => void;
}

export const View: React.FC<ViewProps> = ({ activeItem, closeViewPage }) => {
  const checkboxStatus = activeItem?.completed ? "Closed" : "Opened";

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
        {/* <Checkbox completed={activeItem?.completed} /> */}
        <div className="view__checkbox-status">{checkboxStatus}</div>
      </div>
    </div>
  );
};
