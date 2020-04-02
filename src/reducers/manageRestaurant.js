
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
    switch (action.type) {
        case 'ADD_RESTAURANT':
            const restaurant = {
                id: cuid(),
                text: action.text
              }
            return { restaurants: state.restaurants.concat(restaurant), reviews: state.reviews }

        case 'DELETE_RESTAURANT':
            console.log("inside delete switch on reducer")
            // console.log(action)
            // return {restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id), reviews: state.reviews}
            return {restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id), reviews: state.reviews.filter(review => review.restaurantId !== action.id)}


        case 'ADD_REVIEW':
            // console.log("inside delete switch on reducer")
            // console.log(action)
            // console.log(state)
            const review = {
                id: cuid(),
                text: action.review.text,
                restaurantId: action.review.restaurantId
              }
            return { restaurants: state.restaurants, reviews: state.reviews.concat(review) }

        case 'DELETE_REVIEW':
            // console.log(action)
            // console.log("inside delete action")
            return {restaurants: state.restaurants, reviews: state.reviews.filter(review => review.id !== action.id)}

        default:
            return state

    }

}
