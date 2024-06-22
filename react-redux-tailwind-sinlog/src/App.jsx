import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Notfound from "./pages/Notfound"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Notfound/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App