import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [paciente, Setpaciente] = useState([]);
  const [edit, setEdit] = useState({});
  //  traer la informacion de localstorage

  useEffect(() => {
    const obtenerLS = () => {
      const pacienteLS = JSON.parse(localStorage.getItem("paciente")) ?? [];
      Setpaciente(pacienteLS);
    };
    obtenerLS();
  }, []);

  // efecto para d mandar la informacion al localstorage

  useEffect(() => {
    localStorage.setItem("paciente", JSON.stringify(paciente));
  }, [paciente]);

  // fucnion que elimina pacientes
  const EliminandoPaciente = (id) => {
    const pacientesActu = paciente.filter((paciente) => paciente.id !== id);
    Setpaciente(pacientesActu);
  };

  return (
    <div className="container mx-auto mt-12 ">
      <Header />

      <div className="mt-10 md:flex">
        <Formulario
          Setpaciente={Setpaciente}
          paciente={paciente}
          edit={edit}
          setEdit={setEdit}
        />
        <ListadoPacientes
          paciente={paciente}
          setEdit={setEdit}
          EliminandoPaciente={EliminandoPaciente}
        />
      </div>
    </div>
  );
}
export default App;
