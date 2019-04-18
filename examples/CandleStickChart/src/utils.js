import {timeParse} from "d3-time-format";
import {csvParse, tsvParse} from "d3-dsv";

export function parseData(parse) {
    return function (d) {
        d.date = parse(d.date);
        d.open = +d.open;
        d.high = +d.high;
        d.low = +d.low;
        d.close = +d.close;
        d.volume = +d.volume;

        return d;
    };
}

export function parseDukascopyData(parse) {
    console.log("parseDukascopyData called");

    return function (d) {
        console.log("function called");
        d.date = parse(d['Gmt time']);
        d.open = +d.Open;
        d.high = +d.High;
        d.low = +d.Low;
        d.close = +d.Close;
        d.volume = +d.Volume;

        return d;
    };
}

export const parseDate = timeParse("%Y-%m-%d");
const dukascopyDateTimeFormat = "%d.%m.%Y %H:%M:%S.%L";
export const dukasacopyParseDate = timeParse(dukascopyDateTimeFormat);

export function getData() {
    const promiseMSFT = fetch("https://cdn.rawgit.com/rrag/react-stockcharts/master/docs/data/MSFT.tsv")
        .then(response => response.text())
        .then(data => {
            return tsvParse(data, parseData(parseDate))
        });
    return promiseMSFT;
}


export function getDukascopyData() {
    const promiseData = fetch('http://localhost:8080/dukascopy/EURRUB_Candlestick_1_D_BID_01.01.2018-13.04.2019.csv')
        .then(response => {
            return response.text();
        })
        .then(data => {
            return csvParse(data, parseDukascopyData(dukasacopyParseDate));
        });

    return promiseData;
}

