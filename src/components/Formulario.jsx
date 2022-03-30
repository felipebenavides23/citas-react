import { useState, useEffect } from "react";
import Error from "./Error";
const Formulario = ({ Setpaciente, paciente, edit, setEdit }) => {
  const [nombreM, setnombreM] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [alta, setAlta] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [alerta, setAlerta] = useState(false);

  //efecto que llena el fomulario cuando cambia el state  de edit

  useEffect(() => {
    if (Object.keys(edit).length > 0) {
      const { nombreM, propietario, email, alta, sintomas } = edit;
      setnombreM(nombreM);
      setPropietario(propietario);
      setEmail(email);
      setAlta(alta);
      setSintomas(sintomas);
    }
  }, [edit]);

  const handleSubmit = (e) => {
    // detener las accciones por defecto del form
    e.preventDefault();
    // validacion de datos vacion
    if ([nombreM, propietario, email, alta, sintomas].includes("")) {
      setAlerta(true);
      return;
    } else {
      setAlerta(false);
      // objeto del paciente creacion
      const datos = {
        nombreM,
        propietario,
        email,
        alta,
        sintomas,
      };
      // generar id para los datos
      const GenerarID = () => {
        const Fecha = Date.now().toString(36);
        const Random = Math.random().toString(36).substr(2);

        return Fecha + Random;
      };
      // validacion para editar / crear
      if (edit.id) {
        // editar datos
        datos.id = edit.id;
        const PacienteActualizado = paciente.map((pacienteState) =>
          pacienteState.id == edit.id ? datos : pacienteState
        );

        Setpaciente(PacienteActualizado);
        setEdit({});
      } else {
        // crear datos
        datos.id = GenerarID();
        Setpaciente([...paciente, datos]);
        console.log("CREADO");
      }
      // limpiar datos input's
      setnombreM("");
      setPropietario("");
      setEmail("");
      setAlta("");
      setSintomas("");
    }
  };

  return (
    <div className=" md:w-1/2 lg:w-2/5 mt-7">
      <h2 className="font-black text-center text-3xl">Seguimiento Pacientes</h2>

      <p className="text-lg text-center mt-5 mb-7">
        Añade pacientes y{" "}
        <span className="text-blue-600 font-bold">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        action=""
        className="bg-white shadow-md rounded-lg py-10 px-5"
      >
        {alerta && (
          <Error>
            <p>todo los campos son obligatorios </p>
          </Error>
        )}
        <div className="mb-3">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre de la mascota{" "}
          </label>

          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full placeholder-gray-600 rounded-md p-2  mt-2"
            value={nombreM}
            onChange={(e) => {
              setnombreM(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre del propietario{" "}
          </label>

          <input
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full placeholder-gray-600 rounded-md p-2  mt-2"
            value={propietario}
            onChange={(e) => {
              setPropietario(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            email{" "}
          </label>

          <input
            id="email"
            type="email"
            placeholder="Email"
            className="border-2 w-full placeholder-gray-600 rounded-md p-2  mt-2"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            alta{" "}
          </label>

          <input
            id="alta"
            type="date"
            className="border-2 w-full placeholder-gray-600 rounded-md p-2  mt-2"
            value={alta}
            onChange={(e) => {
              setAlta(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="Sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas{" "}
          </label>

          <textarea
            id="Sintomas"
            type="text"
            placeholder="Sintomas"
            className="border-2 w-full placeholder-gray-600 rounded-md p-2  mt-2"
            value={sintomas}
            onChange={(e) => {
              setSintomas(e.target.value);
            }}
          />
        </div>

        <input
          type="submit"
          className="w-full bg-blue-600 p-3 text-white font-bold hover:bg-blue-800 hover:p-4 ease-in duration-200 rounded-md uppercase"
          value={edit.id ? "Editar paciente" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
