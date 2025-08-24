import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import ProductDisplay from "../components/ProductDisplay";
import ProductDescriptionAndReviews from "../components/ProductDescriptionAndReviews";
import RelatedProducts from "../components/RelatedProducts";

const SingleProduct = () => {
  const { productId } = useParams();
  const { allProductData } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const product = allProductData.find(
      (item) => item.id === parseInt(productId)
    );
    if (product) {
      setProductData(product);
    }
  }, [productId, allProductData]);

  return productData ? (
    <div className="container mx-auto border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 mt-20">
      <ProductDisplay productData={productData} />
      <ProductDescriptionAndReviews productData={productData} />
      <RelatedProducts allProductData={allProductData} productData={productData} />
    </div>
  ) : (
    <div>
      <h1>Loading...</h1>
    </div>
  );
};

export default SingleProduct;