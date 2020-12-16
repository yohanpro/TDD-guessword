import { storeFactory } from './tests/testUtil';
import { guessWord } from './actions';

describe("guessword action dispatcher", () => {

    const secretWord = 'party';
    const unsuccessfulGuess = 'train';

    describe("no guessed words", () => {

        let store;
        const initialState = { secretWord };

        beforeEach(() => {
            store = storeFactory(initialState);

        });

        test("updates state correctly for unsuccesful guess", () => {
            store.dispatch(guessWord(unsuccessfulGuess));
            const newState = store.getState();
            const expectedState = {
                ...initialState,
                success: false,
                guessedWords: [{
                    guessedWord: unsuccessfulGuess,
                    letterMatchCount: 3
                }]
            };

            expect(newState).toEqual(expectedState);
        });

        test("updates state correctly for succesful guess", () => {

        });
    });
    describe("some guessed words", () => {

        test("updates state correctly for unsuccesful guess", () => {

        });

        test("updates state correctly for succesful guess", () => {

        });
    });
});