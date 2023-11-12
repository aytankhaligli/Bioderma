import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import ProductCard from "./ProductCard";
const products = [
  {
    id: 1,
    productName: "Sensibio Micellar water, 1 l",
    brend: "Bioderma",
    price: "14.00 AZN",
    isMost: true,
    isFreeDelivery: true,
    imageUrl: product1,
  },
  {
    id: 2,
    productName: "Sensibio Micellar water, 1 l",
    brend: "Bioderma",
    price: "14.00 AZN",
    isMost: true,
    isFreeDelivery: false,
    imageUrl: product2,
  },
  {
    id: 3,
    productName: "Sensibio Micellar water, 1 l",
    brend: "Bioderma",
    price: "14.00 AZN",
    isMost: true,
    isFreeDelivery: true,
    imageUrl: product3,
  },
  {
    id: 4,
    productName: "Sensibio Micellar water, 1 l",
    brend: "Bioderma",
    price: "14.00 AZN",
    isMost: true,
    isFreeDelivery: false,
    imageUrl: product4,
  },
];
function Products() {
  return (
    <div className="flex justify-between">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Products;
