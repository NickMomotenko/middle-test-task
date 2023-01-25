export interface OptionsProps {
  list: string[];
  activeOption: string;
  changeActiveOption: (title: string) => void;
}
