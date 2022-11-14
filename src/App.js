import './App.css';
import { ToastContainer } from 'react-toastify';
import BestSellerProduct from './components/bestseller_product/BestSellerProduct';
import Bills from './components/bills/Bills';
import CreateBill from './components/create_bill/CreateBill';
import CustomersForm from './components/customers_consumptions/CustomersForm';
import WaiterSells from './components/waiters_sells/WaiterSells';
function App() {
  return (
    <>
      <body>
        <header>
          <h1>Comidas Típicas del Sur</h1>
        </header>
        <main>
          <CreateBill />
          <Bills />
          <BestSellerProduct />
          <CustomersForm />
          <WaiterSells />
          <ToastContainer />
        </main>
      </body>
    </>
  );
}

export default App;
