export const deleteCost = (key) => {
    return {
        type: 'DELETE_COST',
        key: key
    }
}

export const addCost = (cost) => {
    return {
        type: 'ADD_COST',
        cost: cost
    }
}