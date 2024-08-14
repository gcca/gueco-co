validar = require 'assert'
gueco_  = require 'vows'

repositorio = require 'gueco/infraestructura/persistencia/mongoskin/repositorio'

repositorio_usuario = require 'gueco/infraestructura/persistencia/mongoskin/repositorio_usuario'
repositorio_escenario = require 'gueco/infraestructura/persistencia/mongoskin/repositorio_escenario'

(gueco_.describe 'repositorios').addBatch
    'Un repositorio abstracto':
        topic: new repositorio
        'define una \'coleccion\'': (repositorio) ->
            validar.isNull repositorio.coleccion
        'implementa \'todos\'': (repositorio) ->
            validar.isFunction repositorio.todos
        'implementa \'uno\'': (repositorio) ->
            validar.isFunction repositorio.uno
        'implementa \'buscar\'': (repositorio) ->
            validar.isFunction repositorio.buscar
        'implementa \'almacenar\'': (repositorio) ->
            validar.isFunction repositorio.almacenar
    'Un repositorio usuario':
        topic: new repositorio_usuario
        'al obtener algún usuario':
            topic: (repositorio_usuario) ->
                repositorio_usuario.uno {}, @callback
                return
            'tiene un atributo id': (error, usuario) ->
                validar.include usuario, 'id'
    'Un repositorio escenario':
        topic: new repositorio_escenario
        'cumple con los atributos': (repositorio_escenario) ->
            console.log repositorio_escenario.prototype
            #repositorio_escenario.todos (e, escenarios) ->
            #    console.log escenarios
.export module
