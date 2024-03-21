import React, { useState , useEffect, createContext , useContext} from 'react';
import { API_ENDPOINTS } from "../Constants";

const AppContext = createContext({
    products : [],
    loading : true
});

function AppProvider({children}) {
    const [products , setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
      fetch(API_ENDPOINTS.PRODUCTS)
      .then( res => res.json())
      .then( res => setProducts(res.products))
    }, [])
  

  return (
    <AppContext.Provider value = {{
        products,
        loading,
        setLoading
    }}>
        {children}
    </AppContext.Provider>
  )
}

export default AppProvider;

// CREATED A CUSTOM HOOK which will helps in destructuring products, loading, setLoading like 
// const {products, loading, setLoading} = useAppContext();
export const useAppContext = () => useContext(AppContext); 