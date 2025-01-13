import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './common/Layout'
import { Login } from './Login/pages/Login'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='' element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
