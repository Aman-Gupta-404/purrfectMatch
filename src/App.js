import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import Footer from './components/Footer/Footer';
import Cart from './Pages/Cart/Cart';


function App() {
  return (
    <Router>
      <div className="">
        <Navbar />
        <Routes >
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/shop' element={<Shop/>} />
          <Route exact path='/cart' element={<Cart/>} />
          <Route exact path='/:about' element={<Home/>} />
        </Routes >
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
