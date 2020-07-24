export const deleteCost = (key) => {
  return {
    type: 'DELETE_COST',
    key: key
  }
}

export const deleteCat = (id) => {
  return {
    type: 'DELETE_CATEGORY',
    id: id
  }
}

export const addCost = (cost) => {
  return {
    type: 'ADD_COST',
    cost: cost
  }
}

export const addCat = (cat) => {
  return {
    type: 'ADD_CATEGORY',
    cat: cat
  }
}

export const updateLimit = (lim) => {
  return {
    type: 'UPDATE_LIMIT',
    lim: lim
  }
}
