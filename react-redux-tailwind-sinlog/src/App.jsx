import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Notfound from "./pages/Notfound"
import Home from "./pages/Home"
function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Notfound/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App