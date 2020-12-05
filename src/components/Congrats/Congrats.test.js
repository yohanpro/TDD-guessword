import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

import Congrats from '../Congrats';
import { findByTestAttr } from '../../tests/testUtil';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}) => {
    return shallow(<Congrats {...props} />);
};

test('render Congrats Components without Error', () => {
    const wrapper = setup();
    const congratComponent = findByTestAttr(wrapper, 'component-congrat');
    expect(congratComponent.length).toBe(1);
});


test("prop으로 success: false 일시 congrat 컴포넌트 렌더링 안함", () => {
    const wrapper = setup({ success: false });
    const congratComponent = findByTestAttr(wrapper, 'component-congrat');

    expect(congratComponent.text()).toBe('');
});

test('props으로 true 전달시 Congrat 컴포넌트 안 congrat message 나타날 것', () => {

    const wrapper = setup({ success: true });
    const messageComponent = findByTestAttr(wrapper, 'congrat-message');

    expect(messageComponent.text().length).not.toBe(0);

});