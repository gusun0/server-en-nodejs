const express = require('express');
const path = require('path'); /* para trabajar con rutas */
// creando el objeto de nuestra aplicación
const app = express();

// usando middleware
app.get('/',(req,res) =>{
  // res.send('Hola');
	
  // Toma la ruta absoluta
  res.sendFile(path.join(`${__dirname}/index.html`));
});


app.listen(3000, () => {
  console.log('server running on port',3000);
});

