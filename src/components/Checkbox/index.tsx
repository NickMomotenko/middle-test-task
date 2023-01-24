import React from "react";

interface CheckboxProps {
  completed?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

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
