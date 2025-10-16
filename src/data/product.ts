// src/data/product.ts
interface Product {
  id: number;
  image: string;
  name: string;
}

const products: Product[] = [
  {
    id: 1,
    image: "/assets/images/product-1.png",
    name: "Mouse",
  },
  {
    id: 2,
    image: "/assets/images/product-2.png",
    name: "Digit-bit.ai Lite",
  },
  {
    id: 3,
    image: "/assets/images/product-3.png",
    name: "Digit-bit.ai Ultra",
  },
];

export default products;
