import React from "react";
import {connect} from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item.components";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import { selectCartItems,selectTotal } from "../../redux/cart/cart.selector";

import "./checkout.styles.scss";

const CheckoutPage = ({cartItems,total}) =>( 
    <div className="checkout-page">
        <div className = "checkout-header">
            <div className = "header-block"><span>Product</span></div>
            <div className = "header-block"><span>Description</span></div>
            <div className = "header-block"><span>Quantity</span></div>
            <div className = "header-block"><span>Price</span></div>
            <div className = "header-block"><span>Remove</span></div>
        </div>
        { cartItems.map( item => <CheckoutItem key ={item.id} item = {item}/>) }
        { total?
            <div className="total">TOTAL: ${total}</div>:
            <span className="empty-checkout">You have nothing to checkout</span>
        }
        
        {
            total > 0 && 
            <div className="payment"> 
                <div className="test-warning">
                    *Please use the following test credit card for payments*<br/>
                    4242 4242 4242 4242 - Exp: 01/24 - CVV: 123
                </div>
                <div className="pay-now">
                    <StripeCheckoutButton price ={total}/> 
                </div>
            </div>
        }
        
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    total: selectTotal
})
export default connect(mapStateToProps)(CheckoutPage);