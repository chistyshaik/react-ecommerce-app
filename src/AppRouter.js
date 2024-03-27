import React from 'react';
import { Switch , Route } from 'react-router-dom';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import ProductList from './components/ProductList';
import AuthenticationView from './components/AuthenticationView';
import LogOut from './components/LogOut';
import CartDetails from './components/CartDetails';


export default function AppRouter({children , products}) {
  return (
    <Switch>
      <Route exact path ="/" component = {Home}/>
      <Route path ="/login" render = {routerProps => <AuthenticationView {...routerProps} isLogin={true} />} />
      <Route path ="/signup" render = {routerProps => <AuthenticationView {...routerProps} isLogin={false} />} />
      <Route exact path ="/products" component =  {ProductList} />
      <Route path ="/products/:id" component = {ProductDetails} />
      <Route path ="/logout" component = {LogOut} />
      <Route path ="/cart" component = {CartDetails} />
    </Switch>
  )
}
