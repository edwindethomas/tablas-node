const {createTableFile} = require('./helpers/multiply.js');
const argv = require('./config/yargs.js');
const colors = require('colors/safe');

console.clear();

console.log(colors.green( `Tabla del ${argv.b} creada`));

createTableFile(argv.b,argv.l,argv.h)
  .then(nombreArchivo=>console.log)
  .catch(err=>console.log)