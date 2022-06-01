let fs = require('fs')
let tareas = require('./data/tareas.json')
let guardarJson = (dato) => fs.writeFileSync('./data/tareas.json',JSON.stringify(dato,null,4),'utf-8')

let archivoTareas = {
    leerJson: tareas,
    listarTareas : () => {
        for (let i = 0; i < tareas.length; i++) {
            console.log(`${i+1} . ${tareas[i].titulo} - ${tareas[i].estado}`); 
        }
    },

    listarForEach : function() {
        tareas.forEach((tarea,i) => {
            console.log(`${i+1} . ${tarea.titulo} - ${tarea.estado}`); 
        });
    },


     
    crearTareas: (titulo,estado) => {
        let tarea = {
            titulo,
           estado,
            
        }
      tareas.push(tarea)
      guardarJson(tareas)
        return console.log(`1- ${tarea.titulo} - ${tarea.estado}`);
    },

    eliminarTarea: (posicion, num1) => {
        tareas.splice(posicion, 1) 
        guardarJson(tareas);
        },


    filtrarPorEstado: (accion) =>{
        
      let tareasFiltradas = tareas.filter((tarea) =>  tarea.estado === accion)
     
      tareasFiltradas.forEach((tarea,i) => {
       return console.log(`${i+1} . ${tarea.titulo} - ${tarea.estado}`); 
    });


    }
}

 module.exports = archivoTareas