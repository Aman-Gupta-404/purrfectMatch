import React, { useState, useEffect, useCallback } from 'react'
import "./Navbar.css"
import pawImage from "../../img/paw.png"
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'


function Navbar() {

    const cartProduct = useSelector((state) => state.productDeets)

    const [cartNumber, setCartNumber] = useState(0)
    const [navOpen, setNavOpen] = useState(false)
    const [y, setY] = useState(window.scrollY);

    const handleNavigation = useCallback(
        e => {
          const window = e.currentTarget;
          if (y > window.scrollY) {
            
          } else if (y < window.scrollY) {
          }
          setY(window.scrollY);
        }, [y]
      );

    useEffect(() => {
        // cart number 
        if(cartProduct.length !== 0) {
            setCartNumber(cartProduct.length)
        }

        // scroll detection
        setY(window.scrollY);
        window.addEventListener("scroll", handleNavigation);
      
        return () => {
          window.removeEventListener("scroll", handleNavigation);
        };
    }, [cartNumber, cartProduct.length, handleNavigation])
    


    const cartNumebrDis = () => {
        if(cartNumber !== 0) {
            return (
                <span className='link_cart_number'>{cartNumber}</span>
            )
        } else return null
    } 

    const toggleNav = (e) => {
        e.preventDefault();
        setNavOpen((oldState) => {
            return !oldState;
        });
    }

  return (
    <div className='navbar' id={y>5? "addNavBG_color": ""}>
        <div className="navbar__logo">
            <a href="" clLinkssName="navbar__logo--link">
                <img src={pawImage} alt="paw logo" className="navbar__logo--image" />
                <h1 className="navbar__logo--text">Purff</h1>
            </a>
        </div>
        <div className="navbar__options" id={navOpen? "navOpen" : ""}>
            <ul className="navbar__items">
                <li className="navbar__item"><Link to='/' className='navbar__item--link'>Home</Link></li>
                <li className="navbar__item"><Link to='/shop' className='navbar__item--link'>Shop</Link></li>
                <li className="navbar__item"><Link to='/about' className='navbar__item--link'>About</Link></li>
                <li className="navbar__item"><Link to='/cart' className='navbar__item--link'>Cart {cartNumebrDis()}</Link></li>
            </ul>
        </div>
        <div className="burger">
            <div className="nav_burger" onClick={toggleNav}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>
    </div>
  )
}

export default Navbar