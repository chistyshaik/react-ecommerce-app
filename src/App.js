import { useEffect, useState } from "react";
import AppRouter from "./AppRouter";
import { API_ENDPOINTS } from "./Constants";
import './App.css'

function App() {
  const [products , setProducts] = useState([]);

  useEffect(()=>{
    fetch(API_ENDPOINTS.PRODUCTS)
    .then( res => res.json())
    .then( res => setProducts(res.products))
  }, [])

  return (
    <div className="App">
      <h2>E commerce app</h2>
      <AppRouter products={products}/>
    </div>
  );
}

export default App;
