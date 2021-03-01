import React, { useEffect, useRef } from 'react';
import Loader from '../loader';
import Product from './product';
import { connect } from 'react-redux';
import {
  productsListSelector, productsLoadedSelector, productsLoadingSelector
} from '../../redux/selectors';
import { loadProducts } from '../../redux/actions';

const Products = ({menu, restaurantId, loading, loaded, loadProducts, products}) => {
  const prevCountRef = useRef();

  useEffect(() => {
    if (!loading && !loaded) loadProducts();
  }, [loading, loaded, loadProducts, restaurantId]);

  if (loading) return <Loader />;
  if (!loaded) return 'Нет данных :(';

  return (
    <div>
      {menu.map((id) => (
        <Product key={id} id={id} product={products.id}/>
      ))}
    </div>
  )
};

const mapDispatchToProps = (dispatch, props) => ({
  loadProducts: () => dispatch(loadProducts(props.restaurantId))
});


export default connect(
  (state) => ({
    products: productsListSelector(state),
    loading: productsLoadingSelector(state),
    loaded: productsLoadedSelector(state),
  }),
  mapDispatchToProps
)(Products);