export type Review = {
  id: string;
  username: string;
  rating: number;
  description: string;
};

export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  imageUrl: string;
  rating: number;
  tags: string[];
  reviews: Review[];
};

export type Cartitem = {
  product: Product;
  quantity: number;
};
