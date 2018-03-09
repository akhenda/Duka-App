import { StyleSheet } from 'react-native';

import { colors, metrics } from 'src/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary.steel,
  },
  content: {
    flex: 1,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: metrics.screenHeight - 80,
    borderRadius: 5,
    paddingHorizontal: 15,
    backgroundColor: colors.primary.text,
  },
  empty: {
    textAlign: 'center',
  },
  cart: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    backgroundColor: colors.secondary.main,
  },
  cartQuantity: {
    position: 'absolute',
    top: 10,
    left: 30,
    padding: 4,
    borderRadius: 50,
    backgroundColor: colors.secondary.text,
  },
  cartQuantityText: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.secondary.dark,
    backgroundColor: colors.secondary.text,
  },
  cartIcon: {
    fontSize: 40,
    color: colors.primary.lighter,
  },
  cartText: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  cartTextTitle: {
    fontSize: 20,
    marginRight: 12,
    color: colors.primary.lighter,
  },
  cartTextAmount: {
    fontSize: 27,
    color: colors.secondary.lighter,
  },
  cartClear: {
    marginTop: 12,
  },
  cartClearText: {
    padding: 16,
    fontWeight: '900',
    color: colors.secondary.text,
  },
});

export default styles;
