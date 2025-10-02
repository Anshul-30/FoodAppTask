import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import { moderateScale, scale, verticalScale } from '../../styles/scaling';

export const styles = StyleSheet.create({
  vendorBanner: {
    width: '100%',
    height: verticalScale(130),
  },
  headerContainer: {
    position: 'absolute',
    top: moderateScale(24),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(12),
    width: '100%',
  },
  iconBackground: {
    backgroundColor: colors.whiteOpacity50,
    borderRadius: moderateScale(8),
    padding: moderateScale(6),
    alignItems: 'center',
    justifyContent: 'center',
  },
  righIcon: {
    tintColor: colors.white,
    height: moderateScale(22),
    width: moderateScale(22),
    resizeMode: 'contain',
    zIndex: 1,
  },
  vendorDetailContainer: {
    backgroundColor: colors.white,
    borderRadius: moderateScale(12),
    top: -40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: moderateScale(18),
    elevation: 10,
    borderWidth: 1,
    borderColor: colors.borderLine,
  },
  vendorName: {
    fontWeight: '700',
    fontSize: scale(18),
  },
  vendorAddress: {
    fontWeight: '400',
    fontSize: scale(12),
    color: colors.textGrey,
    marginLeft: moderateScale(4),
  },

 
  openCLose: {
    textAlign: 'center',
    color: colors.green,
    fontWeight: '700',
  },
  locIcon: {
    width: moderateScale(12),
    height: moderateScale(12),
    resizeMode: 'contain',
    tintColor: colors.textGrey,
  },
  sectionHeader: {
    fontSize: scale(18),
    fontWeight: 'bold',
    marginVertical: verticalScale(8),
    color: colors.textGrey,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: moderateScale(10),
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLine,
  },
  rightColumn: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: moderateScale(6),
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: moderateScale(72),
    height: moderateScale(72),
    borderRadius: scale(8),
  },
  vegIndicatorContainer: {
    position: 'absolute',
    top: moderateScale(6),
    left: moderateScale(6),
  },
  vegIndicator: {
    width: moderateScale(16),
    height: moderateScale(16),
    borderRadius: moderateScale(2),
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  vegDot: {
    width: moderateScale(10),
    height: moderateScale(10),
    borderRadius: moderateScale(5),
  },
  details: {
    flex: 1,
    marginHorizontal: moderateScale(10),
  },
  vegBadgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateScale(4),
    gap: moderateScale(6),
  },
  vegBadgeBox: {
    width: moderateScale(16),
    height: moderateScale(16),
    borderRadius: moderateScale(2),
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  vegBadgeDot: {
    width: moderateScale(10),
    height: moderateScale(10),
    borderRadius: moderateScale(5),
  },
  vegBadgeText: {
    fontSize: scale(10),
    color: colors.textGrey,
    fontWeight: '500',
  },
  name: {
    fontSize: scale(16),
    flex: 1,
    fontWeight: '600',
    color: colors.black,
  },
  description: {
    fontSize: scale(12),
    color: colors.textGrey,
    lineHeight: scale(16),
    flex: 1,
    marginBottom: moderateScale(6),
  },
  priceRatingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(8),
  },
   
  price: {
    fontSize: scale(16),
    fontWeight: '700',
    color: colors.themeColor,
  },
 
  addButton: {
    backgroundColor: colors.themeColor,
    borderRadius: scale(25),
    alignItems: 'center',
    justifyContent: 'center',
    height: moderateScale(30),
    width: moderateScale(72),
  },
  addText: {
    fontSize: scale(16),
    color: colors.white,
    fontWeight: '700',
  },
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.themeColor,
    borderRadius: scale(20),
    paddingHorizontal: moderateScale(6),
    paddingVertical: moderateScale(2),
  },
  counterButton: {},
  counterText: {
    fontSize: scale(20),
    color: colors.white,
    fontWeight: '700',
    paddingHorizontal: moderateScale(6),
  },
  counterValue: {
    fontSize: scale(14),
    color: colors.white,
    fontWeight: 'bold',
  },
  outOfStock: {
    color: colors.textGrey,
    fontSize: scale(12),
  },
  loadingFooter: {
    paddingVertical: moderateScale(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    marginTop: moderateScale(8),
    fontSize: scale(14),
    color: colors.textGrey,
  },
});
