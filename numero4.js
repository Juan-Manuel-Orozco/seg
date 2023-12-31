// Objeto para gestionar los turnos en el banco
const banco = {
    colaEspera: [],
    contadorTurnos: 0,
  
    // Función para que un cliente tome un turno
    tomarTurno: function () {
      this.contadorTurnos++;
      const turno = {
        numero: this.contadorTurnos,
      };
      this.colaEspera.push(turno);
      console.log(`Cliente tomó el turno número ${turno.numero}`);
    },
  
    // Función para llamar al siguiente cliente en la cola
    llamarCliente: function () {
      if (this.colaEspera.length === 0) {
        console.log("No hay clientes en la cola de espera.");
        return;
      }
  
      const turnoLlamado = this.colaEspera.shift();
      console.log(`Empleado llamó al cliente con el turno número ${turnoLlamado.numero}`);
    },
  
    // Función para mostrar la cola de espera
    mostrarColaEspera: function () {
      if (this.colaEspera.length === 0) {
        console.log("La cola de espera está vacía.");
        return;
      }
  
      console.log("Clientes en cola de espera:");
      this.colaEspera.forEach((turno, index) => {
        console.log(`Turno ${index + 1}: ${turno.numero}`);
      });
    },
  
    // Función para mostrar el contador de turnos
    mostrarContadorTurnos: function () {
      console.log(`Se han tomado ${this.contadorTurnos} turnos hasta el momento.`);
    },
  };
  
  // Ejemplo de uso
  banco.tomarTurno();
  banco.tomarTurno();
  banco.tomarTurno();
  banco.tomarTurno();
  banco.llamarCliente();
  banco.mostrarColaEspera();
  banco.mostrarContadorTurnos();