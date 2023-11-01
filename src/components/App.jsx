import { useEffect } from "react";
import Nav from "./Nav";
import Router from "./Routes";


const App = () => {
  useEffect(() => {
    fetch('https://fakestoreapi.com/products', { mode: 'cors' })
      .then((res) => {
        res.json()
      })
      .then((json) => {
        console.log(json)
      })  

  });



  return (
    <>
      <Nav></Nav>
      <Router />
    </>
  );
}

export default App;