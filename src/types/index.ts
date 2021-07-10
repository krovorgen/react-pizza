export type ProductCardType = {
  id?: string;
  imageUrl: string;
  name: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
};

export type ActiveCategoryIndexType = number | null;
