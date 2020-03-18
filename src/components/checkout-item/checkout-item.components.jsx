import React from "react";
import { connect } from "react-redux";

import { clearItemFromCart,addItem, removeItem } from "../../redux/cart/cart.action";

import "./checkout-item.styles.scss";

const CheckoutItem = ({item, clearItemFromCart, addItem,removeItem}) =>{
    const {imageUrl,name,price,quantity} = item;
    return(
        <div className = "checkout-item">
        <span className="image-container "><img src={imageUrl} alt="item"/></span>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrow" onClick = {() => removeItem(item)}>&#10094;</div>
            <span className="value">{quantity}</span>
            <div className="arrow" onClick={() => addItem(item)}>&#10095;</div>
        </span>
        <span className="price">$ {price}</span>
        <span className="remove-button" onClick={() => clearItemFromCart(item)}>&#10005;</span>
    </div>
)}
const mapDipatchToProps = dispatch =>({
    clearItemFromCart : item => dispatch(clearItemFromCart(item)),
    addItem : item => dispatch(addItem(item)),
    removeItem : item => dispatch(removeItem(item))
});

export default connect(null,mapDipatchToProps)(CheckoutItem);