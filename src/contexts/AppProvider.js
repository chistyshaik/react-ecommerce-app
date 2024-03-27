import React, { useState , useEffect, createContext , useContext} from 'react';
import { API_ENDPOINTS } from "../Constants";

const AppContext = createContext({
    products : [],
    loading : true
});

function AppProvider({children}) {
    const [products , setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cartItems , setCartItems] = useState([]); //array base cart manipulation its is slow
    const [cartProducts , setCartProducts] = useState({}); // Object based cart manipulation it is fast

    useEffect(()=>{
      fetch(API_ENDPOINTS.PRODUCTS)
      .then( res => res.json())
      .then( res => setProducts(res.products))
    }, [])
  
    const addProductToCart = (product) => {
      let addedProduct = cartItems.find(cartProduct => cartProduct.id == product.id);
      if(!addedProduct){
        addedProduct = product;
        addedProduct.quantity = 1;
      }else{
        addedProduct.quantity++;
      }
      const filteredItems = cartItems.filter(cartProduct => cartProduct.id !== product.id);
      setCartItems([...filteredItems, addedProduct])

      let cartProduct = cartProducts[product.id];
      if(!cartProduct){
        cartProduct = product;
        cartProduct.quantity = 1;
      }else{
        cartProduct.quantity++
      }
      setCartProducts({...cartProducts , [product.id]: cartProduct})
    }

  return (
    <AppContext.Provider value = {{
        products,
        loading,
        setLoading,
        cartItems,
        cartProducts,
        addProductToCart,
    }}>
        {children}
    </AppContext.Provider>
  )
}

export default AppProvider;

// CREATED A CUSTOM HOOK which will helps in destructuring products, loading, setLoading like 
// const {products, loading, setLoading} = useAppContext();
export const useAppContext = () => useContext(AppContext); 