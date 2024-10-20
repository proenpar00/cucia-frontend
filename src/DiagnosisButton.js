import React from 'react';

const DiagnosisButton = ({ modelLoaded, onClick, loading }) => {
  return (
    <button
      className="load-model-btn"
      onClick={onClick}
      disabled={loading}
    >
      {loading ? (modelLoaded ? 'Cargando diagnóstico...' : 'Cargando modelo...') : (modelLoaded ? 'Mostrar diagnóstico' : 'Cargar modelo')}
    </button>
  );
};

export default DiagnosisButton;
