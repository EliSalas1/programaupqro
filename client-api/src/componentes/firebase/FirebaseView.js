// FirebaseView.js
import React, { useEffect, useState } from 'react';
import { database, ref, onValue } from '../../firebase'; // Importa la configuración de Firebase

function FirebaseView() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const dbRef = ref(database, '/'); // Ajusta la ruta según sea necesario para obtener los datos correctos

    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setData(data);  // Actualiza el estado cuando se reciben datos nuevos
      } else {
        setData(null);  // En caso de que no haya datos
      }
    });
  }, []);

  return (
    <div>
      <h1>Datos de Firebase</h1>
      {data ? (
        <table>
          <thead>
            <tr>
              <th>Día</th>
              <th>Count</th>
              <th>End Date</th>
              <th>Last Increment Source</th>
              <th>Manual Increment</th>
              <th>Winner Number</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(data).map((key) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{data[key].count || 'N/A'}</td>
                <td>{data[key].endDate || 'N/A'}</td>
                <td>{data[key].lastIncrementSource || 'N/A'}</td>
                <td>{data[key].manualIncrement ? 'Yes' : 'No'}</td>
                <td>{data[key].winnerNumber || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay datos disponibles</p>
      )}
    </div>
  );
}

export default FirebaseView;
