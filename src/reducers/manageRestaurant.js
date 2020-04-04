import cuid from "cuid";
export const cuidFn = cuid;

const initState = {
  restaurants: [],
  reviews: [],
};

export default function manageRestaurants(state = initState, action) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      console.log("Action: ", action);
      const restaurant = { id: cuidFn(), text: action.text };
      return {
        ...state,
        restaurants: [...state.restaurants, restaurant],
      };

    case "DELETE_RESTAURANT":
      const restaurants = state.restaurants.filter((r) => r.id !== action.id);
      return {
        ...state,
        restaurants,
      };

    case "ADD_REVIEW":
      console.log("Action: ", action);
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
      return {
        ...state,
        reviews: state.reviews.filter((review) => review.id !== action.id),
      };

    case "UPDATE_REVIEW":
      const reviews = state.reviews.map((review) => {
        if (review.id === action.review.id) {
          review.text = action.review.text;
        }
        return review;
      });

      return {
        ...state,
        reviews: reviews,
      };

    default:
      return state;
  }
}
