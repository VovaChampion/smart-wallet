const initState = {
  expenses:[
    { key: '1', sum: '100.67', category: 'car', date: '12 February 2020' },
    { key: '2', sum: '200.00', category: 'internet', date: '17 March 2020' },
    { key: '3', sum: '300.00', category: 'furniture', date: '17 April 2020' },
    { key: '4', sum: '400.00', category: 'food', date: '08 May 2020' },
    { key: '5', sum: '100.59', category: 'house', date: '08 June 2019' },
    { key: '6', sum: '250.00', category: 'food', date: '08 June 2020' },
    { key: '7', sum: '850.36', category: 'mortgage', date: '30 January 2020' },
    { key: '8', sum: '560.00', category: 'house', date: '01 July 2020' },
    { key: '9', sum: '200.00', category: 'food', date: '02 July 2020' },
  ],
  categories: [
    { id:'1', name: 'mortgage' },
    { id:'2', name: 'food' },
    { id:'3', name: 'car' },
    { id:'4', name: 'house' },
    { id:'5', name: 'internet' },
    { id:'6', name: 'clothes' },
    { id:'7', name: 'utilities' },
    { id:'8', name: 'vacation' },
  ],
  limit: {lim:'1000'}
}

const rootReducer = (state = initState, action) => {
  switch(action.type){
    case 'DELETE_COST': {
      let newExpenses = state.expenses.filter(cost => {
        return action.key !== cost.key
      })

      // let totalSum = state.expenses.reduce((prev,next) => prev + Number(next.sum),0);
      return {
        ...state,
        expenses: newExpenses
      }
    }
    case 'ADD_COST': {
      // let totalSum2 = state.expenses.reduce((prev,next) => prev + Number(next.sum),0);
      return {
        ...state,
        expenses: [action.cost, ...state.expenses]
      }
    }
    case 'DELETE_CATEGORY': {
      let newCategories = state.categories.filter(category => {
        return action.id !== category.id
      })

      return {
        ...state,
        categories: newCategories 
      }
    }
    case 'ADD_CATEGORY': {
      return {
        ...state,
        categories: [action.cat, ...state.categories]
      }
    }
    default:
      return state;
  }
}

export default rootReducer;
