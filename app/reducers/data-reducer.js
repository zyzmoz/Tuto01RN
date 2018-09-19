import {
  DATA_AVAILABLE
} from '../actions';
import {createReducer} from './createReducer';

const initialState = {loading: true, data: []};

const dataReducer = (state, action) => {  
  return {...state, data: action.data, loading: false};
}

export default createReducer(initialState, {
  [DATA_AVAILABLE]: dataReducer
})