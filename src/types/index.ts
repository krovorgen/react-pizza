export type ProductItemCartType = {
  size: number;
  price: number;
  imageUrl: string;
  name: string;
  id: string;
  type: string;
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
  onClickAddProduct: (obj: ProductItemCartType) => void;
};

export type ActiveCategoryIndexType = number | null;
