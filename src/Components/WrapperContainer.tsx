import React, { FC, ReactNode, useRef } from 'react';
import {
  ActivityIndicator,
  Modal,
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';
import colors from '../styles/colors';
import { moderateScale } from '../styles/scaling';
interface Proptypes {
  children: ReactNode;
  isLoading?: boolean;
  bgColor?: string;
  statusBarColor?: string;
  barStyle?: string;
  withModal?: boolean;
  isSafeArea?: boolean;
  colorsArray?: any;
  mainStyle?: any
}

const WrapperContainer: FC<Proptypes> = ({
  colorsArray = [colors.white, colors.white],
  children,
  isLoading = false,
  bgColor = colors.white,
  statusBarColor = colors.white,
  barStyle = 'dark-content',
  withModal = false,
  isSafeArea = true,
  mainStyle
}: Proptypes) => {
  const keyboardDismiss = useRef(null);
  if (isSafeArea) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: statusBarColor,
        }}>
        <StatusBar
          backgroundColor={statusBarColor}
          barStyle={barStyle as any}
        />
        <View ref={keyboardDismiss} style={[{ flex: 1, marginHorizontal: moderateScale(16) }, mainStyle]}>
          {children}
        </View>
        <Modal transparent visible={isLoading}>
          <View
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0,0,0,0.3)',
            }}>
            <ActivityIndicator size={40} color={colors.themeColor} />
          </View>
        </Modal>
      </SafeAreaView>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: statusBarColor,
      }}>
      <StatusBar backgroundColor={statusBarColor} barStyle={barStyle as any} />
      <View style={{ backgroundColor: 'transparent', flex: 1, marginHorizontal: moderateScale(16) }}>
        {children}
      </View>
      <Modal transparent visible={isLoading}>
        <View
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.3)',
          }}>
          <ActivityIndicator size={25} color={colors.themeColor} />
        </View>
      </Modal>
    </View>
  );
};

export default React.memo(WrapperContainer);
