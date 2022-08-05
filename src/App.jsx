import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import {
  About
} from "./comps/about"
import {
  Contact
} from "./comps/contact"
import {
  Products
} from "./comps/products/products"
import {
  Cart
} from "./comps/products/cart"
import {
  Items
} from "./comps/products/items"
import {
  Search
} from "./comps/products/search"
import {
  Home
} from "./comps/home"

const App = ()=> {

  return(
    <Router>
    <nav>
      <NavLink to="/"> Home </NavLink>
      <NavLink to="/about"> About </NavLink>
      <NavLink to="/contact"> Contact </NavLink>
      <NavLink to="/products"> Products </NavLink>
    </nav>
    <Routes>
      <Route path="/:name" element={<Home />} />
      <Route path="about" element={ <About />} />
      <Route path="contact" element={ <Contact />} />
      <Route path ="products"
      element={ <Products />}>
        <Route path="cart" element={<Cart />}/>
        <Route path="items" element={<Items />}/>
        <Route path="search" element={<Search />}/>
      </Route>
      <Route path="*" element={<h1> ERROR 404 </h1>} />
    </Routes>
  </Router>
  )
}

export default App;