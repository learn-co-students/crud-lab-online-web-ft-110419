
import cuid from 'cuid';
import Restaurants from '../components/restaurants/Restaurants';
export const cuidFn = cuid;

export default (state = {
restaurants: [],
reviews: []}
, action) =>{
    switch(action.type){
        case "ADD_RESTAURANT":
            let restaurant = {text: action.payload, id: cuid()}  
            return {...state,restaurants:[...state.restaurants, restaurant]}
        case "DELETE_RESTAURANT":
            const restaurants = state.restaurants.filter((u) => u.id !== action.payload);
      return { ...state, restaurants, };
      case "ADD_REVIEW":
      return {
        ...state,
        reviews: [
          ...state.reviews,
          {
            text: action.review.text,
            restaurantId: action.review.restaurantId,
            id: cuidFn(),
          },
        ],
      };
      case "DELETE_REVIEW":

          let reviews = state.reviews.filter(u => u.id !== action.id)
          return {...state,reviews,}
     case "UPDATE_REVIEW":
        // const reviews = state.reviews.map((review) => {
        // // if (review.id === action.review.id) {
        // //     review.text = action.review.text;
        // // }
        // return review;
        //  });
        // return {
        //       ...state,
        //       reviews: reviews,
        //     };
        default:
            return state
    }
}
