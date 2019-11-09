interface Instrument {
    ccy1: string;
    ccy2: string;
    fixingConditions?: Array<string>;
    marketOptions?: Array<string>;
    amount: string;
}

export const changeCurrencyPair = (instrument:Instrument, ccy1:string, ccy2:string):Instrument => {
    const { ccy1:oldCcy1, ccy2:oldCcy2, fixingConditions, marketOptions, ...otherInstrumentValues } = instrument;
    
    if (oldCcy1 === ccy1 && oldCcy2 === ccy2) {
        return instrument;
    } 
    
    return {
        ccy1,
        ccy2,
        fixingConditions: [],
        marketOptions: [],
        ...otherInstrumentValues
    };
};

export const changeAmount = (instrument:Instrument, amount:string):Instrument => {
    const { amount:oldAmount, ...otherInstrumentValues } = instrument;

    return {
        amount,
        ...otherInstrumentValues
    };
}

