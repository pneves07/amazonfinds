
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './Components/Navbar';
import Products from './Components/Products';


function App() {

  return (
    <>
    <Navbar></Navbar>
    <Router>
      <Routes>
        <Route path='/' element = {<Products />} />
      </Routes>
    </Router>

    </>
  )
}

export default App
