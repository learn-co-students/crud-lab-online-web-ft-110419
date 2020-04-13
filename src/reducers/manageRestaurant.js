
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [], reviews: [] }, action) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      console.log(action)
      const newRestaurant = {
        id: cuidFn(),
        text: action.text
      }
      return { ...state, restaurants: [...state.restaurants, newRestaurant] }
    case "DELETE_RESTAURANT":
      return { ...state, restaurants: state.restaurants.filter(r => r.id !== action.payload) }
    case "ADD_REVIEW":
      const newReview = {
        restaurantId: action.review.restaurantId,
        text: action.review.text,
        id: cuidFn()
      }

      return { ...state, reviews: [...state.reviews, newReview] }
    case "DELETE_REVIEW":
      return { ...state, reviews: state.reviews.filter(r => r.id !== action.id) }
    default:
      return state;
  }
}
