import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import { moderateScale, scale, verticalScale } from '../../styles/scaling';

const styles = StyleSheet.create({
  cartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateScale(12),
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLine,
  },
  cartHeaderText: {
    fontSize: scale(16),
    fontWeight: '600',
    color: colors.black,
  },
  cartAddressHeader: {
    fontSize: scale(16),
    fontWeight: '600',
    color: colors.black,
  },
  cartAddressDesc: {
    fontSize: scale(14),
    fontWeight: '400',
    color: colors.textGrey,
  },
  clearAllText: {
    fontSize: scale(14),
    fontWeight: '500',
    color: colors.errorRed,
  },
  topLable: {
    flexDirection: 'row',
    paddingHorizontal: moderateScale(12),
  },
  // List Container
  listContainer: {
    paddingBottom: moderateScale(12),
  },
  addressView: {
    marginHorizontal: moderateScale(10),
    marginVertical: moderateScale(4),
    // justifyContent: 'space-between',
  },
  // Cart Item Styles
  cartItemContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    marginVertical: moderateScale(8),
    borderRadius: moderateScale(12),
    padding: moderateScale(12),
    borderWidth: 2,
    borderColor: colors.borderLine,
  },
  itemImage: {
    width: moderateScale(80),
    height: moderateScale(80),
    borderRadius: moderateScale(8),
    marginRight: moderateScale(12),
  },
  itemDetails: {
    flex: 1,
    justifyContent: 'space-between',
  },
  itemName: {
    fontSize: scale(16),
    fontWeight: '600',
    color: colors.black,
    marginBottom: verticalScale(4),
  },
  itemInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: verticalScale(4),
  },
  itemPrice: {
    fontSize: scale(15),
    fontWeight: '700',
    color: colors.themeColor,
  },
 
  starIcon: {
    width: moderateScale(12),
    height: moderateScale(12),
    marginRight: moderateScale(4),
  },

  outOfStockText: {
    fontSize: scale(12),
    color: colors.errorRed,
    fontWeight: '500',
  },

  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: moderateScale(24),
    height: moderateScale(24),
    borderRadius: moderateScale(16),
    backgroundColor: colors.themeColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonText: {
    fontSize: scale(14),
    fontWeight: '600',
    color: colors.white,
  },
  quantityDisplay: {
    minWidth: moderateScale(40),
    height: moderateScale(32),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: moderateScale(8),
    backgroundColor: colors.inputBackground,
    borderRadius: moderateScale(6),
  },
  quantityText: {
    fontSize: scale(12),
    fontWeight: '600',
    color: colors.black,
  },
  disabledText: {
    opacity: 0.5,
  },

  removeButton: {
    width: moderateScale(24),
    height: moderateScale(24),
    borderRadius: moderateScale(12),
    backgroundColor: colors.errorRed,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: moderateScale(8),
  },
  removeButtonText: {
    fontSize: scale(16),
    fontWeight: '600',
    color: colors.white,
  },

  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: moderateScale(32),
  },
  emptyCartIcon: {
    width: moderateScale(120),
    height: moderateScale(120),
    opacity: 0.3,
    marginBottom: verticalScale(24),
  },
  emptyCartTitle: {
    fontSize: scale(24),
    fontWeight: '700',
    color: colors.black,
    marginBottom: verticalScale(8),
    textAlign: 'center',
  },
  emptyCartSubtitle: {
    fontSize: scale(16),
    color: colors.textGrey,
    textAlign: 'center',
    lineHeight: scale(22),
  },

  summaryContainer: {
    backgroundColor: colors.white,
    borderRadius: moderateScale(12),
    padding: moderateScale(16),
    borderWidth: 2,
    borderColor: colors.borderLine,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: verticalScale(8),
  },
  summaryLabel: {
    fontSize: scale(14),
    color: colors.textGrey,
  },
  summaryValue: {
    fontSize: scale(14),
    fontWeight: '600',
    color: colors.black,
  },
  totalRow: {
    borderTopWidth: 1,
    borderTopColor: colors.borderLine,
    marginTop: verticalScale(8),
    paddingTop: verticalScale(12),
  },
  totalLabel: {
    fontSize: scale(18),
    fontWeight: '700',
    color: colors.black,
  },
  totalValue: {
    fontSize: scale(18),
    fontWeight: '700',
    color: colors.themeColor,
  },

  checkoutButton: {
    backgroundColor: colors.themeColor,
    marginHorizontal: moderateScale(16),
    marginVertical: moderateScale(12),
    borderRadius: moderateScale(12),
    paddingVertical: moderateScale(12),
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkoutButtonText: {
    fontSize: scale(18),
    fontWeight: '700',
    color: colors.white,
  },
});

export default styles;
