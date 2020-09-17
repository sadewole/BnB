import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import ExploreMeal from "./views/ExploreMeal";
import MealDetails from "./views/MealDetails";
import Cart from "./views/Cart";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/explore" component={ExploreMeal} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/meal-details/:id" component={MealDetails} />
      </Switch>
    </Router>
  );
}

export default App;
