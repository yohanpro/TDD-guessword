import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Input extends Component {

    render() {
        const contents = this.props.success ? null : (
            <form class="form-inline">
                <input className="mb-2 mx-sm-3"
                    data-test="input-box"
                    placeholder="enter guess"
                    type="text"
                />
                <button
                    className="btn btn-primary mb-2"
                    type="submit"
                    data-test="submit-button"

                >
                    Submit
                </button>
            </form>
        );



        return (
            <div data-test="component-input">

                {contents}

            </div>
        );
    }
}


const mapStateToProps = ({ success }) => {
    return { success };
};

export default connect(mapStateToProps)(Input);