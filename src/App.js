import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './GLOBALCSS/GlobalCss.css';
import CartListMain from './Pages/CartListPage/CartListMain';
import CheckoutMain from './Pages/CheckoutPage/CheckoutMain';
import HomeMain from './Pages/HomePage/HomeMain';
import AccountMain from './Pages/LoginPage/AccountMain';
import Header from './Pages/SharedComponents/Header/Header';
import ShopMain from './Pages/ShopPage/ShopMain';
import SingleProductMain from './Pages/SingleProductPage/SingleProductMain';
import WishListMain from './Pages/WishListPage/WishListMain';
import AuthProvider from './Context/AuthProvider';
import ProfileMain from './Pages/UserProfile/ProfileMain';
import PrivateRoute from './Pages/PrivateRoutes/PrivateRoute';

function App() {
  return (
    <div className="App">
         {/* <NewsLetterModal /> */}
      <AuthProvider>
         <BrowserRouter>
         <Header />
         <Switch>
            <Route exact path="/">
               <HomeMain />
            </Route>
            <Route exact path="/home">
               <HomeMain />
            </Route>
            <Route exact path="/shop">
               <ShopMain />
            </Route>
            <Route exact path="/wishlist">
               <WishListMain />
            </Route>
            <Route exact path="/cartlist">
               <CartListMain />
            </Route>
            <Route exact path="/checkout">
               <CheckoutMain />
            </Route>
            <Route exact path="/userAccount/user/login">
               <AccountMain />
            </Route>
            <Route exact path="/shop/products/singleProducts/:productId">
               <SingleProductMain />
            </Route>
            <PrivateRoute exact path="/userAccount/user/myProfile">
               <ProfileMain />
            </PrivateRoute>
         </Switch>
         </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
