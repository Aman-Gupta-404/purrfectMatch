import React, {useState, useEffect} from 'react'
import "./Cart.css"
import { useSelector, useDispatch } from 'react-redux'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import cartImage from "../../img/bgc/cart2.png"
import { increaseProductNumber, decreaseProductNumber, removeProduct } from "../../redux/cartSlice"

function Cart() {
  const [cartTotal, setcartTotal] = useState(0)
  const [open, setOpen] = React.useState(false);
  const cartProduct = useSelector((state) => state.productDeets)
  const dispatch = useDispatch()

  useEffect(() => {
    if(cartProduct.length !== 0) {
      let tempSum = 0;
      cartProduct.map(item => {
        tempSum = tempSum + (item.price * item.quantity);
      })
      setcartTotal(tempSum)
    }
  }, [cartTotal, cartProduct])
  
  const increaseCart = (productId) => {
    dispatch(increaseProductNumber({
      producId: productId
    }))
  };

  const decreaseCart = (productId, quantity) => {
    if(quantity === 1) {
      dispatch(removeProduct({
        producId: productId
      }))
    } else {
      dispatch(decreaseProductNumber({
        producId: productId
      }))
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const displayCartItems = () => {
    if(cartProduct.length !== 0) {
      return cartProduct.map((item, index) => {
        return (
          <>
          <div className='cart__product' key={index}>
            <div className="cart__product__img">
              <img src={item.image} alt="cart image" className='cart__product--image'/>
            </div>
            <div className="cart__product__name">
            <h3 className="cart__item__text">{item.name}</h3>
            </div>
            <div className="cart__product__icons">
              <div className="cart__remove" onClick={() => decreaseCart(item.producId, item.quantity)}>
                <RemoveIcon />
              </div>
              <div className="cart__number">
                <h3 className="cart__item__text">{item.quantity}</h3>
              </div>
              <div className="cart__add" onClick={() => increaseCart(item.producId)}>
                <AddIcon />
              </div>
            </div>
            <div className="cart__product__price"><h3 className="cart__item__text">$ {(item.price) * item.quantity}</h3></div>
          </div>
          </>
        )
      })
    } else {
      return (
        <dvi className="cart__noItems">
          <div className="cart__noItem__image">
            <img src={cartImage} alt="" className='cart_noItem_img'/>
          </div>
          <div className="cart__noItem__image">
            <p className="noCartText">you have not added anything to the cart, please go to the shop and add your favourite products!</p>
            <button className="cart__action--btn">Go to shop</button>
          </div>
        </dvi>
      )
    }
  }

  const orderDialoge = () => {
    return (
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth="md"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title">
          <div className="filters__dialog--title">
          <h2 className='filters__heading'>Your order has been placed!</h2>
          </div>
        </DialogTitle>
        <DialogContent>
          <div className="filters__content">
            <h2 className="cart__dialog--text">Thank you for being a valued customer, we will deliver the order as soon as possible</h2>
          </div>
        </DialogContent>
        <DialogActions>
          <button className='btn-ts-filter' onClick={handleClose} autoFocus>
            Meow!
          </button>
        </DialogActions>
      </Dialog>
    )
  }

  const displayTotal = () => {
    if(cartProduct.length !== 0) {
      return (
        <div className="cart__total">
          <h3 className="cart__item__text">Total</h3>
          <h3 className="cart__item__text">$ {cartTotal}</h3>
        </div>
      )
    }
  }

  return (
    <div className='cart'>
        <div className="cart__navbar"></div>
        <div className="cart__cont">
          <div className="cart__cont__heading">
            <h1 className='cart__cont--text'>Cart</h1>
            
          </div>
            <div className="cart__products">
              {displayCartItems()}
              {displayTotal()}
              {orderDialoge()}
              {cartProduct.length !== 0 ?
                <div className="cart__action">
                  <button onClick={handleClickOpen} className='cart__action--btn'>Place order!</button>
              </div> :
              ""
              }
            </div>

        </div>
    </div>
  )
}

export default Cart