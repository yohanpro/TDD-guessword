import { combineReducers } from 'redux';
import success from './succssReducer';
import guessedWords from './guessedWordsReducer';
import secretWord from './secretWordReducer';



export default combineReducers({
    success,
    guessedWords,
    secretWord
}); 