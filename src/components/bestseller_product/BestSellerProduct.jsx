import useFetchBestSellerProduct from './hooks/useFetchBestSellerProduct';
import BestSellerCard from './BestSellerCard';
import CardSkeleton from '../skeletons/CardSkeleton';
const BestSellerProduct = () => {
  const { product, isFetching } = useFetchBestSellerProduct();

  return isFetching ? (
    <CardSkeleton />
  ) : (
    <section>
      <h2>Best Seller Product</h2>
      <p>
        The best seller product (dish) of the restaurant.
      </p>
      <BestSellerCard product={product} />
    </section>
  );
};

export default BestSellerProduct;
