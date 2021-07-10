export type ItemsType = {
  name: string;
  type: string;
};

export interface ISortPopupProps {
  items: ItemsType[];
  activeSortName: number;
  setActiveSortName: (idx: number) => void;
}
