export interface CheckboxProps {
  completed: boolean | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
