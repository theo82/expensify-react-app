import { createStore } from 'redux';

// const incrementCount = (payload = {}) => ({
//     type: 'INCREMENT',
//     incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// });

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
})

const store = createStore((state = { count: 0 }, action) => {
    switch(action.type){
        case 'INCREMENT': 
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT': 
            return {
                count: state.count - action.decrementBy
            }    
        case 'RESET': {
            return {
                count: 0
            }
        }    
        case 'SET': {
            return {
                count: action.count
            }
        }
        default: 
            return state;
    }
})

store.subscribe(() => {
    console.log(store.getState());
});

// I' d like to increment the count
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5}))

store.dispatch(incrementCount())

// store.dispatch({
//     type: 'RESET'
// })
store.dispatch(resetCount())

store.dispatch(decrementCount())

store.dispatch(decrementCount({ decrementBy: 10}))

// store.dispatch({
//     type: 'SET',
//     count: 101
// })
store.dispatch(setCount({ count: 102 }));

