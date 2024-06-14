import './App.css'
import About from './components/About'
import Features from './components/Features'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
function App() {

  return (
    <>
      <Navbar/>
      <Home />
      <Features />
      <About />
      <Pricing />
    </>
  )
}

export default App
