export const addReview = review => {
  return { type: 'ADD_REVIEW', text: review.text, restaurantId: review.restaurantId }
}

export const deleteReview = id => {
  return { type: 'DELETE_REVIEW', id: id }
}