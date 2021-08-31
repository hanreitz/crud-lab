export const addRestaurant = text => {
  return { type: 'ADD_RESTAURANT', text: text }
}

export const deleteRestaurant = id => {
  return { type: 'DELETE_RESTAURANT', id: id }
}