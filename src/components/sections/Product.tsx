// src/components/Product.tsx
import { FaArrowRight } from "react-icons/fa";
import products from "../../data/product";
import '../../assets/images/product-1.png'
// import './product.css'
// Ensure you have this CSS file

const Product = () => {
  // Debug: Log the products array to verify its contents
  console.log("Products array:", products);

  return (
    <section>
      <div>
        <h1>Products</h1>
        <p>Which type of gear are you looking for?</p>
        <p>
          more products <FaArrowRight />
        </p>
      </div>
      <div className="product-container">
        {/* Debug: Show message if products array is empty */}
        {products.length === 0 ? (
          <p>No products available. Check the products import.</p>
        ) : (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image || "/assets/images/placeholder.png"}
                alt={product.name}
                className="product-image"
              />
              <h3>{product.name}</h3>
             {/* Debug: Show product ID */}
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Product;
