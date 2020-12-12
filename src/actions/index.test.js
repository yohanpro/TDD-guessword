import { actionTypes, correctGuess } from './';

describe("correct Guess", () => {

    test("Correct_guess 타입 액션을 리턴한다", () => {

        const action = correctGuess();
        expect(action).toEqual({
            type: actionTypes.CORRECT_GUESS
        });
    });
});
