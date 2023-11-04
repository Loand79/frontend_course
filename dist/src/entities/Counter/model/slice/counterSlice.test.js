import { counterReducer, counterActions } from './counterSlice';
describe('counterSlice.test', function () {
    test('increment', function () {
        var state = { value: 0 };
        expect(counterReducer(state, counterActions.increment())).toEqual({ value: 1 });
    });
    test('decrement', function () {
        var state = { value: 0 };
        expect(counterReducer(state, counterActions.decrement())).toEqual({ value: -1 });
    });
    test('empty state', function () {
        expect(counterReducer(undefined, counterActions.decrement())).toEqual({ value: -1 });
    });
});
