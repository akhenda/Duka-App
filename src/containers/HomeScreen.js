import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, FlatList, ActivityIndicator } from 'react-native';
import { Container, Icon, Button } from 'native-base';
import { connect } from 'react-redux';

import { getProducts, addToCart, clearProducts } from 'src/state/actions/shop';
import ProductItem from 'src/components/ProductItem';
import LoadingIndicator from 'src/components/LoadingIndicator';
import styles from './styles/HomeScreenStyles';


class HomeScreen extends Component {  
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      page: 1,
      totalPages: 1,
      products: [],
      empty: false,
      refreshing: false,
      error: {},
    };
  }
  
  componentDidMount() {
    this.fetchProducts();
    
    if (this.props) console.tron.log(this.props);
  }
  
  componentWillReceiveProps(nextProps) {
    const { page } = this.state;

    this.setState((prevState) => {
      return {
        loading: false,
        refreshing: false,
        totalPages: Number(nextProps.totalPages),
        products: page === 1 ? nextProps.products : [...prevState.products, ...nextProps.products],
      };
    });
  }
  
  addToCart = (price) => {
    this.props.addToCart(price);
  }

  fetchProducts = () => {
    const { token } = this.props;

    this.setState({ loading: true });
    this.props.getProducts(token, this.state.page);
  }

  handleRefresh = () => {
    this.setState({
      page: 1,
      refreshing: true,
    }, () => {
      this.fetchProducts();
    });
  }

  handleLoadMore() {
    if (this.state.page < this.state.totalPages) {
      this.setState((prevState) => {
        return { loading: true, page: prevState.page + 1 };
      }, () => {
        this.fetchProducts();
      });
    }
  }

  renderFooter() {
    return (
      this.state.loading &&
      <View style={{ paddingVertical: 20 }}>
        <ActivityIndicator animating size="large" />
      </View>
    );
  }

  render() {
    const emptyHeight = '100%';
    const { loading, refreshing, products } = this.state;
    const empty = products.length > 0;

    if (loading && products.length === 0) return <LoadingIndicator />;

    /* eslint-disable no-underscore-dangle */
    return (
      <Container style={styles.container}>
        <View style={[styles.content, empty ? { height: emptyHeight } : null]}>
          {empty
            ? <FlatList
                data={products}
                keyExtractor={item => item._id}
                renderItem={({ item }) => {
                  return (
                    <ProductItem item={item} addToCart={this.addToCart} />
                  );
                }}
                style={styles.listing}
                refreshing={refreshing}
                ListFooterComponent={() => this.renderFooter()}
                onRefresh={this.handleRefresh}
                onEndReached={() => this.handleLoadMore()}
                onEndReachedThreshold={0.5}
              />
            : <View style={styles.emptyContainer}>
                <Text style={styles.empty}>
                  {'No Products found.\n\n¯\\_(ツ)_/¯\n\nTry reloading the app.'}
                </Text>
              </View>
          }
          <View style={styles.cart}>
            <Icon name="cart" style={styles.cartIcon} />
            <View style={styles.cartText}>
              <Text style={styles.cartTextTitle}>Total:</Text>
              <Text style={styles.cartTextAmount}>Ksh {this.props.cartTotal}</Text>
            </View>
            <Button
              danger
              style={styles.cartClear}
              onPress={() => this.props.clearProducts()}
            >
              <Text style={styles.cartClearText}>X</Text>
            </Button>
          </View>
        </View>
      </Container>
    );
  }
}

HomeScreen.propTypes = {
  user: PropTypes.object,
  error: PropTypes.object,
  token: PropTypes.string,
  addToCart: PropTypes.func,
  products: PropTypes.array,
  getProducts: PropTypes.func,
  cartTotal: PropTypes.number,
  totalPages: PropTypes.number,
  clearProducts: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    token: state.auth.token,
    error: state.shop.error,
    cartTotal: state.shop.cartTotal,
    favourites: state.app.favourites,
    totalPages: state.shop.totalPages,
    products: state.shop.products.data,
  };
};

export default connect(mapStateToProps, { getProducts, addToCart, clearProducts })(HomeScreen);
