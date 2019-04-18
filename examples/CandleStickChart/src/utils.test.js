// describe('test fetch', () => {
//     it('test kuk ', () => {
//         kuk()
//         // .then(response => {
//         //     //console.log(response);
//         //     expect(response.status).toEqual(200);
//         //     response.text();
//         // })
//             .then(text => {
//                 expect(text).toEqual('kuk');
//                 console.log('text is ' + text);
//
//             });
//     });
// });

describe('test for parsing Dukascopy data shall work', () => {

    it('test parsing', () => {

        const f = parseDukascopyData(dukasacopyParseDate);
        const actual = f({
            "Gmt time": "01.03.2019 00:00:00.000",
            "Open": "25.436282332605284",
            "High": "25.835021381744056",
            "Low": "25.411360259406774",
            "Close": "25.710416",
            "Volume": "38409100"
        });
        const expected = 'blah';
        expect(actual).toEqual(expected);
    });
});

// import {getDukascopyData} from "./utils";
// import {dukascopyCandles} from "./testdata";
//
// describe('mocking fetch shall work', () => {
//     beforeEach(() => {
//         fetch.resetMocks()
//     });
//
//     it('should process Dukascopy file', () => {
//         fetch.mockResponse(dukascopyCandles, {status: 200, statusText: 'ok'});
//
//         getDukascopyData()
//             .then(res => {
//                 console.log("elem " + res);
//             })
//             .catch(function (error) {
//                 console.log("exception caught: " + error);
//             });
//     });
// });

import {dukasacopyParseDate, fromDukascopyDate, parseDukascopyData} from "./utils";

describe('date functionality', () => {

    it('test date', () => {
        const dukasacopyDate = dukasacopyParseDate('01.03.2019 00:00:00.000');
        console.log("dukascopy date", dukasacopyDate);
        const march = 2;
        expect(dukasacopyDate).toEqual(new Date(2019, march, 1));
    });
});