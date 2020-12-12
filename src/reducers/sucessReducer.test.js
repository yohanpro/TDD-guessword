import succssReducer from './succssReducer';
import { actionTypes } from '../actions';

test("아무것도 전달 받지 않았을 때 (no action, no State) return false ", () => {
    const newState = succssReducer(undefined, {});
    expect(newState).toBe(false);

});

test("action type 'CORRECT_Guess' 받았을 때 state true 리턴", () => {
    const newState = succssReducer(undefined, { type: actionTypes.CORRECT_GUESS });

    expect(newState).toBe(true);

});