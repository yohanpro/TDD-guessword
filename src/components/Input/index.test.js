import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../../tests/testUtil';
import Input from './';


const setup = (initialState = {}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<Input store={store} />).dive().dive();
    return wrapper;
};
describe('render', () => {
    describe("Word has not been guessed", () => {
        let wrapper;
        beforeEach(() => {
            const initialState = { success: false };
            wrapper = setup(initialState);
        });

        test("renders component without error", () => {
            const component = findByTestAttr(wrapper, 'component-input');
            expect(component.length).toBe(1);
        });

        test("renders input box", () => {
            const inputbox = findByTestAttr(wrapper, 'input-box');
            expect(inputbox.length).toBe(1);
        });

        test("renders submit Button", () => {
            const submitButton = findByTestAttr(wrapper, 'submit-button');
            expect(submitButton.length).toBe(1);
        });
    });

    describe("word has been guessed", () => {
        test("renders component without error", () => {

        });

        test("Does not render input box", () => {

        });

        test("Does not renders submit Button", () => {

        });
    });

});


describe('update state', () => {

});