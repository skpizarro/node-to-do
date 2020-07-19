
const argv = require('./config/yargs').argv;
const {crear,listar,actualizar, borrar} = require('./por-hacer/por-hacer');


let comando = argv._[0];

switch (comando){
    case 'crear':
        let tarea = crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        listar(argv.completado);
        break;
    case 'actualizar':
        actualizar(argv.descripcion,argv.completado);
        console.log("Informacion actualizada ",argv);
        break;
    case 'borrar':
        let listado = borrar(argv.descripcion);
        console.log(listado);
        break;
    default:
        console.log(`Comando ${comando} no es reconocido`);
        break;


}