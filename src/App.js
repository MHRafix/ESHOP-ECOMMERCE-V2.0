import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './GLOBALCSS/GlobalCss.css';
import CartListMain from './Pages/CartListPage/CartListMain';
import CheckoutMain from './Pages/CheckoutPage/CheckoutMain';
import HomeMain from './Pages/HomePage/HomeMain';
import NewsLetterModal from './Pages/SharedComponents/Modals/NewsLetterModal';
import ShopMain from './Pages/ShopPage/ShopMain';
import SingleProductMain from './Pages/SingleProductPage/SingleProductMain';
import WishListMain from './Pages/WishListPage/WishListMain';

function App() {
  return (
    <div className="App">
         <NewsLetterModal />
      <BrowserRouter>
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
         <Route exact path="/shop/products/singleProducts/:productId">
            <SingleProductMain />
         </Route>
       </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
