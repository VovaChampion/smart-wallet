const initState = {
    expenses:[
        { key: '1', sum: '100', category: 'car', date: '12 February 2020' },
        { key: '2', sum: '200', category: 'food', date: '17 March 2020' },
        { key: '3', sum: '300', category: 'furniture', date: '17 April 2020' },
        { key: '4', sum: '400', category: 'food', date: '8 May 2020' },
        { key: '5', sum: '99', category: 'food', date: '8 June 2020' },
    ],
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
                // total: totalSum,
                expenses: newExpenses
            }
        }
        case 'ADD_COST': {
            // let totalSum2 = state.expenses.reduce((prev,next) => prev + Number(next.sum),0);
            return {
                ...state,
                // total: totalSum2,
                expenses: [action.cost, ...state.expenses]
            }
        }
        default:
            return state;
    }
}

export default rootReducer;


/*
const initState = (() => {
    const expenses = [
        { key: '1', sum: '100', category: 'car', date: '12 April 2020' },
        { key: '2', sum: '200', category: 'food', date: '17 April 2020' },
        { key: '3', sum: '300', category: 'furniture', date: '17 March 2020' },
        { key: '4', sum: '400', category: 'food', date: '8 May 2020' },
        { key: '5', sum: '99', category: 'food', date: '8 June 2020' },
    ];
    const total = expenses.reduce((prev,next) => prev + Number(next.sum),0);
    return {expenses, total}
})()

const rootReducer = (state = initState, action) => {
    switch(action.type){
        case 'DELETE_COST': {
            let newExpenses = state.expenses.filter(cost => {
                return action.key !== cost.key
            })

            let totalSum = state.expenses.reduce((prev,next) => prev + Number(next.sum),0);
            return {
                ...state,
                total: totalSum,
                expenses: newExpenses
            }
        }
        case 'ADD_COST': {
            let totalSum = state.expenses.reduce((next) => Number(next.sum),0);
            return {
                ...state,
                total: totalSum,
                expenses: [action.cost, ...state.expenses]
            }
        }
        default:
            return state;
    }
}

export default rootReducer;
*/