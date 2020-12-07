import PropTypes from 'prop-types';


const GuessWords = props => {

    if (props.guessWords.length === 0) {
        return (
            <div data-test="component-guessed-words">
                <span data-test="guess-instructions">
                    GuessWord 게임을 시작해보세요
                </span>
            </div>
        );
    } else {
        return (
            <div data-test="component-guessed-words">
            </div>
        );
    }

};

GuessWords.propTypes = {
    guessWords: PropTypes.arrayOf(PropTypes.shape({
        guessWord: PropTypes.string.isRequired,
        letterMatchCount: PropTypes.number.isRequired
    })).isRequired
};

export default GuessWords;