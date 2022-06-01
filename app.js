let process = require('process')
let archivo = require('./funcionesDeTareas')

let accion = process.argv[2]
let accion2 = process.argv[3]
let accion3 = process.argv[4]

if (accion === undefined){
    console.log("\nTienes que pasar una acción :\n-Listar\n-Crear\n-Eliminar\n-Filtrar\n");
}else{


switch (accion.toLowerCase()) {
  
    case 'listar':
        console.log('\nListado de tareas');
        console.log("------------------");
        archivo.listarTareas();
        break;

    case 'crear':
      
        console.log('Tu tarea fue creada con exito');
        console.log('-------------------')
        archivo.crearTareas(accion2,accion3)
        break;

    case "eliminar": 

        console.log(`\nSe ha eliminado una tarea\n`);
        console.log('--------------------------')
        posicion = accion2;       
        archivo.eliminarTarea(posicion, 1);
        break;
       

    case 'filtrar':
        
        console.log(`Las tareas con estado ${accion2} son`);
        console.log('--------------------------')
        archivo.filtrarPorEstado(accion2)
        break;

      /*  case undefined :
           console.log("Atención - Tienes que pasarme una acción\n Las acciones disponibles son : listar , crear , filtrar");
           break; */

    default:
        console.log("No entiendo qué quieres hacer\n Las acciones disponibles son :listar , crear , filtrar");
        break;

}

}
