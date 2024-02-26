import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Public from './pages/Public'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Public />} />
      </Route>
    </Routes>
  )
}

export default App
