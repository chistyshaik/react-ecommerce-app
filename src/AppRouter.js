import React from 'react';
import { Switch , Route } from 'react-router-dom';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import ProductList from './components/ProductList';
import Login from './components/Login';
import Signup from './components/Signup';


export default function AppRouter({children , products}) {
  return (
    <Switch>
      <Route exact path ="/" component = {Home}/>
      <Route path ="/login" component = {Login}/>
      <Route path ="/signup" component = {Signup}/>
      <Route exact path ="/products" component =  {ProductList} />
      <Route path ="/products/:id" component = {ProductDetails} />
    </Switch>
  )
}
