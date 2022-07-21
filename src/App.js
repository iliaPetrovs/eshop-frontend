import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Alert from "react-s-alert";

import Drawer from "@material-ui/core/Drawer";
import { LinearProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import AddProductForm from "./components/Admin/AddProductForm";
import ProductDashboard from "./components/Admin/ProductDashboard";
import Checkout from "./components/Payments/Checkout";
import Success from "./components/Payments/Success";
import ItemInfo from "./components/Products/ItemInfo";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Cart from "./components/Cart/Cart";
import Login from "./components/Auth/Login";
import RedirectHandler from "./components/Auth/RedirectHandler";
import { useRecoilState } from "recoil";
import { userAtom } from "./atoms/user";
import { authenticatedAtom } from "./atoms/authenticated";
import { getUser } from "./utils/api/user";
import Profile from "./components/Auth/Profile";
import Clothes from "./components/Categories/Clothes";
import Bags from "./components/Categories/Bags";
import Pins from "./components/Categories/Pins";
import Stickers from "./components/Categories/Stickers";
import Patches from "./components/Categories/Patches";

// const stripePromise = loadStripe(
//   "pk_test_51KGiaLKfoI8qdTqswkb40eRHYWUNTxm9xFwPOl3kN7aXvW4oexacMiIC5SrC1n9RT9LIju4WDnsG8YtPH7aZ88as00Vp2wMPBm"
// );

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [clientSecret, setClientSecret] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useRecoilState(userAtom);
  const [authenticated, setAuthenticated] = useRecoilState(authenticatedAtom);

  // useEffect(() => {
  //   fetch("http://localhost:8080/pay", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ products: [...cartItems] }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setClientSecret(data.clientSecret);
  //     });
  // }, []);

  const loadCurrentlyLoggedInUser = () => {
    setIsLoading(true);

    getUser()
      .then((response) => {
        setUser(response);
        setAuthenticated(true);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    loadCurrentlyLoggedInUser();
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setUser(null);
    setAuthenticated(false);
    window.alert("logged out")
    Alert.success("logged out!");
  };

  // const getUserRoles = () => {
  //   const token = localStorage.getItem("accessToken");
  //   try {
  //     if (!jsonwebtoken.verify(token)) throw "error";
  //     const userDataFromToken = jsonwebtoken.decode(token.split('.')[1])
  //     console.log(userDataFromToken);
  //   } catch(e) {
  //     console.error(e)
  //   }
  // }

  useEffect(() => {
    loadCurrentlyLoggedInUser();
  }, []);

  const CartContext = createContext(cartItems);

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
        const amountToAdjust = clickedItem.amountPending ? clickedItem.amountPending : 1;
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount +  amountToAdjust}
            : item
        );
      }
      return [...prev, { ...clickedItem, amount: clickedItem.amountPending ? clickedItem.amountPending : 1 }];
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

  const useStyles = makeStyles({
    paper: {
      background: "rgb(250, 238, 251)"
    }
  });

  const classes = useStyles();

  if (isLoading) return <LinearProgress />;
  return (
    <Router className="external-container">
      <CartContext.Provider value={null}>
        <Navigation
          setCartOpen={setCartOpen}
          getTotalItems={getTotalItems}
          cartItems={cartItems}
          handleLogout={handleLogout}
        />
        <Drawer
          className="drawer"
          classes={{ paper: classes.paper }}
          anchor="right"
          open={cartOpen}
          onClose={() => setCartOpen(false)}
        >
          <Cart
            cartItems={cartItems}
            addToCart={handleAddToCart}
            removeFromCart={handleRemoveFromCart}
            toggleCart={toggleCart}
          />
        </Drawer>
      </CartContext.Provider>
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
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/oauth2/redirect">
          <RedirectHandler />
        </Route>
        <Route exact path="/dashboard">
          <ProductDashboard />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/shop/patches">
          <Patches />
        </Route>
        <Route exact path="/shop/stickers">
          <Stickers />
        </Route>
        <Route exact path="/shop/pins">
          <Pins />
        </Route>
        <Route exact path="/shop/bags">
          <Bags />
        </Route>
        <Route exact path="/shop/clothes">
          <Clothes />
        </Route>
        <Route exact path="/checkout">
          <Checkout cartItems={cartItems} />
        </Route>
        <Route exact path="/success">
          <Success />
        </Route>
      </Switch>
      {/* <Newsletter />
      <Socials /> */}
      <Footer />
    </Router>
  );
}

export default App;
