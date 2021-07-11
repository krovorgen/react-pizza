export type OnClickAddProductType = {
  id: string;
  imageUrl: string;
  name: string;
  price: number;
  size: number;
  type: number;
};

export type IProductCardType = {
  id: string;
  imageUrl: string;
  name: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
  onClickAddProduct: (obj: OnClickAddProductType) => void;
};

export type ActiveCategoryIndexType = number | null;
