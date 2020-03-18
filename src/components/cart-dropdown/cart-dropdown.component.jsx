import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import  {selectCartItems} from "../../redux/cart/cart.selector";


import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems,dispatch,history}) => (
  <div className = "cart-dropdown" >
      <div className = "cart-items">
        {
          cartItems.length?
          cartItems.map( item =>  <CartItem key = {item.id} {...item}/>):
          <span className = "empty-cart">Your cart is empty</span>
        }
      </div>
      <CustomButton onClick = {() => {dispatch(toggleCartHidden()); history.push("/checkout");}}>GO TO CHECKOUT</CustomButton>
  </div>    
);

const mapStateToProps = createStructuredSelector({
  cartItems : selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
