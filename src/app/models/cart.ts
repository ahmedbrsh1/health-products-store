export type cartLocalModel = {
  id: string;
  productId: string;
  size: number;
  quantity: number;
};

export type cartServerModel = {
  productId: string;
  title: string;
  image: string;
  prices: number[];
};

export type combinedCartModel = {
  id: string;
  productId: string;
  title: string;
  image: string;
  prices: number[];
  size: number;
  sizes: number[];
  quantity: number;
};
