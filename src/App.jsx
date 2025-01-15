import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './common/Layout'
import { Login } from './Login/pages/Login'
import { Dashboard } from './Dashboard/pages/Dashboard'
import { Guest } from './Guest/pages/Guest'
import { Rooms } from './Rooms/pages/Rooms'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='' element={<Login />} />
            <Route element={<Layout />}>
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/guest' element={<Guest />} />
              <Route path='/rooms' element={<Rooms />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App