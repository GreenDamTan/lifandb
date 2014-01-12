var Datastore = require('nedb')
    , db = new Datastore({ filename:  __dirname + '/dbfile'  });
db.loadDatabase(function (err) {    // Callback is optional
    // Now commands will be executed
    console.log(err)
});

var rawData = require('./database');

var document = {};

document.name = {}
document.magnet = {}
document.img = {}
document.year = {}

function syncDB(year, arrayDB){
    console.log(year)


    Object.keys(rawData['a' + year]).forEach(function (item){
        console.log(item)

        if (rawData['a' + year][item]) {
            arrayDB[item] = {}
            arrayDB[item].name = rawData['a' + year][item]
            arrayDB[item].year = year != 201308 ? year : 2013
        }


    })

    Object.keys(rawData['b' + year]).forEach(function (item){
        if(rawData['b' + year][item]){
            arrayDB[item].magnet = rawData['b' + year][item]
        }

    })

    Object.keys(rawData['c' + year]).forEach(function (item){
        if(rawData['c' + year][item]){
            arrayDB[item].image = rawData['c' + year][item]
        }

    })

    db.insert(arrayDB, function (err, newDoc) {   // Callback is optional
        // newDoc is the newly inserted document, including its _id
        // newDoc has no key called notToBeSaved since its value was undefined
        console.log(err)
        console.log(newDoc)
    });
}
for (var i = 2000 ; i <2014; i++) {
    syncDB(i, [])
}

//other

syncDB('步兵', [])
syncDB(201308, [])