import './App.css';
import { useEffect } from 'react';
import axios from 'axios';


function App() {

  useEffect(() => {
    axios.get('/detail_bills/bestseller')
    .then(response => { console.log(response.data);
    })
  }, []);

  return (
    <>
    <h1>My reactApp</h1>
    </>
  );
}

export default App;
