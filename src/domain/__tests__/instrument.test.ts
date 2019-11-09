import { changeCurrencyPair, changeAmount } from "../instrument";

describe('instrument tests', () => {
    test('it should return a new instrument with an updated currency pair', () => {
        const instrument = {
            ccy1: 'EUR',
            ccy2: 'USD',
            amount: '1000000'
        };

        const actual = changeCurrencyPair(instrument, 'GBP', 'EUR');

        const expected = {
            ccy1: 'GBP',
            ccy2: 'EUR',
            amount: '1000000',
            fixingConditions: [],
            marketOptions: []
        };

        expect(actual).toEqual(expected);
        expect(actual).not.toBe(instrument);
    });

    test('it should return the same instrument if the currency pairs are the same', () => {
        const instrument = {
            ccy1: 'EUR',
            ccy2: 'USD',
            amount: '1000000',
            fixingConditions: ['aloha', 'word up'],
            marketOptions: ['Deliverable', 'Non-deliverable']
        };

        const actual = changeCurrencyPair(instrument, 'EUR', 'USD');

        expect(actual).toEqual(instrument);
    });

    test('it should reset fixing conditions and market options when changing currency pair', () => {
        const instrument = {
            ccy1: 'EUR',
            ccy2: 'USD',
            amount: '1000000',
            fixingConditions: ['aloha', 'word up'],
            marketOptions: ['Deliverable', 'Non-deliverable']
        }

        const actual = changeCurrencyPair(instrument, 'GBP', 'EUR');

        const expected = {
            ccy1: 'GBP',
            ccy2: 'EUR',
            amount: '1000000',
            marketOptions: [],
            fixingConditions: []
        };

        expect(actual).toEqual(expected);
    });

    test('it should change amount and return a new instrument', () => {
        const instrument = {
            ccy1: 'EUR',
            ccy2: 'USD',
            amount: '500000',
            fixingConditions: [],
            marketOptions: []
        };

        const actual = changeAmount(instrument, '20');

        const expected = {
            ccy1: 'EUR',
            ccy2: 'USD',
            amount: '20',
            fixingConditions: [],
            marketOptions: []
        };

        expect(actual).toEqual(expected);
    });
})