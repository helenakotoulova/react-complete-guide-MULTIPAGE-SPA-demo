import { Route, Switch, Redirect } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import Header from "./components/Header";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/welcome' />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

/*
Tohle je DYNAMIC ROUTE:
<Route path='/product-detail/:productId'>
To, ze tam je ta dvojtecka, znamena, ze react to precte jako our-domain.com/product-detail/<any value>
*/

/* PARAMS
V productDetail pridame useParams hook to give us a key for the product.
*/

/* SWITCH, EXACT
Switch nam pomuze zaridit aby byl vzdy ativni pouze jeden Route. Jinak by se nam na jedne strance zaroven nacetly products i product details.
A ten aktivni odkaz je ten, ktery je matched first.
Proto se nam ted budou zobrazovat products ale ne uz product details. On se nemuze dostat na product details, protoze hleda prvni match. A ten najde u products.
Proto jeste pridame exact -> tzn. matchuje exact path. A my se pak muzeme dostat i na product details.
<Switch>
<Route>... 
</Switch>

*/
/* REDIRECT
Slouzi k redirectovani uzivatele.
*/
