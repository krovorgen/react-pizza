export type ICartItemProps = {
  id: string;
  size: number;
  name: string;
  type: string;
  imageUrl: string;
  totalPrice: number;
  totalCount: number;
  onRemoveItem: (id: string) => void;
  onPlusItem: (id: string) => void;
  onMinusItem: (id: string) => void;
};
