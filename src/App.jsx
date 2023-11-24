import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './Components/Nav/Nav'

function App() {
  return (
    <div className="max-w-[1660px] mx-auto">
      <Nav />
      <Outlet />
    </div>
  )
}

export default App