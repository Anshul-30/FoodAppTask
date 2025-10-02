import React, { FC, useCallback, useState, useEffect } from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { useSelector } from 'react-redux';
import TextContainer from '../../Components/TextContainer';
import { styles } from './styles';
import WrapperContainer from '../../Components/WrapperContainer';
import CartSummary from '../../Components/CartSummary';
import imagePath from '../../constants/imagePath';
import { productListData, vendorData } from '../../constants/extra';
import {
  addItemToCart,
  removeItemFromCart,
  loadCartData,
} from '../../redux/actions/home';
import { RootState } from '../../redux/reducers';
import colors from '../../styles/colors';
import { moderateScale } from '../../styles/scaling';

interface PropTypes {
  navigation: any;
}

const ITEMS_PER_PAGE = 10;

const ProductList: FC<PropTypes> = ({ navigation }) => {
  const cartData = useSelector((state: RootState) => state.home.cartData);
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedItems, setDisplayedItems] = useState(
    productListData.slice(0, ITEMS_PER_PAGE),
  );
  const [isLoading, setIsLoading] = useState(false);
  // no-op

  useEffect(() => {
    // Load cart data from storage when component mounts
    loadCartData();
  }, []);

  const incrementItem = async (item: any) => {
    await addItemToCart(item);
  };

  const decrementItem = async (itemId: string) => {
    await removeItemFromCart(itemId);
  };

  // Update displayed items when page changes
  useEffect(() => {
    setDisplayedItems(productListData.slice(0, currentPage * ITEMS_PER_PAGE));
  }, [currentPage]);

  const loadMoreItems = () => {
    if (isLoading) return;

    const nextPage = currentPage + 1;
    const startIndex = (nextPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    const base = productListData;
    if (startIndex < base.length) {
      setIsLoading(true);

      setTimeout(() => {
        const newItems = base.slice(0, endIndex);
        setDisplayedItems(newItems);
        setCurrentPage(nextPage);
        setIsLoading(false);
      }, 1000);
    }
  };

  const renderFooter = () => {
    if (!isLoading)
      return <View style={{ paddingBottom: moderateScale(100) }}></View>;
  };

  const renderItem = useCallback(
    ({ item }: any) => {
      const cartItem = cartData[item.id];
      const quantity = cartItem ? cartItem.quantity : 0;

      return (
        <TouchableOpacity disabled style={styles.itemContainer}>
          <View style={styles.details}>
            <View style={styles.vegBadgeRow}>
              <View
                style={[
                  styles.vegBadgeBox,
                  {
                    borderColor: item.isVeg
                      ? colors.successGreen
                      : colors.errorRed,
                  },
                ]}
              >
                <View
                  style={[
                    styles.vegBadgeDot,
                    {
                      backgroundColor: item.isVeg
                        ? colors.successGreen
                        : colors.errorRed,
                    },
                  ]}
                />
              </View>
            </View>
            <TextContainer text={item.name} style={styles.name} isDynamicText />
            <TextContainer
              text={item.description}
              style={styles.description}
              isDynamicText
              numberOfLines={2}
            />

           
            <TextContainer
              text={item.price}
              style={styles.price}
              isDynamicText
            />
          </View>
          <View style={styles.rightColumn}>
            <View style={styles.imageContainer}>
              <Image source={item.image} style={styles.image} />
            </View>
            {item.inStock ? (
              <View>
                {quantity > 0 ? (
                  <View style={styles.counter}>
                    <TouchableOpacity
                      onPress={() => decrementItem(item.id)}
                      style={styles.counterButton}
                    >
                      <TextContainer
                        text="-"
                        style={styles.counterText}
                        isDynamicText
                      />
                    </TouchableOpacity>

                    <TextContainer
                      text={`${quantity}`}
                      style={styles.counterValue}
                      isDynamicText
                    />
                    <TouchableOpacity
                      onPress={() => incrementItem(item)}
                      style={styles.counterButton}
                    >
                      <TextContainer
                        text="+"
                        style={styles.counterText}
                        isDynamicText
                      />
                    </TouchableOpacity>
                  </View>
                ) : (
                  <TouchableOpacity
                    onPress={() => incrementItem(item)}
                    style={styles.addButton}
                  >
                    <TextContainer
                      text="Add"
                      style={styles.addText}
                      isDynamicText
                    />
                  </TouchableOpacity>
                )}
              </View>
            ) : (
              <TextContainer
                text="Out of stock"
                style={styles.outOfStock}
                isDynamicText
              />
            )}
          </View>
        </TouchableOpacity>
      );
    },
    [cartData],
  );
  return (
    <View style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FastImage
          style={styles.vendorBanner}
          source={imagePath.VendorBanner}
        />

        <WrapperContainer>
          <View style={styles.vendorDetailContainer}>
            <View style={{ marginHorizontal: moderateScale(24), flex: 1 }}>
              <TextContainer
                style={styles.vendorName}
                text={vendorData?.name}
              />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: moderateScale(4),
                }}
              >
                <Image style={styles.locIcon} source={imagePath.locationIcon} />
                <TextContainer
                  style={styles.vendorAddress}
                  text={vendorData?.distance}
                />
                <TextContainer style={styles.vendorAddress} text="|" />
                <TextContainer
                  style={styles.vendorAddress}
                  text={vendorData?.time}
                />
              </View>
            </View>
            <View>
           
              <TextContainer
                style={styles.openCLose}
                text={vendorData?.isOpen ? 'Open' : 'Closed'}
              />
            </View>
          </View>
          
          <FlatList
            style={{ top: -32 }}
            showsVerticalScrollIndicator={false}
            data={displayedItems}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            onEndReached={loadMoreItems}
            onEndReachedThreshold={0.5}
            ListFooterComponent={renderFooter}
          />
        </WrapperContainer>
      </ScrollView>
      <CartSummary onPress={() => navigation.navigate('CartScreen')} />
    </View>
  );
};

export default ProductList;
