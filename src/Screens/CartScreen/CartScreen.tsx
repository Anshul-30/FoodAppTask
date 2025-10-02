import React, { FC } from 'react';
import {
  Alert,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';
import Header from '../../Components/Header';
import TextContainer from '../../Components/TextContainer';
import WrapperContainer from '../../Components/WrapperContainer';
import {
  clearCartData,
  removeItemFromCart,
  updateItemQuantity,
} from '../../redux/actions/home';
import { RootState } from '../../redux/reducers';
import { CartItem } from '../../redux/reducers/home';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import { moderateScale } from '../../styles/scaling';
import imagePath from '../../constants/imagePath';

interface PropsTypes {}

const CartScreen: FC<PropsTypes> = () => {
  const cartData = useSelector((state: RootState) => state.home.cartData);
  const cartItems = Object.values(cartData);
  const deliveryFee = 10;
  const platformFee = 12;
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      return total + price * item.quantity;
    }, 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const handleQuantityChange = async (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      await handleRemoveItem(itemId);
    } else {
      await updateItemQuantity(itemId, newQuantity);
    }
  };

  const handleRemoveItem = (itemId: string) => {
    Alert.alert(
      'Remove Item',
      'Are you sure you want to remove this item from cart?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: async () => await removeItemFromCart(itemId),
        },
      ],
    );
  };

  const handleClearCart = () => {
    Alert.alert(
      'Clear Cart',
      'Are you sure you want to remove all items from cart?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Clear All',
          style: 'destructive',
          onPress: () => clearCartData(),
        },
      ],
    );
  };

  const handleCheckout = () => {
    Alert.alert(
      'Checkout',
      `Proceed to checkout with ${getTotalItems()} items for $${getTotalPrice().toFixed(
        2,
      )}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Proceed',
          onPress: () => {},
        },
      ],
    );
  };

  const renderCartItem = ({ item }: { item: CartItem }) => (
    <View style={styles.cartItemContainer}>
      <Image source={item.image} style={styles.itemImage} />

      <View style={styles.itemDetails}>
        <TextContainer text={item.name} style={styles.itemName} isDynamicText />

        <View style={styles.itemInfoRow}>
          <TextContainer
            text={item.price}
            style={styles.itemPrice}
            isDynamicText
          />
        </View>
        <View style={styles.quantityControls}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => handleQuantityChange(item.id, item.quantity - 1)}
          >
            <TextContainer
              text="-"
              style={styles.quantityButtonText}
              isDynamicText
            />
          </TouchableOpacity>

          <View style={styles.quantityDisplay}>
            <TextContainer
              text={item.quantity.toString()}
              style={styles.quantityText}
              isDynamicText
            />
          </View>

          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => handleQuantityChange(item.id, item.quantity + 1)}
            disabled={!item.inStock}
          >
            <TextContainer
              text="+"
              style={[
                styles.quantityButtonText,
                !item.inStock && styles.disabledText,
              ]}
              isDynamicText
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const renderEmptyCart = () => (
    <View style={styles.emptyCartContainer}>
      <Image
        source={require('../../assets/images/cart.png')}
        style={styles.emptyCartIcon}
      />
      <TextContainer
        text="Your cart is empty"
        style={styles.emptyCartTitle}
        isDynamicText
      />
      <TextContainer
        text="Add some delicious items to get started"
        style={styles.emptyCartSubtitle}
        isDynamicText
      />
    </View>
  );

  const renderCartSummary = () => (
    <View style={styles.summaryContainer}>
      <View style={styles.summaryRow}>
        <TextContainer
          text="Subtotal"
          style={styles.summaryLabel}
          isDynamicText
        />
        <TextContainer
          text={`$${getTotalPrice().toFixed(2)}`}
          style={styles.summaryValue}
          isDynamicText
        />
      </View>

      <View style={styles.summaryRow}>
        <TextContainer
          text="Delivery Fee"
          style={styles.summaryLabel}
          isDynamicText
        />
        <TextContainer
          text={`$${deliveryFee.toFixed(2)}`}
          style={styles.summaryValue}
          isDynamicText
        />
      </View>

      <View style={styles.summaryRow}>
        <TextContainer
          text="Platform Fee"
          style={styles.summaryLabel}
          isDynamicText
        />
        <TextContainer
          text={`$${platformFee.toFixed(2)}`}
          style={styles.summaryValue}
          isDynamicText
        />
      </View>

      <View style={[styles.summaryRow, styles.totalRow]}>
        <TextContainer text="Total" style={styles.totalLabel} isDynamicText />
        <TextContainer
          text={`$${(getTotalPrice() + deliveryFee + platformFee).toFixed(2)}`}
          style={styles.totalValue}
          isDynamicText
        />
      </View>
    </View>
  );

  return (
    <WrapperContainer>
      <Header cetnerTitle="CART" />

      {cartItems.length > 0 ? (
        <>
          <View
            style={{
              ...styles.topLable,
              marginVertical: moderateScale(7),
              justifyContent: 'space-between',
            }}
          >
            <View style={{ flexDirection: 'row', flex: 0.85 }}>
              <FastImage
                source={imagePath.map}
                resizeMode="contain"
                style={{
                  width: moderateScale(50),
                  height: moderateScale(50),
                }}
              />
              <View style={styles.addressView}>
                <TextContainer
                  text={`Home`}
                  style={styles.cartAddressHeader}
                  isDynamicText
                />
                <TextContainer
                  text={`Sector 17 Chandigarh`}
                  style={styles.cartAddressDesc}
                  isDynamicText
                />
              </View>
            </View>
          </View>
          <View style={styles.cartHeader}>
            <TextContainer
              text={`${getTotalItems()} item${
                getTotalItems() > 1 ? 's' : ''
              } in cart`}
              style={styles.cartHeaderText}
              isDynamicText
            />
            <TouchableOpacity onPress={handleClearCart}>
              <TextContainer
                text="Clear Cart"
                style={styles.clearAllText}
                isDynamicText
              />
            </TouchableOpacity>
          </View>
          <ScrollView>
            <FlatList
              data={cartItems}
              renderItem={renderCartItem}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.listContainer}
            />
            {renderCartSummary()}
          </ScrollView>

          <TouchableOpacity
            style={styles.checkoutButton}
            onPress={handleCheckout}
          >
            <TextContainer
              text={`Pay $${(
                getTotalPrice() +
                deliveryFee +
                platformFee
              ).toFixed(2)}`}
              style={styles.checkoutButtonText}
              isDynamicText
            />
          </TouchableOpacity>
        </>
      ) : (
        renderEmptyCart()
      )}
    </WrapperContainer>
  );
};

export default CartScreen;
