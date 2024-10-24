import React from 'react';

const DiagnosisResult = ({ detections }) => {
  if (!detections || detections.length === 0) {
    return <p>No se han detectado objetos en la imagen.</p>;
  }

  return (
    <div className="diagnosis-result">
      <h3>Resultados del Diagnóstico</h3>
      <ul>
        {detections.map((detection, index) => (
          <li key={index}>
            <strong>Clase:</strong> {detection.class} <br />
            <strong>Confianza:</strong> {detection.confidence.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DiagnosisResult;
