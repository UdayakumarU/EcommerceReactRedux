import CART_CONST from "./cart.const";
import { addItemToCart,removeItemFromCart } from "./cart.utils";
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE,action) =>{
    switch (action.type) {
        case CART_CONST.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden : !state.hidden
            }
        case CART_CONST.ADD_ITEM:
            return {
                ...state,
                cartItems : addItemToCart(state.cartItems, action.payload)
            }
        case CART_CONST.REMOVE_ITEM:
            return {
                ...state,
                cartItems : removeItemFromCart(state.cartItems, action.payload)
            }
        case CART_CONST.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems : state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }            
        default:
            return state;
    }
}

export default cartReducer;