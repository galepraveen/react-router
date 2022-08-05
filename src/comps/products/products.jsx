import {
  NavLink,
  Outlet
} from "react-router-dom"

export const Products = ()=> {
  return(
  <>
    <div>
      <i> This is Product page </i>
    </div>
    <div>
      <NavLink to="/products/cart"> Cart </NavLink>
      <NavLink to="/products/items"> Items </NavLink>
      <NavLink to="/products/search"> Search </NavLink>
    </div>
    <Outlet /> 
  </>
  )
}
