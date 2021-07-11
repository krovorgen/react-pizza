export type SetTotalPriceType = {
  type: 'SET_TOTAL_PRICE';
  payload: number;
};

export type SetTotalProductType = {
  type: 'SET_TOTAL_PRODUCT';
  payload: number;
};

export type AddProductCartType = {
  type: 'ADD_PRODUCT_CART';
  payload: any; // TODO: any
};

export type CartActionType = SetTotalPriceType | SetTotalProductType | AddProductCartType;
