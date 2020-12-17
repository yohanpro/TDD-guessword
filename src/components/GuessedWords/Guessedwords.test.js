import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../tests/testUtil';
import GuessedWords from './index';



const defaultProps = {
    guessedWords: [
        { guessedWord: 'train', letterMatchCount: 3 }
    ]
};

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<GuessedWords {...setupProps} />);
};


test("필요한 prop이 전달되었을 때 오류 없이 렌더링", () => {
    checkProps(GuessedWords, defaultProps);
});

describe("아직 어떤 단어도 guess 하지 않았을 경우", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({ guessedWords: [] });
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

describe("단어 guessed 됐을 경우(시작한 경우)", () => {
    let wrapper;

    let guessedWords = [
        { guessedWord: 'train', letterMatchCount: 3 },
        { guessedWord: 'ticket', letterMatchCount: 2 },
        { guessedWord: 'party', letterMatchCount: 4 },
    ];

    beforeEach(() => {
        wrapper = setup({ guessedWords });
    });

    test("에러 없이 렌더링 성공", () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    });

    test("guessed word 섹션 생성", () => {
        const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words');
        expect(guessedWordsNode.length).toBe(1);
    });

    test('정확한 숫자의 guessed Words 확인', () => {
        const guessedWordsNode = findByTestAttr(wrapper, 'guessed-word');
        expect(guessedWordsNode.length).toBe(guessedWords.length);
    });
});