import React from 'react';
import { series } from './data/data';
import { Serie } from './models/serie';
import './App.css';

function App() {
  const calcularPromedioTemporadas = (): number => {
    const total = series.reduce((acc, serie) => acc + serie.seasons, 0);
    return total / series.length;
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Series de Televisión</h1>
      
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Channel</th>
            <th scope="col">Seasons</th>
          </tr>
        </thead>
        <tbody>
          {series.map((serie: Serie) => (
            <tr key={serie.id}>
              <th scope="row">{serie.id}</th>
              <td>{serie.name}</td>
              <td>{serie.channel}</td>
              <td>{serie.seasons}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-3">
        <p><strong>Seasons average: {calcularPromedioTemporadas().toFixed(2)}</strong></p>
      </div>
    </div>
  );
}

export default App;
