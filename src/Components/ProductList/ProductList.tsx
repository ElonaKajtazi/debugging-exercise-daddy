import { Product as ProductType } from "../../utils/types";
import Product from "../Product";
import "./style.css";

type Props = {
  products: ProductType[] | null;
};

const ProductList = (props: {
  products: { products: ProductType[] } | null;
}) => {
  if (!props.products) return <h1>No products</h1>;
  return (
    <div>
      {props.products.products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
