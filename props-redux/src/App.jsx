import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Itemlist from './components/Itemlist'
import Fetch from './components/Fetch'

function App() {
  const [count, setCount] = useState(0)
  const items = ['Sagar1', 'sgr 2', 'sgr 3', 'sgr 4']; // Array of items
  
  const users = [
    {
      id: 0,
      name: "Chidume Nnamdi",
      age: 1,
    },
    {
      id: 1,
      name: "Karim",
      age: 2,
    },
    {
      id: 2,
      name: "Bruno",
      age: 3,
    },
    {
      id: 3,
      name: "Ola Brown",
      age: 4,
    },
  ];

  const toggleCount = () => {
    setCount(count + 1);
  }
  const resetToggle = () => {
    setCount(0);
  }
  return (
    <>
    <Router>
    <Navbar count={count}/>
      <Routes>
        <Route path='/fetch' element={<Fetch/>} />
      </Routes>
      <br />
        <button onClick={toggleCount}>Count = {count}</button>
        <br />
        <button onClick={resetToggle}>Reset</button>
      <Footer name="KUWAR" age="24" />
      <Itemlist items={items} />
      <Itemlist users={users} />
    </Router>
    </>
  )
}

export default App
