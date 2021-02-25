export const paginate = (products, page) => {
  const productPerPage = 4;
  return products.slice((page - 1) * productPerPage, page * productPerPage);
};

export const addItemToCart = (cartItems, item) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem._id.toString() === item._id.toString()
  );
  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem._id === item._id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...item, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, item) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem._id.toString() === item._id.toString()
  );
  if (!existingItem) {
    return cartItems;
  }
  if (existingItem.quantity <= 1) {
    return cartItems.filter(
      (cartItem) => cartItem._id.toString() !== item._id.toString()
    );
  }
  return cartItems.map((cartItem) =>
    cartItem._id === item._id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const deleteItemFromCart = (cartItems, item) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem._id.toString() === item._id.toString()
  );
  if (!existingItem) {
    return cartItems;
  }
  return cartItems.filter(
    (cartItem) => cartItem._id.toString() !== item._id.toString()
  );
};

export const getTotalItem = (cartItems) => {
  return cartItems.reduce(
    (totalItem, cartItem) => totalItem + cartItem.quantity,
    0
  );
};

export const getTotalPrice = (cartItems) => {
  return cartItems.reduce(
    (totalPrice, cartItem) => totalPrice + cartItem.quantity * cartItem.price,
    0
  );
};
