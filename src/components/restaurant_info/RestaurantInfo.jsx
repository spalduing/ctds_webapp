import DateSelect from '../date_select/DateSelect';
import BestSellerProduct from '../bestseller_product/BestSellerProduct';
import CustomersForm from '../customers_consumptions/CustomersForm';
import WaiterSells from '../waiters_sells/WaiterSells';
const RestaurantInfo = () => {
  return (
    <section>
      <h2>Restaurant's Information</h2>
      <p>Statistics of the restaurant.</p>
      <DateSelect />
      <BestSellerProduct />
      <CustomersForm />
      <WaiterSells />
    </section>
  );
};

export default RestaurantInfo;
