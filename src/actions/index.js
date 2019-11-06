export const setOrders = orders => ({
  type: 'SET_ORDERS',
  orders
});

export const addOrder = order => {
  return ({
    type: 'ADD_ORDER',
    order
  })
}