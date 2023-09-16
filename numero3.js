// Definir variables para estadísticas
let totalUsuariosAtendidos = 0;
let totalLlamadasTelefonicas = 0;
let totalAsesorias = 0;
let totalEstudiantesAtendidos = 0;
let totalDirectivosAtendidos = 0;

// Función para solicitar información del usuario
function solicitarInformacionUsuario() {
  const cedula = prompt("Ingrese su número de cédula:");
  const tipoAtencion = prompt("Seleccione el tipo de atención:\n1. Terminal para llamada telefónica\n2. Asesoría");

  if (tipoAtencion === "1") {
    totalUsuariosAtendidos++;
    totalLlamadasTelefonicas++;
    console.log("Atención registrada: Terminal para llamada telefónica");
  } else if (tipoAtencion === "2") {
    const tipoAsesoria = prompt("Seleccione el tipo de asesoría:\n1. Estudiante\n2. Directivo");

    if (tipoAsesoria === "1") {
      totalUsuariosAtendidos++;
      totalAsesorias++;
      totalEstudiantesAtendidos++;
      console.log("Atención registrada: Asesoría para estudiante");
    } else if (tipoAsesoria === "2") {
      totalUsuariosAtendidos++;
      totalAsesorias++;
      totalDirectivosAtendidos++;
      console.log("Atención registrada: Asesoría para directivo");
    } else {
      console.log("Opción de asesoría no válida");
    }
  } else {
    console.log("Opción de atención no válida");
  }

  const deseaOtraAtencion = confirm("¿Desea atender a otro usuario?");
  if (deseaOtraAtencion) {
    solicitarInformacionUsuario();
  } else {
    mostrarEstadisticas();
  }
}

// Función para mostrar estadísticas
function mostrarEstadisticas() {
  console.log("\nEstadísticas de atención:");
  console.log(`- Cantidad total de usuarios atendidos: ${totalUsuariosAtendidos}`);
  console.log(`- Cantidad de usuarios atendidos en terminal para llamada telefónica: ${totalLlamadasTelefonicas}`);
  console.log(`- Cantidad de usuarios atendidos en asesoría: ${totalAsesorias}`);
  console.log(`- Cantidad de estudiantes atendidos en asesoría: ${totalEstudiantesAtendidos}`);
  console.log(`- Cantidad de directivos atendidos en asesoría: ${totalDirectivosAtendidos}`);
}

// Iniciar el programa
solicitarInformacionUsuario();
12345