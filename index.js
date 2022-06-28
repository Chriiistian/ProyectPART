//ejecutar python

function ejecutar(){
    
    // const script = spawn("python", ["/assets/py/Grafico_frec_acc.py"]);
    const { spawn } = require('child_process');
    const script = spawn('python', ['assets/py/Grafico_frec_acc.py']);
    const chunks = [];
    
    // there is a data chunk from the script available to read
    script.stdout.on('data', (data) => {
        chunks.push(data)
    });
    
    // no more data left to read
    script.stdout.on('end', () => {
     
    });
    
     
 }
 ejecutar();

const express = require('express')
const app = express ()
const path = require('path')

app.listen(3000, () => {
console.log('Aplicación corriendo en el puerto 3000')
})
//Routes o rutas
app.use('/static', express.static('assets'));
app.get('/principal', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'principal.html'))
    })
app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'index.html'))
    })

app.get('/nosotros', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'nosotros.html'))
    })

app.get('/footer', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'component/footer.html'))
    })

app.get('/header', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'component/header.html'))
    })
//MAPAS
app.get('/mapa-accidentes', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'mapas/prueba_mapa.html'))
    })





