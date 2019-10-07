import { combineReducers } from 'redux';
import SearchReducer from './SearchReducer';
import TrackReducer from './TrackReducer';
import AuthReducer from './AuthReducer'
const appReducer =  combineReducers({
    SearchReducer,
    TrackReducer,
    AuthReducer
})

const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT') {
      state = undefined
    }
  
    return appReducer(state, action)
  }

  export default rootReducer;