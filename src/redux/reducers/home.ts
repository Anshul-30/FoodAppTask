import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CartItem {
  id: string;
  name: string;
  price: string;
  image: any;
  inStock: boolean;
  quantity: number;
}

export interface homeInterface {
    cartData: { [key: string]: CartItem };
}

const initialState: homeInterface = {
    cartData: {},
}

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setCartData: (state, action: PayloadAction<{ [key: string]: CartItem }>) => {
      state.cartData = action.payload;
    },
    addToCart: (state, action: PayloadAction<Omit<CartItem, 'quantity'>>) => {
      const item = action.payload;
      if (state.cartData[item.id]) {
        state.cartData[item.id].quantity += 1;
      } else {
        state.cartData[item.id] = { ...item, quantity: 1 };
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      if (state.cartData[itemId]) {
        if (state.cartData[itemId].quantity > 1) {
          state.cartData[itemId].quantity -= 1;
        } else {
          delete state.cartData[itemId];
        }
      }
    },
    updateCartQuantity: (state, action: PayloadAction<{ itemId: string; quantity: number }>) => {
      const { itemId, quantity } = action.payload;
      if (state.cartData[itemId]) {
        if (quantity <= 0) {
          delete state.cartData[itemId];
        } else {
          state.cartData[itemId].quantity = quantity;
        }
      }
    },
    clearCart: (state) => {
      state.cartData = {};
    },
    loadCartFromStorage: (state, action: PayloadAction<{ [key: string]: CartItem }>) => {
      state.cartData = action.payload || {};
    }
  },
})

export const {
  setCartData,
  addToCart,
  removeFromCart,
  updateCartQuantity,
  clearCart,
  loadCartFromStorage
} = homeSlice.actions

export default homeSlice.reducer