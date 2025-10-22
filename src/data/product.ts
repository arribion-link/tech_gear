// src/data/product.ts
import product1 from "../assets/images/product-1.png"
import product2 from "../assets/images/product-2.png";
import product3 from "../assets/images/product-3.png";
interface Product {
  id: number;
  image: string;
  name: string;
}

const products: Product[] = [
  {
    id: 1,
    image: product1,
    name: "Gaming",
  },
  {
    id: 2,
    image: product2,
    name: "Graphics",
  },
  {
    id: 3,
    image: product3,
    name: "Office",
  },
];

export default products;
