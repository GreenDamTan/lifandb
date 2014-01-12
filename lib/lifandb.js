/**
 * Created by youxiachai on 14-1-13.
 */

var Datastore = require('nedb'),
    debug =require('debug')('lifan: db')
    , db = new Datastore({ filename:  __dirname + '/dbfile'  });

db.loadDatabase(function (err) {    // Callback is optional
    // Now commands will be executed
   // console.log(err)
});




exports.find  = function (queryParams) {
    debug(JSON.stringify(queryParams))

    console.log(queryParams)
    db.find(queryParams, function (err, docs) {
        console.log(docs)
    });
}

//var params = {}
//params.year = 2000
//
//db.find(params, function (err, docs) {
//    console.log(docs)
//});
