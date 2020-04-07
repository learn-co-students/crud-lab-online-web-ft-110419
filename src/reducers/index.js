import { combineReducers } from 'redux';
import {restaurants} from './manageRestaurant';


 combineReducers({
  restaurants: restaurants,
 
});
const reducer = combineReducers
export default reducer