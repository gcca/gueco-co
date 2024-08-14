var m1 = new ObjectId()
var m2 = new ObjectId()
var datos = [{
    _id: m1,
    nombre:      'azul',
    descripcion: 'operacion azul',
    lugar:       'no se',
    mapa: [
      {
        "icono": "resource/gueco/mapa/factor/rio_caud",
        "posicion": {
          "Xa": -9.735789753648609,
          "Ya": -78.25321240624999
        }
      },
      {
        "icono": "resource/gueco/mapa/factor/mon_acce",
        "posicion": {
          "Xa": -9.280704379464478,
          "Ya": -76.73709912499999
        }
      },
      {
        "icono": "resource/gueco/mapa/factor/veg_pen",
        "posicion": {
          "Xa": -10.730440855748775,
          "Ya": -78.62674756249999
        }
      },
      {
        "icono": "resource/gueco/mapa/factor/pue_desp",
        "posicion": {
          "Xa": -9.93063837025777,
          "Ya": -76.97879834374999
        }
      },
      {
        "icono": "resource/gueco/mapa/factor/pue_dstr",
        "posicion": {
          "Xa": -10.038837642219834,
          "Ya": -75.50663037499999
        }
      },
      {
        "icono": "resource/gueco/mapa/factor/pue_dstr",
        "posicion": {
          "Xa": -10.471269409597662,
          "Ya": -75.92411084374999
        }
      },
      {
        "icono": "resource/gueco/mapa/factor/pue_dstr",
        "posicion": {
          "Xa": -11.312757274569558,
          "Ya": -76.95682568749999
        }
      }
    ]
},{
    _id: m2,
    nombre:      'verde',
    descripcion: 'operación verde',
    lugar:       'tampoco sé'
}];

for(var i in datos) {
    db.escenario.insert(datos[i]);
}

var usuarios = [{
    identificador: 'cristhian',
    clave:         'gonzales',
    escenarios: [
        /*new DBRef('escenario', m1),
        new DBRef('escenario', m2)*/
        m1.str, m2.str
    ]
},{
    identificador: 'angel',
    clave:         'gonzales',
    escenarios: [
        /*new DBRef('escenario', m1)*/
        m1.str
    ]
}];

for(var i in usuarios) {
    db.usuario.insert(usuarios[i]);
}
