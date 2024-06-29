import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUp from "./components/auth/SignUp";
import LogIn from "./components/auth/LogIn";

import Dashboard from "./components/dashboard/Dashboard";
import Home from "./components/dashboard/Home";

import Items from "./components/items/Items";
import AddItem from "./components/items/AddItem";
import EditItem from "./components/items/EditItem";

import Suppliers from "./components/suppliers/Suppliers";
import AddSupplier from "./components/suppliers/AddSupplier";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path='/' element={<Dashboard />}>
            <Route path='' element={<Home />}></Route>
            <Route path="/items" element={<Items />}></Route>
            <Route path="/add-item" element={<AddItem />}></Route>
            <Route path="/items/edit/:strItemID" element={<EditItem />}></Route>

            <Route path="/suppliers" element={<Suppliers />}></Route>
            <Route path="add-supplier" element={<AddSupplier />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;