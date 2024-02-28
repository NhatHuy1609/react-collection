import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Public from './pages/Public'
import Login from './pages/Login'
import RequireAuth from './components/auth/RequireAuth'
import Welcome from './pages/Welcome'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Public />} />
        <Route path='login' element={<Login />} />

        <Route element={<RequireAuth />}>
          <Route path='welcome' element={<Welcome />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
