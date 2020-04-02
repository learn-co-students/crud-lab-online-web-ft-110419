
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
            console.log(action)
            return {restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)}

        case 'ADD_REVIEW':
            console.log("inside delete switch on reducer")
            console.log(action)
            console.log(state)
            const review = {
                id: cuid(),
                text: action.payload.text,
                restaurantId: action.payload.restaurantId
              }
            return { restaurants: state.restaurants, reviews: state.reviews.concat(review) }


        default:
            return state


    }

}
