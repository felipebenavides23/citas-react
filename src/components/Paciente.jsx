import React from "react";

const Paciente = ({ paciente, setEdit, EliminandoPaciente }) => {
  const { nombreM, propietario, email, alta, sintomas, id } = paciente;

  const handleEliminar = () => {
    const respuesta = confirm("seguro que deseas eliminar este dato ");

    if (respuesta) {
      EliminandoPaciente(id);
    }
  };

  return (
    <div className="bg-white m-3 px-5 py-10 rounded-md shadow-md">
      <p className="font-bold uppercase">
        Nombre: <span className="font-normal  normal-case">{nombreM}</span>
      </p>

      <p className="font-bold uppercase">
        propietario:{" "}
        <span className="font-normal  normal-case">{propietario}</span>
      </p>

      <p className="font-bold uppercase">
        email: <span className="font-normal  normal-case">{email}</span>
      </p>

      <p className="font-bold uppercase">
        fecha alta: <span className="font-normal  normal-case">{alta}</span>
      </p>

      <p className="font-bold uppercase">
        sintomas: <span className="font-normal  normal-case"> {sintomas} </span>
      </p>

      <div className="flex justify-between  mt-4">
        <button
          type="button"
          className="py-2 px-9  bg-indigo-600 hover:bg-indigo-800 text-white uppercase rounded-lg"
          onClick={() => setEdit(paciente)}
        >
          editar
        </button>
        <button
          type="button"
          className="py-2 px-9  bg-red-600 hover:bg-red-800 text-white uppercase rounded-lg"
          onClick={handleEliminar}
        >
          {" "}
          eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
