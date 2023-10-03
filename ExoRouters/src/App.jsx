import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/home/home'
import Users from './components/pages/users/users'
import UserDetails from './components/pages/users/userDetails'
import Contact from './components/pages/contact/contact'
import About from './components/pages/about/about'
import NotFound from './components/pages/not-found/not-found'
import Navbar from './components/shared/navbar'
import './App.css'

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/users" element={ <Users/> } >
          <Route path=":userId" element={ <UserDetails/> }/>
        </Route>
        <Route path="/about" element={ <About/> } />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="*" element={ <NotFound/> } />
      </Routes>
    </>
  )
}

export default App
