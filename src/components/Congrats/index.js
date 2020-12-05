

const Congrats = props => {
    const { success } = props;

    if (success) {
        return (
            <div data-test="component-congrat">
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

export default Congrats;