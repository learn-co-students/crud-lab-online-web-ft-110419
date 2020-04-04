import cuid from "cuid";
export const cuidFn = cuid;

const initState = {
  restaurants: [],
  reviews: []
};

export default function manageRestaurants(state = initState, action) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      return {
        ...state,
        restaurants: [
          ...state.restaurants,
          { id: cuidFn(), text: action.restaurant.text }
        ]
      };

    case "DELETE_RESTAURANT":
      return {
        ...state,
        restaurants: state.restaurants.filter(r => r.id !== action.id)
      };

    case "ADD_REVIEW":
      return {
        ...state,
        reviews: [
          ...state.reviews,
          {
            text: action.review.text,
            restaurantId: action.review.restaurantId,
            id: cuidFn()
          }
        ]
      };

    case "DELETE_REVIEW":
      return {
        ...state,
        reviews: state.reviews.filter(review => review.id !== action.id)
      };

    default:
      return state;
  }
}
