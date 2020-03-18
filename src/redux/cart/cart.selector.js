import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((totalQuantity, item) => totalQuantity + item.quantity, 0)
);

export const selectTotal = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((totalPrice,item) => totalPrice + item.price * item.quantity, 0)
)
