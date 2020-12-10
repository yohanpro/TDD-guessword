import PropTypes from 'prop-types';


const Congrats = props => {
    const { success } = props;

    if (success) {
        return (
            <div data-test="component-congrat" className="alert alert-success">
                <span data-test="congrat-message">
                    정답을 맞추셨네요!
            </span>
            </div>
        );

    } else {
        return (<div data-test="component-congrat">

        </div>);
    }
};

Congrats.propTypes = {
    success: PropTypes.bool.isRequired,
};

export default Congrats;