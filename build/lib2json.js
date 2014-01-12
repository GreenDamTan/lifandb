/**
 * Created by youxiachai on 13-12-22.
 */

var fs = require('fs');

var content = fs.readFileSync('./database.txt').toString().replace('﻿', '');

var line = content.split('\r\n');

//console.log(line);

var reg1 = /^\[.*\]/;

var jsonData = {};

var offset = '';

line.forEach(function (item) {
    if (reg1.test(item)) {
        offset = item.replace(/[\[\]]/g, '')
        if(offset === '数据库版本' || offset === '年份数据'){
            jsonData[offset] = {};
        }else{
            jsonData[offset] = [];
        }
    } else {

        if(offset === '数据库版本' || offset === '年份数据'){
            var keyValue = item.split('=');

            jsonData[offset][keyValue[0] + ''] = keyValue[1];
        }else{
            var result = item.match(/=/);
            if (result) {
                var index =item.slice(0, result.index);
                var value = item.slice(result.index + 1);
                jsonData[offset][index] = value;
            } else {
                console.log('item ->' + item);
            }
        }
    }
})

//jsonData['a2013'].keys(function (item) {
//    console.log(item);
//})

//console.log(jsonData['a2013'][1]);

//jsonData['a2013'].forEach(function (item) {
//    console.log(item);
//})

//Object.keys(jsonData['a2013']).forEach(function (item) {
//    console.log(jsonData['a2013'][item]);
//})

//
console.log(jsonData['a2013'][1])
console.log(jsonData['b2013'][1])
console.log(jsonData['c2013'][1])
//console.log(jsonData['年份数据'])

//fs.writeFileSync('./database.json', JSON.stringify(jsonData));

//console.log(jsonData['[a2013]'][0])

//var x = '1=magnet:?xt=urn:btih:7afa766092586a6859755fc6e3330618dacdfa1c';
//
//var result = x.match(/=/);
//console.log(result);
//console.log(x.slice(0,result.index));
//console.log(x.slice(result.index + 1));

//var test = '[a2013]';
//
//console.log(test.replace(/[\[\]]/g, ''));

//var test2 = '2000=89';
//
//var result = test2.match(/^\d{1,3}=/);
//
//console.log(result)

//var x = [];
//
//x[1] = 100;
//x[2] = 100;
//
//console.log(x);