import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Platform, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import colors from '../styles/colors';
import MainStack from './MainStack';
import navigationsStrings from '../constants/navigationsStrings';
import imagePath from '../constants/imagePath';
import CartScreen from '../Screens/CartScreen/CartScreen';
import { moderateScale, scale, verticalScale, width } from '../styles/scaling';
import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store';
const TabRoutes = () => {
  const Tab = createBottomTabNavigator();
  const cartCount = useSelector((state: RootState) =>
    Object.values(state.home.cartData).reduce(
      (acc, item) => acc + (item?.quantity || 0),
      0,
    ),
  );
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: {
          backgroundColor: colors.white,
          paddingBottom: verticalScale(Platform.OS == 'ios' ? 18 : 8),
          height: verticalScale(65),
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: ({ focused }: { focused: boolean }) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: moderateScale(4),
              }}
            >
              <FastImage
                style={{ width: moderateScale(20), height: verticalScale(20) }}
                resizeMode="contain"
                tintColor={focused ? colors.themeColor : colors.tabGrey}
                source={imagePath.ic_home}
              />
            </View>
          ),
          tabBarIcon: ({ focused }: { focused: boolean }) => {
            return (
              <View
                style={{
                  width: width / 3,
                  height: verticalScale(20),
                  borderTopWidth: 2,
                  borderColor: focused ? colors.themeColor : colors.borderLine,
                }}
              />
            );
          },
        }}
        component={MainStack}
        name={navigationsStrings.MainStack}
      />
      <Tab.Screen
        options={{
          tabBarLabel: ({ focused }) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: moderateScale(4),
              }}
            >
              <View style={{ position: 'relative' }}>
                <FastImage
                  style={{
                    width: moderateScale(20),
                    height: verticalScale(20),
                  }}
                  resizeMode="contain"
                  tintColor={focused ? colors.themeColor : colors.tabGrey}
                  source={imagePath.cart}
                />
                {!!cartCount && (
                  <View
                    style={{
                      position: 'absolute',
                      top: -verticalScale(8),
                      right: -moderateScale(10),
                      minWidth: moderateScale(16),
                      paddingHorizontal: moderateScale(4),
                      height: verticalScale(16),
                      borderRadius: moderateScale(8),
                      backgroundColor: colors.themeColor,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Text
                      style={{
                        color: colors.white,
                        fontSize: scale(10),
                        fontWeight: '600',
                      }}
                    >
                      {cartCount > 99 ? '99+' : String(cartCount)}
                    </Text>
                  </View>
                )}
              </View>
            </View>
          ),
          tabBarIcon: ({ focused }: { focused: boolean }) => {
            return (
              <View
                style={{
                  width: width / 3,
                  height: verticalScale(20),
                  borderTopWidth: 2,
                  borderColor: focused ? colors.themeColor : colors.borderLine,
                }}
              />
            );
          },
        }}
        component={CartScreen}
        name={navigationsStrings.CartScreen}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
