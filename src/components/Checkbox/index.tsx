import React from "react";

import { CheckboxProps } from "./interface";

export const Checkbox: React.FC<CheckboxProps> = ({ completed, onChange }) => {
  return (
    <div className="checkbox">
      <input
        type="checkbox"
        className="checkbox__body"
        onChange={onChange}
        checked={completed}
      />
    </div>
  );
};
