import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppNavbar from './components/Navbar';
import ShoppingList from './components/ShoppingList';
import ItemModel from './components/ItemModel';

function App() {

  return (
    <div className="App">
      <AppNavbar></AppNavbar>
      <h1>hello world</h1>
      <ShoppingList></ShoppingList>
      <ItemModel></ItemModel> 
    </div>
  );
}

export default App;
