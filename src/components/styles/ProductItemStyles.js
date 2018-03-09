import { StyleSheet } from 'react-native';

import { colors } from 'src/theme';

const styles = StyleSheet.create({
  compact: {
    marginHorizontal: 15,
    elevation: 2,
    borderRadius: 5,
    marginTop: 15,
    overflow: 'hidden',
    flexDirection: 'row',
    backgroundColor: colors.secondary.text,
    
    // iOS Drop Shadow
    borderWidth: 0,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 3,
    shadowOpacity: 0.4,
  },
  compactImageContainer: {
    flex: 1.1,
  },
  compactImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  compactContent: {
    flex: 1.9,
    padding: 8,
  },
  compactTitle: {
    fontSize: 15,
    marginRight: 20,
    fontWeight: '900',
    color: colors.primary.main,
    backgroundColor: 'transparent',
  },
  compactPrice: {
    marginTop: 4,
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  compactPriceText: {
    fontSize: 18,
    color: colors.lighterText,
    backgroundColor: 'transparent',
  },
  compactCategory: {
    marginTop: 10,
    fontSize: 14,
    color: colors.secondary.main,
    backgroundColor: 'transparent',
  },
  
  quickView: {
    padding: 6,
    position: 'absolute',
    bottom: 6,
    right: 6,
    borderRadius: 5,
    backgroundColor: colors.secondary.main,
  },
  quickViewText: {
    fontSize: 12,
    color: colors.secondary.text,
  },
  
  productContainer: {
    width: '94%',
    height: '65%',
    alignSelf: 'center',
    borderRadius: 6,
    padding: 15,
    alignItems: 'center',
    backgroundColor: colors.secondary.lighter,
  },
  productImage: {
    width: '100%',
    height: '55%',
    borderRadius: 6,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  productName: {
    fontSize: 20,
    marginTop: 20,
  },
  productCategory: {
    fontSize: 12,
    marginTop: 10,
  },
  productPrice: {
    fontSize: 15,
    marginTop: 10,
  },
  productBtn: {
    marginTop: 20,
    alignSelf: 'center',
  },
  closeModal: {
    position: 'absolute',
    top: -25,
    right: -18,
  },
  closeModalText: {
    fontWeight: '900',
  },
});

export default styles;
