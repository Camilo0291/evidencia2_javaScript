// Array para almacenar las tareas
let tareas = [];
// Array para almacenar los usuarios registrados
let usuarios = [];

// Función para imprimir el menú de opciones
function imprimirMenu() {
  console.log('\nMenú de opciones:');
  console.log('1. Lista tareas');
  console.log('2. Agregar tarea');
  console.log('3. Completar tarea');
  console.log('4. Filtrar tareas activas');
  console.log('5. Filtrar tareas completadas');
  console.log('6. Salir');
}

// Función para registrar un nuevo usuario
function registrarUsuario() {
  const nombreUsuario = prompt('Ingrese un nombre de usuario: ');
  const contraseñaUsuario = prompt('Ingrese una contraseña: ');
  usuarios.push({ usuario: nombreUsuario, contraseña: contraseñaUsuario });
  console.log('Usuario registrado exitosamente.');
  menuPrincipal();
}

// Función para validar el inicio de sesión
function validarInicioSesion(intentos = 0) {
  let opcion = '';
  while (opcion.toLowerCase() !== 's' && opcion.toLowerCase() !== 'n') {
    if (intentos >= 3) {
      console.log('Se alcanzó el máximo de intentos. Finalizando la ejecución.');
      return; // Finalizar la ejecución
    }
    opcion = prompt('¿Desea registrarse como un nuevo usuario? (s/n): ');
    intentos++;
  }

  if (opcion.toLowerCase() === 's') {
    registrarUsuario();
  } else {
    console.log('Iniciando sesión...');
    menuPrincipal();
  }
}



// Función para el menú principal
function menuPrincipal() {
  imprimirMenu();
  const opcion = prompt('Seleccione una opción: ');

  switch (opcion) {
    case '1':
      listarTareas();
      break;
    case '2':
      agregarTarea();
      break;
    case '3':
      completarTarea();
      break;
    case '4':
      filtrarTareasActivas();
      break;
    case '5':
      filtrarTareasCompletadas();
      break;
    case '6':
      console.log('Saliendo de la aplicación.');
      break;
    default:
      console.log('Opción no válida.');
      break;
  }
}

// Función para listar tareas
function listarTareas() {
  console.log('\nLista de tareas:');
  if (tareas.length === 0) {
    console.log('No hay tareas.');
  } else {
    tareas.forEach(tarea => {
      console.log(`ID: ${tarea.id}, Nombre: ${tarea.nombre}, Descripción: ${tarea.descripcion}, Estado: ${tarea.estado}`);
    });
  }
  menuPrincipal(); // Volver al menú principal
}

// Función para agregar tarea
function agregarTarea() {
  const id = generarId();
  const nombre = prompt('Ingrese el nombre de la tarea: ');
  const descripcion = prompt('Ingrese la descripción de la tarea: ');

  const nuevaTarea = {
    id: id,
    nombre: nombre,
    descripcion: descripcion,
    estado: 'activo'
  };

  tareas.push(nuevaTarea);
  console.log('Tarea agregada correctamente.');
  menuPrincipal(); // Volver al menú principal
}

// Función para generar un ID único para la tarea
function generarId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

// Función para completar tarea
function completarTarea() {
  const id = prompt('Ingrese el ID de la tarea que desea completar: ');

  const tareaEncontrada = tareas.find(tarea => tarea.id === id);
  if (tareaEncontrada) {
    tareaEncontrada.estado = 'completado';
    console.log('Tarea completada correctamente.');
  } else {
    console.log('No se encontró ninguna tarea con ese ID.');
  }

  menuPrincipal(); // Volver al menú principal
}

// Función para filtrar tareas activas
function filtrarTareasActivas() {
  const tareasActivas = tareas.filter(tarea => tarea.estado === 'activo');
  console.log('\nTareas activas:');
  if (tareasActivas.length === 0) {
    console.log('No hay tareas activas.');
  } else {
    tareasActivas.forEach(tarea => {
      console.log(`ID: ${tarea.id}, Nombre: ${tarea.nombre}, Descripción: ${tarea.descripcion}, Estado: ${tarea.estado}`);
    });
  }
  menuPrincipal(); // Volver al menú principal
}

// Función para filtrar tareas completadas
function filtrarTareasCompletadas() {
  const tareasCompletadas = tareas.filter(tarea => tarea.estado === 'completado');
  console.log('\nTareas completadas:');
  if (tareasCompletadas.length === 0) {
    console.log('No hay tareas completadas.');
  } else {
    tareasCompletadas.forEach(tarea => {
      console.log(`ID: ${tarea.id}, Nombre: ${tarea.nombre}, Descripción: ${tarea.descripcion}, Estado: ${tarea.estado}`);
    });
  }
  menuPrincipal(); // Volver al menú principal
}

// Función principal para iniciar la aplicación
function iniciarAplicacion() {
  console.log('Bienvenido a la aplicación de gestión de tareas.');
  validarInicioSesion();
}

// Llamar a la función principal para iniciar la aplicación
iniciarAplicacion();
