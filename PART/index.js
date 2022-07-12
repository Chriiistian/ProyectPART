//ejecutar python3

function ejecutar_datamining(){
    
    // const script = spawn("python3", ["/assets/py/Grafico_frec_acc.py"]);
    const { spawn } = require('child_process');
    const script = spawn('python3', ['assets/py/Datamining.py']);
    const chunks = [];
    
    // there is a data chunk from the script available to read
    script.stdout.on('data', (data) => {
        chunks.push(data)
    });
    
    // no more data left to read
    script.stdout.on('end', () => {
     
    });  
 }
 function ejecutar_mapa6(){   
    // const script = spawn("python3", ["/assets/py/Grafico_frec_acc.py"]);
    const { spawn } = require('child_process');
    const script = spawn('python3', ['assets/py/hr00-06.py']);
    const chunks = []; 
    // there is a data chunk from the script available to read
    script.stdout.on('data', (data) => {
        chunks.push(data)
    });    
    // no more data left to read
    script.stdout.on('end', () => {   
    });
 }

 function ejecutar_mapa7(){
    
    // const script = spawn("python3", ["/assets/py/Grafico_frec_acc.py"]);
    const { spawn } = require('child_process');
    const script = spawn('python3', ['assets/py/hr06-12.py']);
    const chunks = [];
    
    // there is a data chunk from the script available to read
    script.stdout.on('data', (data) => {
        chunks.push(data)
    });
    
    // no more data left to read
    script.stdout.on('end', () => {
     
    });
 }

 function ejecutar_mapa8(){
    
    // const script = spawn("python3", ["/assets/py/Grafico_frec_acc.py"]);
    const { spawn } = require('child_process');
    const script = spawn('python3', ['assets/py/hr12-19.py']);
    const chunks = [];
    
    // there is a data chunk from the script available to read
    script.stdout.on('data', (data) => {
        chunks.push(data)
    });
    
    // no more data left to read
    script.stdout.on('end', () => {
     
    });

    
  
 }

 function ejecutar_mapa9(){
    
    // const script = spawn("python3", ["/assets/py/Grafico_frec_acc.py"]);
    const { spawn } = require('child_process');
    const script = spawn('python3', ['assets/py/hr19-00.py']);
    const chunks = [];
    
    // there is a data chunk from the script available to read
    script.stdout.on('data', (data) => {
        chunks.push(data)
    });
    
    // no more data left to read
    script.stdout.on('end', () => {
     
    });

    
  
 }

 ejecutar_datamining();
 ejecutar_mapa6();
 ejecutar_mapa7();
 ejecutar_mapa8();
 ejecutar_mapa9();

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
    response.sendFile(path.resolve(__dirname, 'mapas/Map1.html'))
    })

app.get('/mapa-accidentes2', (request, response) => {
response.sendFile(path.resolve(__dirname, 'mapas/Map2.html'))
})

app.get('/mapa-accidentes3', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'mapas/Map3.html'))
    })

app.get('/mapa-accidentes4', (request, response) => {
response.sendFile(path.resolve(__dirname, 'mapas/Map4.html'))
})

app.get('/mapa-accidentes5', (request, response) => {
response.sendFile(path.resolve(__dirname, 'mapas/Map5.html'))
})
////////////////////////
app.get('/mapa-accidentes6', (request, response) => {
response.sendFile(path.resolve(__dirname, 'mapas/Map6.html'))
})

app.get('/mapa-accidentes7', (request, response) => {
response.sendFile(path.resolve(__dirname, 'mapas/Map7.html'))
})

app.get('/mapa-accidentes8', (request, response) => {
response.sendFile(path.resolve(__dirname, 'mapas/Map8.html'))
})

app.get('/mapa-accidentes9', (request, response) => {
response.sendFile(path.resolve(__dirname, 'mapas/Map9.html'))
})
                


