/**
 * Created by youxiachai on 13-12-22.
 */

var fs = require('fs');
var iconv = require('iconv-lite');

var content = fs.readFileSync('./database20131223.txt');

var buf =  iconv.decode(content, 'gbk');

//console.log(buf);

var line = buf.split('\r\n');
//
console.log(line);

//console.log(line);

//var reg1 = /^\[.*\]/;
//
//var jsonData = {};
//
//var offset = '';
//
//line.forEach(function (item) {
//    if (reg1.test(item)) {
//        offset = item.replace(/[\[\]]/g, '')
//        if(offset === '数据库版本' || offset === '年份数据'){
//            jsonData[offset] = {};
//        }else{
//            jsonData[offset] = [];
//        }
//    } else {
//
//        if(offset === '数据库版本' || offset === '年份数据'){
//            var keyValue = item.split('=');
//
//            jsonData[offset][keyValue[0] + ''] = keyValue[1];
//        }else{
//            var result = item.match(/=/);
//            if (result) {
//                var index =item.slice(0, result.index);
//                var value = item.slice(result.index + 1);
//                jsonData[offset][index] = value;
//            } else {
//                console.log('item ->' + item);
//            }
//        }
//    }
//})

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
