import React, { useState, useEffect } from 'react'
import "./Card.css"
import cat_food from "../../img/cat_food.jpg"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useSelector, useDispatch } from 'react-redux'
import { addProduct, removeProduct, increaseProductNumber, decreaseProductNumber } from "../../redux/cartSlice"

function Card({product}) {
  
  const ProductState = useSelector((state) => state.productDeets)

  const [cartCount, setCartCount] = useState(0)
  const dispatch = useDispatch()

  const getCartNumber = () => {
    if(ProductState.length !== 0) {
      ProductState.map(item => {
        if(product.id === item.producId) {
          return setCartCount(item.quantity)
        }
      })
    } else {
      setCartCount(0);
    }
  }

  useEffect(() => {
    // setting up the initials of the cart count
    getCartNumber()
  }, [cartCount])
  

  const { name, description, price, image } = product

  const increaseCount = (event) => {
    // event.preventDefault();
    dispatch(increaseProductNumber({
      producId: product.id
    }))
    setCartCount((oldVal) => oldVal + 1);
  }

  const decreseCount = (event) => {
    event.preventDefault();
    if(cartCount > 1) {
      dispatch(decreaseProductNumber({
        producId: product.id
      }))
      setCartCount((oldVal) => oldVal - 1);
    } else if(cartCount === 1) {
      dispatch(removeProduct({
        producId: product.id
      }))
      setCartCount(0);
    }
  }

  // function to add to cart
  const addToCart = (event) => {
    event.preventDefault();
    // adding the item to cart
    if(cartCount === 0) {
      dispatch(addProduct({
        producId: product.id,
        name: product.name,
        image: product.image,
        price: product.price
      }))
      
      setCartCount(1)
    }
  }

  return (
    <div className='card'>
        <div className="card__image">
            <img src={image} alt={`image of`} className="card__image--img"/>
        </div>
        <div className="card__content">
          <div className="card__name">
            <h1 className="card__name--text">{name}</h1>
          </div>
          <div className="card__des">
            <p className="card__des--text">
              {description}
            </p>
          </div>
          <hr className='card__action_hr'/>
          <div className="card__action">
            <div className="card__price">
              <p className="card__price--text">{`$ ${price}`}</p>
            </div>
            <div className="card__cart">
              {cartCount === 0 ?
              <>
                <ShoppingCartOutlinedIcon onClick={addToCart} fontSize='large' className="shop__cart--icon"/>
              </> : 
                <div className="shop__cart__num">
                  <div
                    className="shop__cart__num--sub"
                    onClick={decreseCount}
                  >
                    <RemoveIcon fontSize='large'/>
                  </div>
                  <div className="shop__cart__num--count">{cartCount}</div>
                  <div
                    className="shop__cart__num--add"
                    onClick={increaseCount}
                  >
                  <AddIcon fontSize='large'/>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
    </div>
  )
}

export default Card