import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Bike from "./component/Bike"
import Nav from "./component/Nav"
import Car from "./component/Car"
import Fruit from "./component/Fruit"
import Home from "./component/Home"
import Mobile from "./component/Mobile";
import Login from "./component/Login"

export default function App() {

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/car" element={<Car />} />
        <Route path="/bike" element={<Bike />} />
        <Route path="/fruit" element={<Fruit />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));