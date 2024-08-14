validar  = require 'assert'
gueco_   = require 'vows'
peticion = require 'request'

LURbase = 'http://localhost:8000'

(gueco_.describe 'consulta a servicios remotos').addBatch
    'cuando sin autenticación':
        topic: ->
            peticion
                uri   : LURbase + '/escenario'
                method: 'GET'
            , @callback
            return
        'se lista escenarios': (error, respuesta) ->
            validar.equal 401, respuesta.statusCode
        'se obtiene escenario': (error, respuesta) ->
            validar.equal 401, respuesta.statusCode
        'se agregan escenarios': (error, respuesta) ->
            validar.equal 401, respuesta.statusCode
    'cuando autenticado':
        topic: ->
            peticion
                uri   : LURbase + /escenario
.export module
