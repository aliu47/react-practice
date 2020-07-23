import React from 'react';
import logo from './logo.svg';
import './index.css';
import HelloWorld from './Components/HelloWorld'
import CounterExample from './Components/CounterExample';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Home from './Views/Home';
import About from './Views/About';
import Products from './Views/Products';

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/products/:id">
          <Products/>
          </Route>
        </Switch>

        <Footer />

      </Router>

    </div>
  );
}

export default App;
