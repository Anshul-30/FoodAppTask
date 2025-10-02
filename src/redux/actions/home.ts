import store from "../store";
import { addToCart, removeFromCart, updateCartQuantity, clearCart, loadCartFromStorage } from "../reducers/home";
import { saveCartToStorage, getCartFromStorage } from "../../utils/storage";

const { dispatch } = store;

// Add item to cart
export const addItemToCart = async (item: any) => {
  dispatch(addToCart(item));
  const currentState = store.getState();
  await saveCartToStorage(currentState.home.cartData); // await needed
};

// Remove item from cart
export const removeItemFromCart = async (itemId: string) => {
  dispatch(removeFromCart(itemId));
  const currentState = store.getState();
  await saveCartToStorage(currentState.home.cartData);
};

// Update item quantity
export const updateItemQuantity = async (itemId: string, quantity: number) => {
  dispatch(updateCartQuantity({ itemId, quantity }));
  const currentState = store.getState();
  await saveCartToStorage(currentState.home.cartData);
};

// Clear cart
export const clearCartData = async () => {
  dispatch(clearCart());
  await saveCartToStorage({});
};

// Load cart data from AsyncStorage
export const loadCartData = async () => {
  const savedCart = await getCartFromStorage(); // await needed
  dispatch(loadCartFromStorage(savedCart || {}));
};

// Calculate total price
export const getCartTotal = () => {
  const state = store.getState();
  const cartData = state.home.cartData;

  return Object.values(cartData).reduce((total: number, item: any) => {
    const price = parseFloat(item.price.replace('$', ''));
    return total + price * item.quantity;
  }, 0);
};

// Get total items count
export const getCartItemsCount = () => {
  const state = store.getState();
  const cartData = state.home.cartData;

  return Object.values(cartData).reduce((total: number, item: any) => total + item.quantity, 0);
};
