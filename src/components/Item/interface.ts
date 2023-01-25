export interface ItemProps {
  title: string;
  completed: boolean;
  id: number;
  userId?: number;
  updateData: (id: number, isChecked: boolean) => void;
  showItemInfo: (id: number) => void;
}
