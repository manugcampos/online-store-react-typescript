import { Route, Switch } from "wouter";
import Home from "./pages/Home";
import CartPage from "./pages/cart-page";
import Checkout from "./pages/checkout";
import ProductDetail from "./pages/product-detail";
import CategoryPage from "./pages/category-page";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/cart" component={CartPage} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/product/:id" component={ProductDetail} />
          <Route path="/category/:category" component={CategoryPage} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
