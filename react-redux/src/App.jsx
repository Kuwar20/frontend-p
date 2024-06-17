import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from './components/Form'
import Navbar from './components/Navbar'
import NotFoundPage from './Pages/NotFoundpage'
import Read from './components/Read'

function App() {

  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Form />} />
            <Route path='/read' element={<Read />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
