import { StyleSheet, Platform } from 'react-native';

import { colors, metrics } from 'src/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary.steel,
  },
  content: {
    flex: 1,
    // marginTop: Platform.OS === 'ios' ? 65 : 80,
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
  cartIcon: {
    fontSize: 35,
    color: colors.primary.light,
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
