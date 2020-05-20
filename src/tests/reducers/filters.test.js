import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT '});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('should setup sortby to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should setup sortby to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };

    const action = { type: 'SORT_BY_DATE'};
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date')
});



// should start text filter
test('should setup sortby to date', () => {
    
    const text = 'Mavic Air 2'

    const action = { 
        type: 'SET_TEXT_FILTER',
        text
    };
    
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(text)
});

// should set startDate filter
test('should setup sortby to date', () => {
    
    const text = 'Mavic Air 2'

    const action = { 
        type: 'SET_TEXT_FILTER',
        text
    };
    
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(text)
});
