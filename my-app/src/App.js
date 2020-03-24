import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppNavbar from './components/Navbar';
import ShoppingList from './components/ShoppingList';
import ItemModel from './components/ItemModel';
import { useEffect } from 'react';
import { loadUser }  from './actions/authThunkActin'
import store from './store'
import {connect} from 'react-redux'

function App(props) {
  useEffect(()=>{
    // props.loadUser()
    store.dispatch(loadUser())
  },[])
  return (
    <div className="App">
      <AppNavbar/>
      <h1>hello world</h1>
      <ShoppingList/>
      <ItemModel/>
    </div>
  );
}


const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  loadUser
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
