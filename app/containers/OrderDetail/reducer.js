import { fromJS } from 'immutable';

/*
 * import contants
 */
import {
  SET_TICKET_TYPE,
  UPDATE_ORDER,
  SET_ORDER,
  IS_UPDATING_ORDER,
  UPDATE_ORDER_STATUS,
  RESET_STATE,
  SET_CONFIRM_PAYMENT,
  IS_CONFIRMING_PAYMENT,
  SET_PAYMENT_PROOF
} from './constants';

/*
 * initial state of reducers
 */
const initialState = fromJS({
  ticketTypes: [],
  order: {},
  isUpdatingOrder: false,
  updateOrderStatus: '',
  isConfirmingPayment: false,
  imageUrl: ''
});

function orderDetailReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TICKET_TYPE:
      return state.set('ticketTypes', action.data);
    case SET_ORDER:
      return state.set('order', fromJS(action.data));
    case UPDATE_ORDER:
      return state.setIn([ 'order', 'data', action.id ], fromJS(action.payload));
    case IS_UPDATING_ORDER:
      return state.set('isUpdatingOrder', action.status);
    case UPDATE_ORDER_STATUS:
      return state.set('updateOrderStatus', action.status);
    case SET_CONFIRM_PAYMENT:
      return state.setIn(
        [ 'order', 0, 'payment', 'transaction_status' ],
        action.payload.transaction_status
      );
    case IS_CONFIRMING_PAYMENT:
      return state.set('isConfirmingPayment', action.status);
    case SET_PAYMENT_PROOF:
      return state.set('imageUrl', action.value);
    case RESET_STATE:
      return initialState;
    default:
      return state;
  }
}

/*
 * export the reducer
 */
export default orderDetailReducer;
