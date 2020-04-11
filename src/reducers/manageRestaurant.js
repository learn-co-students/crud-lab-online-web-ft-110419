import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state={restaurants: [], reviews: []}, action) {
	switch (action.type) {
		case 'ADD_RESTAURANT': 
			action.restaurant.id = cuid()
			return {...state, restaurants: [...state.restaurants, action.restaurant]}
		case 'DELETE_RESTAURANT':
			return {...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)}
		case 'ADD_REVIEW':
			action.review.id = cuid()
			return {...state, reviews: [...state.reviews, action.review]}
		case 'DELETE_REVIEW':
			let newReviews = state.reviews.filter(review => review.id !== action.id)
			return {...state, reviews: newReviews}
		default:
			return state
	}
}