import React from 'react';
import { Switch , Route } from 'react-router-dom';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import ProductList from './components/ProductList';


export default function AppRouter({children , products}) {
  return (
    <Switch>
      <Route exact path ="/" component = {Home}/>
      <Route exact path ="/products" render = {routerProps => <ProductList {...routerProps} products={products}/>}/>
      <Route path ="/products/:id" component = {ProductDetails}/>
    </Switch>
  )
}
