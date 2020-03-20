import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: []
}, action) {
  console.log(state.restaurants)
  switch (action.type) {
    case 'ADD_RESTAURANT':
    console.log('Adding', action.text)

    const restaurant = {
      id: cuidFn(),
      text: action.text
    }

    return {
      ...state, restaurants: [...state.restaurants, restaurant]
    }

    case 'DELETE_RESTAURANT':
      console.log('Deleting...', action.id)

      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
      return {
        ...state, restaurants
      }

    case 'ADD_REVIEW':
    console.log('Adding review...', action.review.text)

    const review = {
      id: cuidFn(),
      restaurantId: action.review.restaurantId,
      text: action.review.text
    };

    return {
      ...state, reviews: [...state.reviews, review]
    }

    case 'DELETE_REVIEW':
    console.log('Deleting review...')
    const reviews = state.reviews.filter(review => review.id !== action.id)
    return {
      ...state, reviews
    }

    default:
      return state;
  }
}
