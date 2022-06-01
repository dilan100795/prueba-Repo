let process = require('process')
let archivo = require('./funcionesDeTareas')

let accion = process.argv[2]
let accion2 = process.argv[3]
let accion3 = process.argv[4]

switch (accion) {
  
    case 'listar':
        console.log('Listado de tareas');
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
       case undefined :
           console.log(" , crear , eliminar ,  filtrar");
           break;


        default:
            console.log("No entiendo qué quieres hacer\n Las acciones disponibles son :listar , crear , filtrar");
            break;
  
            


}


