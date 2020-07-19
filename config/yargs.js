


const descripcion ={
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado ={
    default:true,
    alias:'c',
    desc:'Marca como completada la tarea'
}

const argv = require('yargs')
.command('crear','Crea una tarea por hacer',{descripcion})
.command('actualizar','Actualiza el estado completado de una tarea',{descripcion,completado})
.command('listar','Lista todas las tareas por hacer o completadas',{completado})
.command('borrar','Elimina una tarea por hacer',{descripcion})
.help()
.argv;

module.exports = {argv};