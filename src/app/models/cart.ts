export type cartLocalModel = {
  id: number;
  productId: string;
  size: number;
  quantity: number;
};

export type cartServerModel = {
  productId: string;
  title: string;
  image: string;
  sizes: number[];
  prices: number[];
};

export type combinedCartModel = {
  id: number;
  productId: string;
  title: string;
  image: string;
  prices: number[];
  size: number;
  sizes: number[];
  quantity: number;
};
