import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils'
import { product } from '../Data/productsData'

const initialState = {
    productDeets: []
}

/* 
    {
        productId: null,
        quantity: null
    }
*/

export const cartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addProduct: (state, action) => {

      let tempBool = false;
      if(state.productDeets.length !== 0) {
        state.productDeets.map(item => {
          if(item.producId === action.payload.producId) {
            tempBool = true;
          }
          })
      }
      if(!tempBool) {
        // to add the product to the state
        state.productDeets.push({
          producId: action.payload.producId,
          quantity: 1,
          name: action.payload.name,
          image: action.payload.image,
          price: action.payload.price,
        })
      }
        
    },
    removeProduct: (state, action) => {
        //   to remove product from the state
        for (var i = 0; i < state.productDeets.length; i++) {
          if (state.productDeets[i].producId === action.payload.producId) {
              var spliced = state.productDeets.splice(i, 1);
          }
        }

        return state;
        
    },
    increaseProductNumber: (state, action) => {
      state.productDeets.map((item, index) => {
        if(action.payload.producId === item.producId) {
            return item.quantity = item.quantity + 1;
        }
      })
      // return {...state, productDeets: [...state.]}
      
    },
    decreaseProductNumber: (state, action) => {
      state.productDeets.map(item => {
        if(action.payload.producId === item.producId) {
            if(item.quantity > 1) {
              return item.quantity = item.quantity - 1;
            }
        }
      })
    },
  },
})

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct, increaseProductNumber, decreaseProductNumber } = cartSlice.actions

export default cartSlice.reducer