// import { MMKV } from 'react-native-mmkv';

// // Create MMKV instance
// export const storage = new MMKV();

// // Storage keys
// export const STORAGE_KEYS = {
//   CART_DATA: 'cart_data',
//   USER_PREFERENCES: 'user_preferences',
// };

// // Cart storage functions
// export const saveCartToStorage = (cartData: any) => {
//   try {
//     storage.set(STORAGE_KEYS.CART_DATA, JSON.stringify(cartData));
//   } catch (error) {
//     console.error('Error saving cart to storage:', error);
//   }
// };

// export const getCartFromStorage = () => {
//   try {
//     const cartData = storage.getString(STORAGE_KEYS.CART_DATA);
//     return cartData ? JSON.parse(cartData) : {};
//   } catch (error) {
//     console.error('Error getting cart from storage:', error);
//     return {};
//   }
// };

// export const clearCartFromStorage = () => {
//   try {
//     storage.delete(STORAGE_KEYS.CART_DATA);
//   } catch (error) {
//     console.error('Error clearing cart from storage:', error);
//   }
// };

// // Generic storage functions
// export const setStorageItem = (key: string, value: any) => {
//   try {
//     storage.set(key, JSON.stringify(value));
//   } catch (error) {
//     console.error(`Error setting storage item ${key}:`, error);
//   }
// };

// export const getStorageItem = (key: string) => {
//   try {
//     const item = storage.getString(key);
//     return item ? JSON.parse(item) : null;
//   } catch (error) {
//     console.error(`Error getting storage item ${key}:`, error);
//     return null;
//   }
// };

// export const removeStorageItem = (key: string) => {
//   try {
//     storage.delete(key);
//   } catch (error) {
//     console.error(`Error removing storage item ${key}:`, error);
//   }
// };



import AsyncStorage from '@react-native-async-storage/async-storage';

// Storage keys
export const STORAGE_KEYS = {
  CART_DATA: 'cart_data',
  USER_PREFERENCES: 'user_preferences',
};

// Cart storage functions
export const saveCartToStorage = async (cartData: any) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEYS.CART_DATA, JSON.stringify(cartData));
  } catch (error) {
    console.error('Error saving cart to storage:', error);
  }
};

export const getCartFromStorage = async () => {
  try {
    const cartData = await AsyncStorage.getItem(STORAGE_KEYS.CART_DATA);
    return cartData ? JSON.parse(cartData) : {};
  } catch (error) {
    console.error('Error getting cart from storage:', error);
    return {};
  }
};

export const clearCartFromStorage = async () => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEYS.CART_DATA);
  } catch (error) {
    console.error('Error clearing cart from storage:', error);
  }
};

// Generic storage functions
export const setStorageItem = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error setting storage item ${key}:`, error);
  }
};

export const getStorageItem = async (key: string) => {
  try {
    const item = await AsyncStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error(`Error getting storage item ${key}:`, error);
    return null;
  }
};

export const removeStorageItem = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing storage item ${key}:`, error);
  }
};
