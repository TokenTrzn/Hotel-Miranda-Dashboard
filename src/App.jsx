import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PrivateRoute } from './login/PrivateRoute'
import { Layout } from './common/Layout'
import { Login } from './login/pages/Login'
import { Dashboard } from './dashboard/pages/Dashboard'
import { Booking } from './bookings/pages/Bookings'
import { Rooms } from './rooms/pages/Rooms'
import { Contact } from './contact/page/Contact'
import { Users } from './users/page/Users'
import { NewRoomForm } from './rooms/pages/NewRoomForm'
import { BookingDetails } from './bookings/pages/BookingDetails'
import { AuthProvider } from './login/AuthContext'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { NewUserForm } from './users/page/NewUserForm'
import { RoomDetails } from './Rooms/pages/RoomDetails'

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
                <Route path='/booking' element={<PrivateRoute element={<Booking />} />} />
                <Route path='/booking/details/:id' element={<PrivateRoute element={<BookingDetails />} />} />
                <Route path='/rooms' element={<PrivateRoute element={<Rooms />} />} />
                <Route path='/rooms/details/:id' element={<PrivateRoute element={<RoomDetails />} />} />
                <Route path='/new-room' element={<PrivateRoute element={<NewRoomForm />} />} />
                <Route path='/contact' element={<PrivateRoute element={<Contact />} />} />
                <Route path='/users' element={<PrivateRoute element={<Users />} />} />
                <Route path='/new-user' element={<PrivateRoute element={<NewUserForm />} />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Provider>
      </AuthProvider>
    </>
  )
}

export default App