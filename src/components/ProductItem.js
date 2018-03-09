import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Image } from 'react-native';
import { View, Text, Button } from 'native-base';
import Modal from 'react-native-modal';

import styles from './styles/ProductItemStyles';


/* eslint-disable camelcase */
class ProductItem extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isModalVisible: false,
      selectedItem: null,
    };
  }
  
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }

  renderProductModal(item, image) {
    return (
      <Modal isVisible={this.state.isModalVisible} style={styles.productModal}>
        <View style={styles.productContainer}>
          <Image style={styles.productImage} source={{ uri: image }} />
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productCategory}>Category: {item.category}</Text>
          <Text style={styles.productPrice}>Ksh {item.price}</Text>
          <Button
            primary
            bordered
            style={styles.productBtn}
            onPress={() => this.props.addToCart(item.price)}
          >
            <Text style={styles.productBtnText}>Add to Cart</Text>
          </Button>
          <Button danger rounded style={styles.closeModal} onPress={this.toggleModal}>
            <Text style={styles.closeModalText}>X</Text>
          </Button>
        </View>
      </Modal>
    );
  } 
  
  render() {
    let secureImage = 'https://dummyimage.com/418x365.jpg/cc0000/fffff';
    const { item } = this.props;
    const {
      name, price, category, image,
    } = item;
    
    secureImage = `https${image.slice(4, -1)}`;

    return (
      <View style={styles.compact} onPress={() => {}}>
        <View style={styles.compactImageContainer}>
          <Image style={styles.compactImage} source={{ uri: secureImage }} />
        </View>
        <View style={styles.compactContent}>
          <Text style={styles.compactTitle} numberOfLines={1}>{name}</Text>
          <View style={styles.compactPrice}>
            <Text style={styles.compactPriceText}>Ksh {price}</Text>
          </View>
          <Text style={styles.compactCategory} numberOfLines={2}>{category}</Text>
        </View>
        <TouchableOpacity style={styles.quickView} onPress={this.toggleModal}>
          <Text style={styles.quickViewText}>Quick View</Text>
        </TouchableOpacity>
        {this.renderProductModal(item, secureImage)}
      </View>
    );
  }
}

ProductItem.propTypes = {
  item: PropTypes.object,
  addToCart: PropTypes.func,
  location: PropTypes.object,
  isFavourite: PropTypes.bool,
  onAddFavourite: PropTypes.func,
  onRemoveFavourite: PropTypes.func,
};

ProductItem.defaultProps = {};

export default ProductItem;
