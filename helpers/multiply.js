const fs = require('fs');
const colors = require('colors/safe');
const { resolve } = require('path');

/*const createTableFile = (base = 1)=>{
  return new Promise((res,rej)=>{
    console.log('=================================');
    console.log(`           Tabla del ${base} `);
    console.log('=================================');
    let output = '';

    for (let i = 1; i <= 10; i++) {
      output+=`${base} x ${i} = ${base*i}\n`;
    }
    console.log(output);
    fs.writeFileSync(`table-${base}.txt`,output);
    resolve('Table created');
  })
  
}*/
const createTableFile = async (base = 1, listar,hasta=10)=>{
    try{
      if(listar){
        console.log('=================================');
        console.log(`           Tabla del ${base} `);
        console.log('=================================');
      }
      let output = '';
  
      for (let i = 1; i <= hasta; i++) {
        output+=`${base} x ${i} = ${base*i}\n`;
      }
      if(listar) console.log(colors.rainbow(output));
      fs.writeFileSync(`./salida/table-${base}.txt`,output);
  
      return 'Table created';
    }catch(err){
      throw err;
    }
}

module.exports = {
  createTableFile
}