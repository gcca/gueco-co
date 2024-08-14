//! \package interfaz

//! Dependencias
var servidor = module.exports = require('express').createServer()
var configuracion = require('gueco/configuracion')

var gueco = require('gueco/infraestructura')
var g = gueco

//! Configuración
servidor.use(function(p, respuesta, siguiente) {
    respuesta.header('X-Powered-By',
                     'FP Gueco: Equipo de desarrollo: gcca, cgcc')
    respuesta.header('Content-Type', 'application/json charset=UTF-8')
    respuesta.header('Access-Control-Allow-Credentials', 'true')
    respuesta.header('Access-Control-Allow-Origin',
                     //p.headers.origin
                     'http://localhost:8008'
                     //configuracion.cabecera.control_acceso_permitir_origen
					)
    siguiente()
})
servidor.options('*', function(p, respuesta, siguiente) {
    respuesta.header('Access-Control-Allow-Origin',
                     //p.headers.origin
                     'http://localhost:8008'
                     //configuracion.cabecera.control_acceso_permitir_origen
					)
    respuesta.header('Access-Control-Allow-Credentials', true)
    respuesta.header('Access-Control-Allow-Methods',
                     'POST, GET, PUT, DELETE, OPTIONS')
    respuesta.header('Access-Control-Allow-Headers', 'Content-Type')
    respuesta.send(200)
})


//! Funciones
function util_fijarcontexto(c, f){return function(){f.apply(c,arguments)}}

function util_fijarcuerpo(p, r, s) {
    var otd = ''
    p.on('data', function(tarugo) { otd += tarugo })
    p.on('end', function() {
        try {
            p.cuerpo = otd.length ? JSON.parse(otd) : {}
            s()
        } catch (e) { r.send(400) }
    })
}

// servicios
var control_aplic = g.i.c.aplicacion()
var control_escen = g.i.c.escenario()
var control_usr   = g.i.c.usuario()
var control_gueco = g.i.c.gueco()

var verificar_autorizacion =
    util_fijarcontexto(control_aplic,
                       g.i.c.aplicacion$.peticion_es_autorizada)

servidor.get('/escenario', verificar_autorizacion,
             util_fijarcontexto(control_usr, g.i.c.usuario$.escenarios))
servidor.get('/escenario/:id', verificar_autorizacion,
             util_fijarcontexto(control_usr, g.i.c.usuario$.escenario))
servidor.post('/escenario', util_fijarcuerpo, verificar_autorizacion,
              util_fijarcontexto(control_usr,
                                 g.i.c.usuario$.almacenar_escenarios))
servidor.delete('/escenario/:id', util_fijarcuerpo, verificar_autorizacion,
              util_fijarcontexto(control_usr,
                                 g.i.c.usuario$.borrar_escenario))
servidor.post('/gueco', util_fijarcuerpo,
              util_fijarcontexto(control_gueco,
                                 g.i.c.gueco$.gueco))

servidor.get('/', verificar_autorizacion, function(peticion, respuesta) {
    respuesta.writeHead(302, { 'Location': 'http://gueco.tk/gueco' })
    respuesta.end()
})

servidor.listen(8000)
