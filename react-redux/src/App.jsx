import './App.css'
import Form from './components/Form'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Form />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
