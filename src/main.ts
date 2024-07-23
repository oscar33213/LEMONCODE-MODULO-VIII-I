type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

// EJERCICIO 1

// BLOQUE A: Queremos extraer la lista de paciente que están asignados a la especialidad de Pediatría

// USANDO FOR
const obtenPacientesAsignadosAPediatria = (pacientes: Pacientes[]): Pacientes[] => {
  const pacientesPediatria: Pacientes[] = [];
  for (let paciente of [...pacientes]) {
    if (paciente.especialidad === "Pediatra") {
      pacientesPediatria.push(paciente);
    }
  }
  return pacientesPediatria;
};

const pacientesPediatria = obtenPacientesAsignadosAPediatria(pacientes);
console.log(pacientesPediatria);

// USANDO WHILE
const obtenPacientesAsignadosAPediatriaWhile = (pacientes: Pacientes[]): Pacientes[] => {
  const pacientesPediatria: Pacientes[] = [];
  let i = 0;
  while (i < [...pacientes].length) {
    if (pacientes[i].especialidad === "Pediatra") {
      pacientesPediatria.push(pacientes[i]);
    }
    i++;
  }
  return pacientesPediatria;
};

const pacientesPediatria1 = obtenPacientesAsignadosAPediatriaWhile(pacientes);
console.log(pacientesPediatria1);

// BLOQUE B: Queremos extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.

// USANDO FOR
const obtenPacientesAsignadosAPediatriaMenoresDiez = (pacientes: Pacientes[]): Pacientes[] => {
  const pacientesPediatriaMenoresDiez: Pacientes[] = [];
  for (let paciente of [...pacientes]) {
    if (paciente.especialidad === "Pediatra" && paciente.edad < 10) {
      pacientesPediatriaMenoresDiez.push(paciente);
    }
  }
  return pacientesPediatriaMenoresDiez;
};

const PediatriaMenoresDiez = obtenPacientesAsignadosAPediatriaMenoresDiez(pacientes);
console.log(PediatriaMenoresDiez);

// USANDO WHILE
const obtenPacientesAsignadosAPediatriaWhileMenores = (pacientes: Pacientes[]): Pacientes[] => {
  const pacientesPediatria: Pacientes[] = [];
  let i = 0;
  while (i < [...pacientes].length) {
    if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) {
      pacientesPediatria.push(pacientes[i]);
    }
    i++;
  }
  return pacientesPediatria;
};

const whilemenoresdiez = obtenPacientesAsignadosAPediatriaWhileMenores(pacientes);
console.log(whilemenoresdiez);

// EJERCICIO 2: Queremos activar el protocolo de urgencia si cualquier de los pacientes tiene un ritmo cardíaco superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados.

// USANDO FOR
const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProtocolo = false;
  for (let paciente of [...pacientes]) {
    if (paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39) {
      activarProtocolo = true;
      break;
    }
  }
  return activarProtocolo;
};

console.log(activarProtocoloUrgencia(pacientes));


//USANDO WHILE

const activarProtocoloUrgencia2 = (pacientes: Pacientes[]): boolean => {
    let activarProtocolo = false;
    let i = 0;
    while (i < [...pacientes].length) {
      if (pacientes[i].frecuenciaCardiaca > 100 && pacientes[i].temperatura > 39) {
        activarProtocolo = true;
        break; 
      }
      i++;
    }
    return activarProtocolo;
  };
  
console.log(activarProtocoloUrgencia2(pacientes));



//EJERCICIO 3

//El pediatra no puede atender hoy a los pacientes, queremos reasignar los pacientes asignados a la especialidad de pediatría a la de medico de familia.


//USANDO FOR

