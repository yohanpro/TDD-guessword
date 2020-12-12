import PropTypes from 'prop-types';


const GuessedWords = props => {
    let contents;

    if (props.guessedWords.length === 0) {
        contents = (
            <div data-test="guessed-words">
                <span data-test="guess-instructions">
                    GuessWord 게임을 시작해보세요
            </span>
            </div>
        );
    } else {
        const guessedWordsRows = props.guessedWords.map((word, index) => {
            return (
                <tr key={index} data-test="guessed-word" >
                    <td>{word.guessedWord}</td>
                    <td>{word.letterMatchCount}</td>
                </tr>
            );
        });
        contents = (
            <div data-test="guessed-words">
                <h3>Guessed Words</h3>
                <table className="table table-sm">
                    <thead className="table-light">
                        <tr>
                            <th>Guess</th>
                            <th>Matching Letters</th>
                        </tr>
                    </thead>
                    <tbody>
                        {guessedWordsRows}
                    </tbody>
                </table>
            </div>
        );
    }


    return (
        <div className="component-guessed-words" data-test="component-guessed-words">
            {contents}
        </div>
    );
};

GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(PropTypes.shape({
        guessedWord: PropTypes.string.isRequired,
        letterMatchCount: PropTypes.number.isRequired
    })).isRequired
};

export default GuessedWords;