var rmi = new XMLHttpRequest

rmi.open('POST', 'http://localhost:8000/autenticar', true)
rmi.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')

rmi.onreadystatechange = function () {
    if (4==this.readyState) {

        rmi = new XMLHttpRequest

        rmi.open('GET', 'http://localhost:8000/escenario', true)
        rmi.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')

        rmi.onreadystatechange = function () {
            if (4==this.readyState) {
            }
        }

        rmi.send()
    }
}

rmi.send(JSON.stringify({
identificador:'cristhian',
clave:'gonzales'
}))
