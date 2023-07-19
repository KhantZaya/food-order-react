import CartContext from "./cart-context";

const CartContextProvider = (props) => {
  const addCartItem = (item) => {};
  const removeCartItem = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 5,
    addItem: addCartItem,
    removeItem: removeCartItem,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
