import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Drawer from "@material-ui/core/Drawer";
import { LinearProgress } from "@material-ui/core";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import AddProductForm from "./components/Admin/AddProductForm";
import ProductDashboard from "./components/Admin/ProductDashboard";
import Checkout from "./components/Payments/Checkout";
import Success from "./components/Payments/Success"
import ItemInfo from "./components/Products/ItemInfo";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Newsletter from "./components/Newsletter";
import Socials from "./components/Socials";
import Footer from "./components/Footer";
import Cart from "./components/Cart/Cart";import Loader from "./components/Misc/Loader";
import CheckoutForm from "./components/Payments/CheckoutForm";
;

const stripePromise = loadStripe(
  "pk_test_51KGiaLKfoI8qdTqswkb40eRHYWUNTxm9xFwPOl3kN7aXvW4oexacMiIC5SrC1n9RT9LIju4WDnsG8YtPH7aZ88as00Vp2wMPBm"
);

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [clientSecret, setClientSecret] = useState("");
  const isLoading = false;

  useEffect(() => {
    fetch("http://localhost:8080/pay", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ products: [...cartItems] }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, [cartItems]);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const getTotalItems = (items) => {
    return items.reduce((ack, item) => ack + item.amount, 0);
  };

  const handleAddToCart = (clickedItem) => {
    setCartItems((prev) => {
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id) => {
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [])
    );
  };

  if (isLoading) return <LinearProgress />;
  return (
    <Router className="external-container">
      {clientSecret ? (<Elements options={options} stripe={stripePromise}>
      <Navigation
        setCartOpen={setCartOpen}
        getTotalItems={getTotalItems}
        cartItems={cartItems}
      />
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
          <Cart
            cartItems={cartItems}
            addToCart={handleAddToCart}
            removeFromCart={handleRemoveFromCart}
            toggleCart={toggleCart}
          />
      </Drawer>
      <Switch>
        <Route exact path="/">
          <Home handleAddToCart={handleAddToCart} />
        </Route>
        <Route exact path="/product/:id">
          <ItemInfo handleAddToCart={handleAddToCart} />
        </Route>
        <Route exact path="/addProduct">
          <AddProductForm />
        </Route>
        <Route exact path="/dashboard">
          <ProductDashboard />
        </Route>
        <Route exact path="/checkout">
          <Checkout cartItems={cartItems} />
        </Route>
        <Route exact path="/success">
          <Success />
        </Route>
      </Switch>
      <Newsletter />
      <Socials />
      <Footer />
      </Elements>) : (<Loader />)}
    </Router>
  );
}

export default App;
