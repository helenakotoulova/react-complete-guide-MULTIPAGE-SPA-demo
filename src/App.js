import { Route, Routes, Navigate } from "react-router-dom";
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
        <Routes>
          <Route path="/" element={<Navigate to="/welcome" />} />
          <Route path="/welcome/*" element={<Welcome />}>
            <Route path="new-user" element={<p>Welcome, new user!</p>} />
          </Route>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

/*
NYNI BUDEME UPRGRADOVAT NA REACT-ROUTER-DOM 6.
=> switch se meni na routes. vkladame element. nepotrebujeme exact.
=> Link, NavLink existuji i ve verzi 6, ale neni tam activeClassName.
Puvodni verze NavLink: <NavLink activeClassName={classes.active} to="/welcome">Welcome</NavLink>
=> useParams zustava stejne.
=> Redirect uz neni, misto toho je Navigate.
=> i nested Route musi byt schovana v <routes></routes>
=> abychom mohli zobrazit welcome/new-user, coz je nested route ve welcome, musime v App pridat welcome/* a v te nested Route ve welcome upravime path na jen 'new-user'
=> dalsi pozn. ve welcome komponente.
=> ve verzi 6 uz neni useHistory. misto toho je useNavigate.
=> Kdyz za to navigate hodime jeste replace, tak to bude redirectovat, ne pushovat:
 <Route path="/" element={<Navigate to="/welcome" />} />


Takhle to bylo s react-router-dom 5:
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
*/

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
