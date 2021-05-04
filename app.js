/*
1. IMPORTACIONES    
*/

const express = require("express")
const app = express()

/*
2. RUTAS
*/

app.use(express.static('public'))

app.get('/', (request, response, next) => {
    response.send('<h1>Este es mi HOME</h1>')
})

app.get('/cat', (request, response, next) => {
    response.sendFile(__dirname + '/views/cat-page.html')
})

// localhost:3000/home
app.get('/home', (request, response, next) => {
    // console.log("Hola mundo")
    // response.send('<h1>Te doy la bienvenida, Ironhacker</h1>')

    // __dirname === http://localhost:3002
    response.sendFile(__dirname + '/views/home-page.html')

})

/*
3. SERVIDOR
*/
app.listen(3002, () => {
    console.log("Levantamos el servidor en el puerto 3002")
})

