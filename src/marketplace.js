import React, { useEffect } from 'react';
import './marketplace.css';
import ProductCard from './ProductCard'; 
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, selectAllProducts, selectProductsStatus, selectProductsError } from './Redux/productsSliceApi';

const Marketplace = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const status = useSelector(selectProductsStatus);
  const error = useSelector(selectProductsError);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === 'loading') return <div>Loading products...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  return (
    <div className="marketplace">
      <h1>choose your product</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
