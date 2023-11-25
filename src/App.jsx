import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div>
      <div className="max-w-[1660px] mx-auto">
        <Nav />
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App