import { BrowserRouter, Route, Routes ,} from "react-router-dom";
import Cars from "./components/Cars";
import Home from "./components/Home";
import Subaru from "./components/Subaru";
import Toyota from "./components/Toyota";
import Nissan from "./components/Nissan";
import Mercedes from "./components/Mercedes";
import Bmw from "./components/Bmw";
import Dashboard from "./components/Dashboard";
import AddCar from "./components/Admin/AddCar";
import SellCar from "./components/Admin/Dashboard/Sellcar";
import ViewCars from "./components/Admin/ViewCars";
import SingleCar from "./components/Admin/SingleCar";
import SingleOne from "./components/SingleOne";

import Login from "./components/Admin/Login";
import NavBar from "./components/Navbar";
function App() {
  return (
    <BrowserRouter>
    <NavBar/> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars">
          <Route index element={<Cars />} />
          <Route path="subaru">
            <Route index element={<Subaru />} />
            <Route path=":id" element={<SingleOne />} />
          </Route>

          <Route path="toyota">
            <Route index element={<Toyota />} />
            <Route path=":id" element={<SingleOne />} />
          </Route>
          <Route path="nissan">
            <Route index element={<Nissan />} />
            <Route path=":id" element={<SingleOne />} />
          </Route>
          <Route path="mercedes">
            <Route index element={<Mercedes />} />
            <Route path=":id" element={<SingleOne />} />
          </Route>
          <Route path="bmw">
            <Route index element={<Bmw />} />
            <Route path=":id" element={<SingleOne />} />
          </Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="/admin">
          <Route index element={<Dashboard />} />
          <Route path="add_car" element={<AddCar />} />
          <Route path="sell_car" element={<SellCar />} />
          <Route path="view_car">
            <Route index element={<ViewCars />} />
            <Route path=":id" element={<SingleCar />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
