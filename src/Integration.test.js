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

        test("updates state correctly for successful guess", () => {

            store.dispatch(guessWord(secretWord));
            const newState = store.getState();
            const expectState = {
                ...initialState,
                success: true,
                guessedWords: [{
                    guessedWord: secretWord,
                    letterMatchCount: 5
                }]
            };

            expect(newState).toEqual(expectState);
        });
    });
    describe("some guessed words", () => {

        const guessedWords = [{ guessedWord: 'agile', letterMatchCount: 1 }];
        const initialState = { guessedWords, secretWord };
        let store;
        beforeEach(() => {
            store = storeFactory(initialState);
        });

        test("updates state correctly for unsuccesful guess", () => {
            store.dispatch(guessWord(unsuccessfulGuess));
            const newState = store.getState();
            const expectState = {
                secretWord,
                success: false,
                guessedWords: [
                    ...guessedWords,
                    {
                        guessedWord: unsuccessfulGuess,
                        letterMatchCount: 3
                    }
                ]
            };

            expect(newState).toEqual(expectState);

        });

        test("updates state correctly for successful guess", () => {
            store.dispatch(guessWord(secretWord));
            const newState = store.getState();
            const expectState = {
                secretWord,
                success: true,
                guessedWords: [
                    ...guessedWords,
                    {
                        guessedWord: secretWord,
                        letterMatchCount: 5
                    }
                ]
            };

            expect(newState).toEqual(expectState);
        });
    });
});