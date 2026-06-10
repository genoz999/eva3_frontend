import { useState } from "react";

function Formulario({
  agregarVehiculo,
  disponibles,
}) {
  const [patente, setPatente] = useState("");
  const [marca, setMarca] = useState("");
  const [permanente, setPermanente] =
    useState(false);

  const manejarSubmit = (e) => {
    e.preventDefault();

    if (!patente || !marca) {
      alert("Complete todos los campos");
      return;
    }

    const regex = /^[A-Z]{4}[0-9]{2}$/;

    if (!regex.test(patente)) {
      alert("Formato válido: AAAA11");
      return;
    }

    if (disponibles <= 0) {
      alert("No quedan cupos");
      return;
    }

    agregarVehiculo({
      patente,
      marca,
      permanente,
    });

    setPatente("");
    setMarca("");
    setPermanente(false);
  };

  return (
    <form onSubmit={manejarSubmit}>
      <input
        type="text"
        placeholder="Patente"
        value={patente}
        onChange={(e) =>
          setPatente(
            e.target.value.toUpperCase()
          )
        }
      />

      <input
        type="text"
        placeholder="Marca"
        value={marca}
        onChange={(e) =>
          setMarca(e.target.value)
        }
      />

      <label>
        Permanente
        <input
          type="checkbox"
          checked={permanente}
          onChange={(e) =>
            setPermanente(
              e.target.checked
            )
          }
        />
      </label>

      <button type="submit">
        Registrar
      </button>
    </form>
  );
}

export default Formulario;