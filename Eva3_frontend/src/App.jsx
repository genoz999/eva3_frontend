import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import ListaVehiculos from "./components/ListaVehiculos";
import "./App.css";

function App() {
  const [vehiculos, setVehiculos] = useState([]);

  useEffect(() => {
    const datosGuardados = localStorage.getItem("vehiculos");

    if (datosGuardados) {
      setVehiculos(JSON.parse(datosGuardados));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "vehiculos",
      JSON.stringify(vehiculos)
    );
  }, [vehiculos]);

  const agregarVehiculo = (nuevoVehiculo) => {
    setVehiculos([...vehiculos, nuevoVehiculo]);
  };

  // Capacidad máxima exigida por la pauta
  const capacidadTotal = 10;

  // Cupos disponibles
  const disponibles = capacidadTotal - vehiculos.length;

  return (
    <>
      <header>
        <h1>Sistema de Gestión de Estacionamientos</h1>
      </header>

      <main>
        <h2>Cupos disponibles: {disponibles}</h2>

        {disponibles === 0 ? (
          <p> Estacionamiento lleno</p>
        ) : (
          <p>✅ Hay cupos disponibles</p>
        )}

        <Formulario
          agregarVehiculo={agregarVehiculo}
          disponibles={disponibles}
        />

        <ListaVehiculos
          vehiculos={vehiculos}
        />
      </main>

      <footer>
        <p>Front End | Martín Jara</p>
      </footer>
    </>
  );
}

export default App;