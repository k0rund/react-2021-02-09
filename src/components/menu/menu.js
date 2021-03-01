import React from 'react';
import PropTypes from 'prop-types';

import Product from '../products/product';
import Basket from '../basket';

import styles from './menu.module.css';
import { connect } from 'react-redux';
import { loadProducts } from '../../redux/actions';
import Products from '../products';

class Menu extends React.Component {
  static propTypes = {
    menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  };

  state = { error: null };

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const { menu, restaurantId } = this.props;

    if (this.state.error) {
      return <p>Сейчас меню этого ресторана недоступно :(</p>;
    }

    return (
      <div className={styles.menu}>
        <div>
          <Products menu={menu} restaurantId={restaurantId}/>
          {/*{menu.map((id) => (*/}
          {/*  <Product key={id} id={id} />*/}
          {/*))}*/}
        </div>
        <div>
          <Basket />
        </div>
      </div>
    );
  }
}

export default Menu;
