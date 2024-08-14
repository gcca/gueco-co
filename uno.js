var mongo = require('mongoskin');
var bd = mongo.db('127.0.0.1', {database:'gueco'});

/*bd.open()*/

/*bd.collection('escenario').insert({a:7, b:'siete'}, function(){
    console.log(arguments);
    console.log('\n\n');a
});*/

/*bd.collection('escenarios').find(function (e, r) {
    console.log(arguments);
});*/

/*var RepositorioEscenario = require('./infraestructura/persistencia/mongodb/RepositorioMongoDBEscenario.js');

try {
    RepositorioEscenario.todos(function (e, a) {
        console.log(a);
    });
} catch(e) {
    console.log(e);
}
*/

/*bd.collection('escenario').findOne(
  {
    _id:
      mongo.ObjectID.createFromHexString('50319b4a96b963cc4b68fbbc')
  },
  function (e, a) {
      console.log(a)
});
*/
//var mdb = require('mongoskin/node_modules/mongodb')

/*bd.collection('usuario').findOne(function(){
    var u = arguments[1];
    bd.collection('escenario').find(
        {
        _id: { $in: u.escenarios.map(function(e){return bd.toId(e)}) }
        }
    ).toArray(function () {
        console.log(arguments)
    })
})

console.log('FIN');*/

/*bd.collection('prueba').save({uno:1, dos:'3', tres: 'tres'}, function() {
    console.log(arguments)
})*/

bd.collection('prueba').findOne(function(e,a){
    a.dos = 3
    bd.collection('prueba').save(a, function(error) {
        console.log(error)
    })
})

