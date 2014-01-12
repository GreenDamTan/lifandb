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

var Table = require('cli-table');

// instantiate



exports.find  = function (queryParams, options) {
    debug(JSON.stringify(queryParams))

    debug(queryParams)

    db.find(queryParams, function (err, docs) {

        if(options.table){
            showTable(docs)
        }else{
            console.log(docs)
        }


    });
}

function showTable (docs) {
    var table = new Table({
        head: ['name', 'year']
    });
    docs.forEach(function (item){
        table.push([
            item.name,item.year
        ])
    })

    console.log(table.toString());
}