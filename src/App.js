import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
//import Products from "./components/Products";
import Header from "./components/layout/Header";
import ProductDetails from "./components/ProductDetails";
import Login from "./components/Login";
import Checkout from "./components/Checkout";
import Category from "./components/Category";
import Cart from "./components/Cart";


const App = () => {
  return (
    <div>
      <Header />

      <main>
        <Switch>

          {/* Home */}
          <Route path="/" exact>
            <Home />
          </Route>

          {/* Checkout */}
          <Route path="/checkout">
            <Checkout />
          </Route>

          {/* Product Details */}
          <Route path="/product/:id">
            <ProductDetails />
          </Route>

          {/* Category */}
          <Route path="/category/:name">
  <Category />
</Route>

          {/* All products 
          <Route path="/products" exact>
            <Products />
          </Route>*/
          }
          

          {/* Login */}
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/cart">
  <Cart />
</Route>

        </Switch>
      </main>
    </div>
  );
};

export default App;