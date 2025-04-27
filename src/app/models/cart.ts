export type cartLocalModel = {
  id: string;
  size: number;
  quantity: number;
};

export type cartServerModel = {
  title: string;
  image: string;
  prices: number[];
};

export type combinedCartModel = {
  id: string;
  title: string;
  image: string;
  prices: number[];
  size: number;
  sizes: number[];
  quantity: number;
};
