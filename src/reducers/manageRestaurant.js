
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
    restaurants: [],
    reviews: []
}, action) {
    switch (action.type) {
        case "ADD_RESTAURANT":
            const newRes = {
                id: cuidFn(),
                text: action.text
            }
            return {
                ...state, restaurants: [...state.restaurants, newRes]
            }
        case "DELETE_RESTAURANT":
            const res = state.restaurants.filter(re => re.id !== action.id)
            return {
                ...state, restaurants: res
            }

        case "ADD_REVIEW":
            const newReview = {
                id: cuidFn(),
                rev: action.rev.text,
                restaurantId: action.rev.restaurantId
            }
            return {
                ...state, reviews: [...state.reviews, newReview]
            }

        case "DELETE_REVIEW":
            const revie = state.reviews.filter(review => review.id !== action.id)
            return {
                ...state, reviews: revie
            }
        default:
            return state
    }
}
