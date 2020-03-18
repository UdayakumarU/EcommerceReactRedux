import CART_CONST from "./cart.const";

export const toggleCartHidden = () => ({
  type: CART_CONST.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: CART_CONST.ADD_ITEM,
  payload: item
});

export const removeItem = item => ({
  type: CART_CONST.REMOVE_ITEM,
  payload: item
});

export const clearItemFromCart = item => ({
  type: CART_CONST.CLEAR_ITEM_FROM_CART,
  payload: item
});