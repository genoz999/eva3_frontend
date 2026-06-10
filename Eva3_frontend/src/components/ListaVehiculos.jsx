import CardVehiculo from "./CardVehiculo";

function ListaVehiculos({
  vehiculos,
}) {
  return (
    <section className="lista-vehiculos">
      {vehiculos.map((vehiculo) => (
        <CardVehiculo
          key={vehiculo.patente}
          vehiculo={vehiculo}
        />
      ))}
    </section>
  );
}

export default ListaVehiculos;