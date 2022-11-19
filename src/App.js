import './App.css';
import { ToastContainer } from 'react-toastify';
import Bills from './components/bills/Bills';
import CreateBill from './components/create_bill/CreateBill';
import RestaurantInfo from './components/restaurant_info/RestaurantInfo';
import QueriesContext from './components/queries_context/QueriesContext';
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
          <QueriesContext>
            <RestaurantInfo />
          </QueriesContext>
          <ToastContainer />
        </main>
      </body>
    </>
  );
}

export default App;
