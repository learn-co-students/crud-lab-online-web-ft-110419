function deleteRestaurant(payload){
   return { type: "DELETE_RESTAURANT", payload}
}
function addRestaurant(payload){
    return { type: "ADD_RESTAURANT", payload}
}

const ADD_RESTAURANT = addRestaurant
const DELETE_RESTAURANT = deleteRestaurant

export {ADD_RESTAURANT,DELETE_RESTAURANT}
