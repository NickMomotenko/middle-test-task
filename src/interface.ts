export interface ItemBody {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface OptionsState {
  options?: string[] | any;
  activeOption: string;
}

export interface DataState {
  data: ItemBody[] | any;
}
