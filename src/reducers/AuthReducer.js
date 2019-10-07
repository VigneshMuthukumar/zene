import * as actions from '../helpers/actionTypes';
import isEmpty from 'lodash/isEmpty';

const initialState = {
  isAuthenticated: localStorage.getItem('access_token') ? true : false,
  user: {}
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case actions.LOGIN:
      return {
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case actions.LOGOUT:
      return {
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    default: 
      return state;
  }
}