const reasignarPacientesPediatria = (pacientes: Pacientes[]): Pacientes[] => {
    const nuevosPacientes: Pacientes[] = [];
    for (let paciente of [...pacientes]) {
      if (paciente.especialidad === "Pediatra") {
        nuevosPacientes.push({ ...paciente, especialidad: "Medico de familia" });
      } else {
        nuevosPacientes.push({ ...paciente });
      }
    }
    return nuevosPacientes;
  };
  
  const pacientesReasignados = reasignarPacientesPediatria(pacientes);
  console.log(pacientesReasignados);

//USANDO WHILE


  const reasignarPacientesPediatriaWhile = (pacientes: Pacientes[]): Pacientes[] => {
    const nuevosPacientes: Pacientes[] = [];
    let i = 0;
    while (i < pacientes.length) {
      const paciente = pacientes[i];
      if (paciente.especialidad === "Pediatra") {
        nuevosPacientes.push({ ...paciente, especialidad: "Medico de familia" });
      } else {
        nuevosPacientes.push({ ...paciente });
      }
      i++;
    }
    return nuevosPacientes;
  };
  
  const pacientesReasignadosWhile = reasignarPacientesPediatriaWhile(pacientes);
  console.log(pacientesReasignados);


//EJERCICIO 4
//Queremos saber si podemos mandar al Pediatra a casa (si no tiene pacientes asignados), comprobar si en la lista hay algún paciente asignado a pediatría


//USANDO FOR


const hayPacientesPediatriaFor = (pacientes: Pacientes[]): boolean => {
    for (let i = 0; i < [...pacientes].length; i++) {
      if (pacientes[i].especialidad === "Pediatra") {
        return true;
      }
    }
    return false;
  };

//USANDO WHILE

const hayPacientesPediatriaWhile = (pacientes: Pacientes[]): boolean => {
    let i = 0;
    while (i < [...pacientes].length) {
      if (pacientes[i].especialidad === "Pediatra") {
        return true;
      }
      i++;
    }
    return false;
  };
  
  console.log(hayPacientesPediatriaWhile(pacientes));


//EJERCICIO 5

//Queremos calcular el número total de pacientes que están asignados a la especialidad de Medico de familia, y lo que están asignados a Pediatría y a cardiología


interface NumeroPacientesPorEspecialidad {
    medicoDeFamilia: number;
    pediatria: number;
    cardiologia: number;
  }
  

const cuentaPacientesPorEspecialidadFor = (pacientes: Pacientes[]): NumeroPacientesPorEspecialidad => {
    let conteo: NumeroPacientesPorEspecialidad = {
      medicoDeFamilia: 0,
      pediatria: 0,
      cardiologia: 0
    };
  
    for (let i = 0; i < [...pacientes].length; i++) {
      const paciente = pacientes[i];
      switch (paciente.especialidad) {
        case "Medico de familia":
          conteo.medicoDeFamilia++;
          break;
        case "Pediatra":
          conteo.pediatria++;
          break;
        case "Cardiólogo":
          conteo.cardiologia++;
          break;
      }
    }
  
    return conteo;
  };
  
  const resultadoFor = cuentaPacientesPorEspecialidadFor(pacientes);
  console.log("Resultado con for:", resultadoFor);


//USANDO WHILE:

const cuentaPacientesPorEspecialidadWhile = (pacientes: Pacientes[]): NumeroPacientesPorEspecialidad => {
    let conteo: NumeroPacientesPorEspecialidad = {
      medicoDeFamilia: 0,
      pediatria: 0,
      cardiologia: 0
    };
  
    let i = 0;
    while (i < [...pacientes].length) {
      const paciente = pacientes[i];
      switch (paciente.especialidad) {
        case "Medico de familia":
          conteo.medicoDeFamilia++;
          break;
        case "Pediatra":
          conteo.pediatria++;
          break;
        case "Cardiólogo":
          conteo.cardiologia++;
          break;
      }
      i++;
    }
  
    return conteo;
  };
  
  const resultadoWhile = cuentaPacientesPorEspecialidadWhile(pacientes);
  console.log("Resultado con while:", resultadoWhile);