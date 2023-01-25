import { ItemBody } from "../../interface";

export interface ViewProps {
  activeItem: ItemBody;
  closeViewPage: () => void;
  updateData: (id: number, isChecked: boolean) => void;
}
