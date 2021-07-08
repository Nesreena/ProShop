import { MainContainer } from "./App.Styles";
import NavBar from "./Components/NavBar/NavBar";
import HomeScreen from "./Screens/Gust/HomeScreen/HomeScreen";
import ShoppingCart from "./Screens/User/ShoppingCart/ShoppingCart";
import Profile from "./Screens/User/Profile/Profile";
import { Route, Switch } from "react-router";
import LoginPage from "./Screens/User/LoginPage/LoginPage";
import Register from "./Screens/Gust/RegisterPage/Register";
import { useSelector } from "react-redux";
import UpdateProfilePage from "./Screens/User/UpdateProfilePage/UpdateProfilePage";
import Product from "./Screens/Gust/Product/Product";
import PlaceOrder from "./Screens/User/Payment/PlaceOrder"
import ShippingAndPayment from "./Screens/User/Payment/ShippingAndPaymentPage"
import Payment from "./Screens/User/Payment/Payment"

function App() {
  const userFromLocalStorage = JSON.parse(localStorage.getItem("user"));

  const state = useSelector((state) => state);

  return (
    <MainContainer>
      <NavBar />

      
      <Switch>
        <Route path={"/"} exact={true} component={HomeScreen} />
        <Route path={"/product/:id/:name"} exact={true} component={Product} />
        {state.userDetails.user._id ? (
          <>
            <Route path={"/cart"} exact={true} component={ShoppingCart} />
            <Route path={"/profile"} exact={true} component={Profile} />
            <Route
              path={"/update-profile"}
              exact={true}
              component={UpdateProfilePage}
            />
             <Route
              path={"/proceed-checkout/shipping-address"}
              exact={true}
              component={Payment}
            />
            <Route
              path={"/proceed-checkout/place-order"}
              exact={true}
              component={Payment}
            />
           
          </>
        ) : (
          <>
            <Route
              path={"/login"}
              component={() => {
                return <LoginPage />;
              }}
            />
            <Route
              path={"/register"}
              component={() => {
                return <Register />;
              }}
            />
          </>
        )}
      </Switch>
    </MainContainer>
  );
}

export default App;
