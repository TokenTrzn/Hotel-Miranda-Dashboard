import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PrivateRoute } from './login/PrivateRoute'
import { Layout } from './common/Layout'
import { Login } from './Login/pages/Login'
import { Dashboard } from './Dashboard/pages/Dashboard'
import { Guest } from './Guest/pages/Guest'
import { Rooms } from './Rooms/pages/Rooms'
import { Contact } from './Contact/page/Contact'
import { Users } from './Users/page/Users'
import { NewRoomForm } from './rooms/pages/NewRoomForm'
import { AuthProvider } from './login/AuthContext'
import { GuestDetails } from './guest/pages/GuestDetails'

function App() {

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='' element={<Login />} />
            <Route element={<Layout />}>
              <Route path='/dashboard' element={<PrivateRoute element={<Dashboard />} />} />
              <Route path='/guest' element={<PrivateRoute element={<Guest />} />} />
              <Route path='/guest/details/:id' element={<PrivateRoute element={<GuestDetails />} />} />
              <Route path='/rooms' element={<PrivateRoute element={<Rooms />} />} />
              <Route path='/new-room' element={<PrivateRoute element={<NewRoomForm />} />} />
              <Route path='/contact' element={<PrivateRoute element={<Contact />} />} />
              <Route path='/users' element={<PrivateRoute element={<Users />} />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App