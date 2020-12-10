import { getLetterMatchCount } from './';

describe('getLetterMatchCount', () => {

    const secretWord = 'party';

    test("맞는 글자가 하나도 없을때 올바른 리턴값 반환하기", () => {
        const letterMatchCount = getLetterMatchCount('bones', secretWord);
        expect(letterMatchCount).toBe(0);
    });

    test("3개가 맞을 때 맞는 리턴값 반환하기", () => {
        const letterMatchCount = getLetterMatchCount('train', secretWord);
        expect(letterMatchCount).toBe(3);
    });

    test("중복되는 글자가 있을 때 정확한 리턴값 반환하기", () => {
        const letterMatchCount = getLetterMatchCount('parka', secretWord);
        expect(letterMatchCount).toBe(3);
    });
});