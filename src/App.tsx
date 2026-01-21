import { BrowserRouter, Routes,Route } from "react-router-dom"
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import HomePage  from "./Pages/HomePage"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
