
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
    switch(action.type) {
        case 'ADD_RESTAURANT':
            
              const restaurant = {
                  id: cuid(),
                  text: action.text
              }
              return { ...state, restaurants: [...state.restaurants, restaurant], reviews: [...state.reviews] }

        case 'DELETE_RESTAURANT':

            return {...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id), reviews: [...state.reviews]}

        case 'ADD_REVIEW':

            const review = {
                id: cuid(),
                text: action.text,
                restaurantId: action.restaurantId
            }

            return {...state, restaurants: [...state.restaurants], reviews: [...state.reviews, review]}

        case 'DELETE_REVIEW':

            return {...state, restaurants: [...state.restaurants], reviews: state.reviews.filter(review => review.id !== action.reviewId)}

        default:
            return state
    }
}
