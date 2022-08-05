import {useParams, useNavigate} from "react-router-dom"

export const Home =()=>{
  let {name} = useParams()
  let navigate = useNavigate();
  return(
  <>
    <h1> WELCOME HOME, {name} </h1>
    <button onClick={()=>
      navigate("/about")}> about page </button>
  </>  
  )
}