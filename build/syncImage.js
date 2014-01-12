/**
 * Created by youxiachai on 13-12-29.
 */

var request = require('request')
fs = require('fs'),
    Path = require('path'),
    debug = require('debug')('sync:image'),
    Mkdirp = require('mkdirp'),
    Async = require('async'),
    URL = require('url')

var DBFile = require('./database')



var imageYear = /^c/

Object.keys(DBFile).forEach(function (item){

    if(imageYear.test(item)){
        var imageList = DBFile[item]
        var downDir = './lifan/'+ item + "/"

        debug('dir ->' + downDir)

        downLoadList(imageList, downDir)

    }

})



function downLoadList(imageList, downDir) {
    Async.eachSeries(imageList, function (item, callback) {

        if(item && item.length > 0) {
            debug('each -->' + item);
            imageDownload(downDir, item, callback);
        }else {
            callback();
        }
    }, function (err) {
        debug('async ->' + err)
    })
}

function imageDownload (downloadDir, url, callback) {
    var urlPase = URL.parse(url)
    debug('url -->' + JSON.stringify(urlPase.href))
    var basename = Path.basename(urlPase.path)

    var response = function (err, res) {
        var code = res ? res.statusCode : 'error';
        debug('res -> ' + JSON.stringify(err) + 'code ->' + code);
        if (err || !res) {
            fs.unlink(downloadDir + basename, function (error) {
                if(error){
                    debug(error);
                }else{
                    debug('error-->' + error + "--dir-->" + downloadDir + basename);
                }
            });
            return callback(err);
        }
        callback()


    }

    Mkdirp(downloadDir, function (err) {
        if (err) {
            return callback(err)
        }

        fs.exists(downloadDir + basename, function (exist){
            debug(exist)
            if(!exist){
                var imageStream = fs.createWriteStream(downloadDir + basename)
                request(urlPase.href, response).pipe(imageStream).on('error', callback)
            }else{
                callback();
            }
        })
    })
}