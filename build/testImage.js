/**
 * Created by youxiachai on 13-12-29.
 */


var request = require('request')
    fs = require('fs'),
    Path = require('path'),
    debug = require('debug')('test:imagedownload'),
    Mkdirp = require('mkdirp'),
    Async = require('async'),
    URL = require('url');

var DBFile = require('./database');

// image link

//console.log(DBFile)

var imageYear = /^c/

Object.keys(DBFile).forEach(function (item){

    if(imageYear.test(item)){
        console.log(item);
    }

})


//var imageList = DBFile.c2013;
////
////imageList.forEach(function (item, index) {
////    console.log(item);
////})
//
//var url = 'http://imgsrc.baidu.com/forum/cp=tieba,10,469;ap=%C7%E1%C7%E1%D2%BB%B5%E3%B0%C9,90,477/sign=f2feb65b9e3df8dcb27087d5a47410ea/00a0b644ebf81a4cd33e5465d62a6059242da6a5.jpg'
//
//var urlPase = URL.parse(url)
//
//var path = Path.dirname(urlPase.path)
//var basename = Path.basename(urlPase.path)
//
////console.log(urlPase)
//debug(path)
//debug(basename)





//    var response = function (err, res, body) {
//        debug(err);
//
//    }
//
//    Mkdirp(downloadDir, function (err) {
//        if (err) {
//            return debug(err);
//        }
//        fs.exists(downloadDir + basename, function (exist){
//            debug(exist)
//            if(!exist){
//                var imageStream = fs.createWriteStream(downloadDir + basename);
//                request(urlPase.url, response).pipe(imageStream);
//            }
//        })
//    })
//
//





