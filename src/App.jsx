
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import Login from './Components/Login';
import Admin from './Components/Admin';


function App() {

  return (
    <>
    
    <Router>
      <Routes>
        <Route path='/' element = {
          <>
            <Navbar />
            <Products />
          </>
        } />
        <Route path='login' element = {<Login />} />
        <Route path='admin' element = {<Admin />} />
      </Routes>
    </Router>

    </>
  )
}

export default App
