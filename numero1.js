// Simulación de cajero automático en JavaScript

// Base de datos de clientes 
const clientes = [
    { id: 1, nombre: "Juan", documento: "12345", pin: "1234", cuentas: [1001, 1002], saldo: [500000, 100000] },
    { id: 2, nombre: "Maria", documento: "67890", pin: "5678", cuentas: [1003], saldo: [750000] },
  ];
  
  // Función para validar el PIN del cliente
  function validarPIN(documento, pin) {
    const cliente = clientes.find((c) => c.documento === documento);1234
    if (cliente && cliente.pin === pin) {
      return cliente;
    }
    return null;
  }
  
  // Función para realizar un retiro
  function realizarRetiro(cliente, cuenta, monto) {
    const index = cliente.cuentas.indexOf(cuenta);
    if (index !== -1 && cliente.saldo[index] >= monto && monto % 50000 === 0) {
      cliente.saldo[index] -= monto;
      return true;
    }
    return false;
  }
  
  // Función para realizar un depósito
  function realizarDeposito(cliente, cuenta, monto, tipo) {
    const index = cliente.cuentas.indexOf(cuenta);
    if (index !== -1) {
      if (tipo === "efectivo") {
        cliente.saldo[index] += monto;
      } else if (tipo === "cheque") {
        // Lógica para procesar cheques
      }
      return true;
    }
    return false;
  }
  
  // Función para realizar una transferencia
  function realizarTransferencia(origen, destino, monto) {
    const origenIndex = clientes.findIndex((c) => c.cuentas.includes(origen));
    const destinoIndex = clientes.findIndex((c) => c.cuentas.includes(destino));
  
    if (origenIndex !== -1 && destinoIndex !== -1 && clientes[origenIndex].saldo >= monto) {
      clientes[origenIndex].saldo -= monto;
      clientes[destinoIndex].saldo += monto;
      return true;
    }
    return false;
  }
  
  // Función para consultar saldo
  function consultarSaldo(cliente, cuenta) {
    const index = cliente.cuentas.indexOf(cuenta);
    if (index !== -1) {
      return cliente.saldo[index];
    }
    return 0;
  }
  
  // Función principal para interactuar con el cliente
  function cajeroAutomatico() {
    const documento = prompt("Por favor, ingrese su documento de identidad:");
    const pin = prompt("Por favor, ingrese su PIN de 4 dígitos:");
  
    const cliente = validarPIN(documento, pin);
  
    if (cliente) {
      console.log(`Bienvenido, ${cliente.nombre}.\n`);
      let continuar = true;
  
      while (continuar) {
        const opcion = prompt(
          "Seleccione una opción:\n1. Realizar retiro\n2. Realizar depósito\n3. Realizar transferencia\n4. Consultar saldo\n5. Salir"
        );
  
        switch (opcion) {
          case "1":
            // Lógica para realizar retiro
            break;
          case "2":
            // Lógica para realizar depósito
            break;
          case "3":
            // Lógica para realizar transferencia
            break;
          case "4":
            // Lógica para consultar saldo
            break;
          case "5":
            continuar = false;
            break;
          default:
            console.log("Opción no válida. Por favor, seleccione una opción válida.");
        }
      }
    } else {
      console.log("PIN incorrecto. Por favor, intente nuevamente o contacte al banco.");
    }
  }
  
  // Iniciar el cajero automático
  cajeroAutomatico();
  