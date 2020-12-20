import { getLetterMatchCount } from '../helpers/index.js';
import axios from 'axios';


export const actionTypes = {
    CORRECT_GUESS: 'CORRECT_GUESS',
    GUESS_WORD: 'GUESS_WORD',
    SET_SECRET_WORD: "SET_SECRET_WORD"
};
export const guessWord = (guessedWord) => {
    return function (dispatch, getState) {
        const { secretWord } = getState();
        const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

        dispatch({
            type: actionTypes.GUESS_WORD,
            payload: { guessedWord, letterMatchCount }
        });

        if (guessedWord === secretWord) {
            dispatch({ type: actionTypes.CORRECT_GUESS });
        }
    };
};

//원래는 http 리퀘스트를 사용해서 가져와야 한다. async await 로 대기 해서 
export const getSecretWord = () => {
    return (dispatch) => {
        axios.get('http://loaclhost:3030');
    };
};