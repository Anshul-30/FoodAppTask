import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import TextContainer from './TextContainer';
import { RootState } from '../redux/reducers';
import colors from '../styles/colors';
import { moderateScale, scale } from '../styles/scaling';

interface CartSummaryProps {
  onPress?: () => void;
}

const CartSummary: React.FC<CartSummaryProps> = ({ onPress }) => {
  const cartData = useSelector((state: RootState) => state.home.cartData);
  
  const getTotalItems = () => {
    return Object.values(cartData).reduce((total, item) => total + item.quantity, 0);
  };
  
  const getTotalPrice = () => {
    return Object.values(cartData).reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      return total + (price * item.quantity);
    }, 0);
  };
  
  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();
  
  if (totalItems === 0) return null;
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.cartButton} onPress={onPress}>
        <View style={styles.cartInfo}>
          <TextContainer 
            text={`${totalItems} item${totalItems > 1 ? 's' : ''}`} 
            style={styles.itemCount} 
            isDynamicText 
          />
          <TextContainer 
            text={`$${totalPrice.toFixed(2)}`} 
            style={styles.totalPrice} 
            isDynamicText 
          />
        </View>
        <TextContainer 
          text="View Cart" 
          style={styles.viewCartText} 
          isDynamicText 
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateScale(12),
    backgroundColor: colors.white,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cartButton: {
    backgroundColor: colors.themeColor,
    borderRadius: moderateScale(8),
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateScale(12),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cartInfo: {
    flex: 1,
  },
  itemCount: {
    color: colors.white,
    fontSize: scale(12),
    fontWeight: '500',
  },
  totalPrice: {
    color: colors.white,
    fontSize: scale(16),
    fontWeight: '700',
  },
  viewCartText: {
    color: colors.white,
    fontSize: scale(14),
    fontWeight: '600',
  },
});

export default CartSummary;
