import Paciente from "./Paciente";

const ListadoPacientes = ({ paciente, setEdit, EliminandoPaciente }) => {
  return (
    <div className=" md:w-1/2 lg:w-3/5  mt-4">
      {paciente && paciente.length ? (
        <>
          <div className="max-h-screen ">
            <h2 className="font-black text-center text-3xl">
              Listado Pacientes
            </h2>

            <p className="text-lg text-center mt-5 mb-7">
              Administra tus{" "}
              <span className="font-bold text-blue-600">
                {" "}
                Pacientes y Citas
              </span>
            </p>
            <div className="h-screen overflow-y-auto ">
              {paciente.map((paciente) => {
                return (
                  <Paciente
                    key={paciente.id}
                    paciente={paciente}
                    setEdit={setEdit}
                    EliminandoPaciente={EliminandoPaciente}
                  />
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <>
          <h2 className="font-black text-center text-3xl">No Hay Pacientes</h2>

          <p className="text-lg text-center mt-5 mb-7">
            Comienza a agregar pacientes{" "}
            <span className="font-bold text-blue-600">
              {" "}
              y se mostraran aqui{" "}
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
