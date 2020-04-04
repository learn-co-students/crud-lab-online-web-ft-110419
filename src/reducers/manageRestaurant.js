
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: []
}, action) {
  let restaurant

  switch(action.type) {

    case "ADD_RESTAURANT":
      restaurant = {
        id: cuid(),
        text: action.name,
        reviews: []
      }
      return {...state, restaurants: [...state.restaurants, restaurant]}

    case "DELETE_RESTAURANT":

      return {...state, restaurants: state.restaurants.filter(restaurant=> restaurant.id !== action.id)}

    case "ADD_REVIEW":
      const review = {
        id: cuid(),
        text: action.text,
        restaurantId: action.restaurantId
      }
      return {
        ...state,
        restaurants: state.restaurants.map(restaurant=> {
          if (restaurant.id === action.restaurantId) {
            return {...restaurant, reviews: [...restaurant.reviews, review]}
          } else {
            return restaurant
          }
        })
      }

    case "DELETE_REVIEW":
      console.log(action.review)
      let {id, restaurantId} = action.review
      return {
        ...state,
        restaurants: state.restaurants.map(restaurant=> {
          if (restaurant.id === restaurantId) {
            return {...restaurant, reviews: restaurant.reviews.filter(review=> review.id !== id)}
          } else {
            return restaurant
          }
        })
      }

    default:
      return state
  }
}
