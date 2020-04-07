
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
    restaurants: [],
    review: []
}, action) {
    switch(action.type){
        case 'ADD_RESTAURANT':
            const restaurant = {id: cuid(), text: action.text}
            return {...state, restaurants: [...state.restaurants, restaurant]}
        case 'DELETE_RESTAURANT':
            return {restaurants: state.restaurants.filter(r => r.id !== action.id)};
        case 'ADD_REVIEW':
            console.log(action)
            return {
                ...state,
                reviews: [...state.reviews,
                {text: action.review.text, restaurantId: action.review.restaurantId, id: cuid()}
            ]};
        case 'DELETE_REVIEW':
            return {reviews: state.reviews.filter(r => r.id !== action.id)};
        
        default:
            return state;
    }
}
