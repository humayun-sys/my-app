import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Single from './pages/Single';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>

      <Header/>
         <Switch>
            <Route exact path = '/' component = {Home}/>
            <Route path = '/about' component = {About}/>
            <Route path = '/service' component = {Service}/>
            <Route path = '/single' component = {Single}/>
            <Route path = '/gallery' component = {Gallery}/>
            <Route path = '/contact' component = {Contact}/>
         </Switch>
      
      <Footer/>

    </Router>
    
    </>
  );
}

export default App;
