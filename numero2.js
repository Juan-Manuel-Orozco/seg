// Definir el objeto Hotel
const hotel = {
    habitaciones: {
      individual: { tipo: "individual", capacidadMax: 2, disponible: 5 },
      doble: { tipo: "doble", capacidadMax: 4, disponible: 10 },
      familiar: { tipo: "familiar", capacidadMax: 6, disponible: 3 },
    },
    reservas: [],
    personasOcupadas: 0,
    mascotas: 0,
    
    // Función para hacer una reserva
    reservar: function (tipoHabitacion, nombre, pais, numPersonas, periodoEstadia, traeMascota) {
      const habitacion = this.habitaciones[tipoHabitacion];
      if (!habitacion) {
        console.log(`Tipo de habitación inválido: ${tipoHabitacion}`);
        return;
      }
  
      if (numPersonas > habitacion.capacidadMax) {
        console.log(`No se puede exceder la capacidad máxima de ${habitacion.capacidadMax} personas.`);
        return;
      }
  
      if (tipoHabitacion === "familiar" && !traeMascota) {
        console.log("Las habitaciones familiares solo están disponibles para huéspedes con mascotas.");
        return;
      }
  
      if (habitacion.disponible <= 0) {
        console.log(`No hay habitaciones ${habitacion.tipo} disponibles.`);
        return;
      }
  
      const reserva = {
        tipoHabitacion,
        nombre,
        pais,
        numPersonas,
        periodoEstadia,
        traeMascota,
      };
  
      this.reservas.push(reserva);
      this.personasOcupadas += numPersonas;
      if (traeMascota) {
        this.mascotas++;
      }
      habitacion.disponible--;
      console.log(`Reserva realizada para ${nombre}.`);
    },
    
    // Función para obtener el número de habitaciones reservadas
    obtenerNumHabitacionesReservadas: function () {
      return this.reservas.length;
    },
  };
  
  // Ejemplos de reservas
  hotel.reservar("individual", "Cliente 1", "España", 2, "del 01/10 al 05/10", false);
  hotel.reservar("doble", "Cliente 2", "Francia", 3, "del 10/10 al 15/10", true);
  hotel.reservar("familiar", "Cliente 3", "Italia", 6, "del 05/11 al 12/11", true);
  
  // Obtener el número de habitaciones reservadas
  const numHabitacionesReservadas = hotel.obtenerNumHabitacionesReservadas();
  console.log(`El hotel tiene ${numHabitacionesReservadas} habitaciones reservadas.`);