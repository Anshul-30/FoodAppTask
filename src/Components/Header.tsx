import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import {
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  View
} from 'react-native';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import TextContainer from './TextContainer';
import { moderateScale, scale, verticalScale } from '../styles/scaling';
interface Proptypes {
  cetnerTitle?: String | undefined;
  leftIcon?: String;
  OnPressLeft?: () => void;
  isRightIcon?: Boolean;
  RightIcon?: String;
  OnPressRight?: () => void;
  isCustomLeft?: Boolean;
  isLeft?: Boolean;
  rightImgStyle?: object;
  containerStyle?: any;
  centerTxtStyle?: any;
  leftImgStyle?: any
}
const Header: FC<Proptypes> = ({
  cetnerTitle,
  leftIcon,
  OnPressLeft,
  isRightIcon,
  RightIcon,
  OnPressRight,
  isCustomLeft,
  isLeft,
  rightImgStyle,
  containerStyle,
  centerTxtStyle,
  leftImgStyle
}: Proptypes) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: verticalScale(12),
        ...containerStyle
      }}>
      <View
        style={{ flex: 0.1, alignItems: 'center', justifyContent: 'center' }}>
        {!!isLeft && (
          <>
            {!!isCustomLeft ? (
              <TouchableOpacity
                style={{
                  backgroundColor: colors.blackOpacity30,
                  borderRadius: moderateScale(8),
                  padding:moderateScale(4)
                }}
                onPress={OnPressLeft}>
                <Image style={{height:moderateScale(22),width:moderateScale(22),...leftImgStyle}} source={leftIcon as ImageSourcePropType || imagePath.backIcon} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={{
                backgroundColor: colors.blackOpacity30,
                borderRadius: moderateScale(8),
                padding:moderateScale(4)
              }} hitSlop={{
                top: 10,
                right: 10,
                left: 10,
                bottom: 5,
              }} onPress={() => navigation.goBack()}>
                <Image style={{height:moderateScale(22),width:moderateScale(22),resizeMode:'contain',...leftImgStyle}} source={imagePath.backIcon} />
              </TouchableOpacity>
            )}
          </>
        )}
      </View>
      <TextContainer
        text={cetnerTitle as any}
        style={{
          flex: 1,
          textAlign: 'center',
          fontWeight: '700',
          fontSize: scale(20),
          color: colors.black,
          textTransform: 'capitalize',
          ...centerTxtStyle
        }} />
      <View style={{ flex: 0.1 }} >
        {!!isRightIcon && (
          <TouchableOpacity onPress={OnPressRight}>
            <Image style={rightImgStyle} source={RightIcon as ImageSourcePropType} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;
