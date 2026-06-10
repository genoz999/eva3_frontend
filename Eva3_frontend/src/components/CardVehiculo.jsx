function CardVehiculo({
  vehiculo,
}) {
  return (
    <article
      className={`card ${
        vehiculo.permanente
          ? "permanente"
          : "temporal"
      }`}
    >
      <h3>
        {vehiculo.patente}
      </h3>

      <p>
        Marca: {vehiculo.marca}
      </p>

      <p>
        Tipo:
        {vehiculo.permanente
          ? " Permanente"
          : " Temporal"}
      </p>
    </article>
  );
}

export default CardVehiculo;