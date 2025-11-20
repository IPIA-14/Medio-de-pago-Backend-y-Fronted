import { useState, useEffect } from "react";

function MetodosPago() {
  const [pagos, setPagos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [otrosDetalles, setOtrosDetalles] = useState("");

  useEffect(() => {
    listarPagos();
  }, []);

  async function listarPagos() {
    const res = await fetch("http://localhost:5000/api/pagos");
    const data = await res.json();
    setPagos(data);
  }

  async function crearPago(e) {
    e.preventDefault();

    await fetch("http://localhost:5000/api/pagos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: nombre,
        otros_detalles: otrosDetalles,
      }),
    });
    setNombre("");
    setOtrosDetalles("");
    listarPagos();
  }

  async function eliminarPago(id) {
    await fetch(`http://localhost:5000/api/pagos/${id}`, {
      method: "DELETE",
    });

    listarPagos();
  }

  return (
    <div>
      <h2>Crear método de pago</h2>

      <form onSubmit={crearPago}>
        <input
          type="text"
          placeholder="Nombre del pago"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <input
          type="text"
          placeholder="Otros detalles"
          value={otrosDetalles}
          onChange={(e) => setOtrosDetalles(e.target.value)}
        />

        <button type="submit">Crear</button>
      </form>

      <h2>Lista de métodos de pago</h2>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Otros detalles</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {pagos.map((p) => (
            <tr key={p.num_pago}>
              <td>{p.num_pago}</td>
              <td>{p.nombre}</td>
              <td>{p.otros_detalles}</td>
              <td>
                <button onClick={() => eliminarPago(p.num_pago)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MetodosPago;
