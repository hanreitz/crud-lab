import uuid from 'uuid';

export default function manageRestaurants(state = { restaurants: [], reviews: [] }, action) {
  let restaurant
  let restaurants
  let review
  let reviews 

  switch(action.type){
    case 'ADD_RESTAURANT':
      restaurant = { text: action.text, id: uuid() }
      return { ...state, restaurants: state.restaurants.concat(restaurant) }
    case 'DELETE_RESTAURANT':
      restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
      return { ...state, restaurants }
    case 'ADD_REVIEW':
      review = { text: action.text, id: uuid(), restaurantId: action.restaurantId }
      return { ...state, reviews: state.reviews.concat(review) }
    case 'DELETE_REVIEW':
      reviews = state.reviews.filter(review => review.id !== action.id)
      return { ...state, reviews }
    default: 
      return state
  }
}
