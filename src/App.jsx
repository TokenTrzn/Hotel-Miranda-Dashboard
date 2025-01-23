import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PrivateRoute } from './login/PrivateRoute'
import { Layout } from './common/Layout'
import { Login } from './login/pages/Login'
import { Dashboard } from './dashboard/pages/Dashboard'
import { Guest } from './guest/pages/Guest'
import { Rooms } from './rooms/pages/Rooms'
import { Contact } from './contact/page/Contact'
import { Users } from './users/page/Users'
import { NewRoomForm } from './rooms/pages/NewRoomForm'
import { GuestDetails } from './guest/pages/GuestDetails'
import { AuthProvider } from './login/AuthContext'
import { Provider } from 'react-redux'
import { store } from './store/store'

function App() {

  return (
    <>
      <AuthProvider>
        <Provider store={store}>
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
        </Provider>
      </AuthProvider>
    </>
  )
}

export default App