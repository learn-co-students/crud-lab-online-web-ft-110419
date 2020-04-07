
import cuid from 'cuid';
import Restaurants from '../components/restaurants/Restaurants';
export const cuidFn = cuid;

export default (state = {
restaurants: []}
, action) =>{
    switch(action.type){
        case "ADD_RESTAURANT":
            let restaurant = {text: action.payload, id: cuid()}  
            return {...state,restaurants:[...state.restaurants, restaurant]}
        case "DELETE_RESTAURANT":
            let x = state.restaurants.filter(u =>{
                
                u.id !== action.payload})
                console.log("hit",x)
                debugger
            return {...state, restaurants:[]}
        default:
            return state
    }
}
