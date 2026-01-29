import { BrowserRouter, Routes,Route } from "react-router-dom"
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import HomePage  from "./Pages/HomePage"
import Layout from "./Layout/Layout"
import Shop from "./Pages/Shop"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<HomePage/>} />
        </Route>
<Route path="/shop" element={<Shop/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
