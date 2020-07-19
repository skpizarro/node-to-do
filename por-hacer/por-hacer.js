const fs = require('fs');
const colors = require('colors/safe')

let listadoPorHacer = [];

const guardarDB = () =>{
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('./db/data.json',data, (err)=>{
        if (err) throw new Error ('No se pudeo guardar en la BD ',err)
    });
}


const cargarDB = ()=>{
    try {
        listadoPorHacer = require('../db/data.json');
        
    } catch (error) {
        listadoPorHacer = [];
    }
    
}


const crear = (descripcion)=>{
    cargarDB();

    let porHacer ={
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardarDB();
    return listadoPorHacer;
}

const listar =(completado)=>{
    cargarDB();

    let nuevoListadoPorHacer=[]
    if(completado === true){
        nuevoListadoPorHacer = listadoPorHacer.filter(tarea => tarea.completado)
    }else{
        nuevoListadoPorHacer = listadoPorHacer.filter(tarea => !tarea.completado)
    }

    for(let i=0; i< nuevoListadoPorHacer.length;i++){
        console.log(colors.green('=====Por Hacer====='));
        console.log(nuevoListadoPorHacer[i].descripcion);
        console.log(`Estado: ${nuevoListadoPorHacer[i].completado}`);
        console.log(colors.green('==================='));
    }
}

const actualizar =(descripcion, completado=true)=>{
    cargarDB();
    // nos devuelve el indice de la tarea con la descripcion que coincida
    let index = listadoPorHacer.findIndex(tarea =>tarea.descripcion === descripcion);
    if(index >= 0){
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;

    }else{
        return false;
    }
}

const borrar =(descripcion)=>{
    cargarDB();
    let nuevoListadoPorHacer = listadoPorHacer.filter(listado => listado.descripcion != descripcion);
    listadoPorHacer = nuevoListadoPorHacer;
    if(listadoPorHacer.length === nuevoListadoPorHacer.length){
        return 'No se pudo borrar la tarea de la BD';
    }else{
        guardarDB();
        return listadoPorHacer;
    }
    
}

module.exports={crear,listar,actualizar,borrar};