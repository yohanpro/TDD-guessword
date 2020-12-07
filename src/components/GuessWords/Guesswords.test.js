import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../tests/testUtil';
import GuessWords from '../GuessWords';



const defaultProps = {
    guessWords: [
        { guessWord: 'train', letterMatchCount: 3 }
    ]
};

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<GuessWords {...setupProps} />);
};


test("필요한 prop이 전달되었을 때 오류 없이 렌더링", () => {

    checkProps(GuessWords, defaultProps);
});

describe("아직 어떤 단어도 guess 하지 않았을 경우", () => {

    let wrapper;

    beforeEach(() => {
        wrapper = setup({ guessWords: [] });
    });

    test("에러 없이 렌더링 성공", () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    });

    test("guess word하기 위해 설명 렌더링", () => {
        const instructions = findByTestAttr(wrapper, 'guess-instructions');
        expect(instructions.text().length).not.toBe(0);
    });
});

describe("단어 guessed 됐을 경우", () => {

});