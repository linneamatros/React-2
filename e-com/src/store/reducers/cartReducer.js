import actiontypes from "./actiontypes";

const initState = {
  shoppingCart: [],
  totalCartQuantity: 0,
  totaltCartAmount: 0,
}


const cartReducer = (state = initState, action) => {
  switch (action.type) {

    case actiontypes().cart.add:
      let item = state.shoppingCart.findIndex(product => product._id === action.payload._id)
      item < 0
      ? state.shoppingCart = [...state.shoppingCart, {...action.payload, quantity: 1}]
      : state.shoppingCart[item].quantity += 1

      state.totalCartAmount = getTotalAmount(state.shoppingCart)
      state.totalCartQuantity = getTotalQuantity(state.shoppingCart)

      return state

      case actiontypes().cart.sub:
      
        action.payload.quantity === 1
        ? state.shoppingCart = state.shoppingCart.filter(product => product.id !== action.payload.id)
        : action.payload.quantity -= 1
  
        state.totalCartAmount = getTotalAmount(state.shoppingCart)
        state.totalCartQuantity = getTotalQuantity(state.shoppingCart)
  
        return state
  
      case actiontypes().cart.delete:
        state.shoppingCart = state.shoppingCart.filter(product => product.id !== action.payload)
        state.totalCartAmount = getTotalAmount(state.shoppingCart)
        state.totalCartQuantity = getTotalQuantity(state.shoppingCart)
        return state;
  
  
      default:
        return state
    }
  }
  
  const getTotalQuantity = cart => {
    let total = 0;
    cart.forEach(product => {
      total += product.quantity
    })
    return total;
  }
  
  const getTotalAmount = cart => {
    let total = 0;
  
    cart.forEach(product => {
      total += product.price * product.quantity
    })
  
    return total;
  }
  
  export default cartReducer;