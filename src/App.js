import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Asegúrate de tener tus estilos
import Navbar from './NavBar';
import ImageUploader from './ImageUploader';
import ImagePreview from './ImagePreview';
import DiagnosisButton from './DiagnosisButton';

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [imageId, setImageId] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
      console.log("Imagen seleccionada:", file);
    }
  };

  const handleLoadModel = async () => {
    if (!selectedImage) {
      alert('Por favor, sube una imagen primero');
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append('image', selectedImage);

    try {
      console.log("Enviando imagen al backend...");
      const response = await axios.post('https://cucia-service.onrender.com/api/v1/image', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      console.log("Respuesta del backend recibida:", response.data);
      if (response.data && response.data.id) {
        setImageId(response.data.id);
        setModelLoaded(true);
        console.log("Modelo cargado correctamente. ID de la imagen:", response.data.id);
      } else {
        console.error("Error: No se recibió un ID válido para la imagen.");
        alert("Error al cargar el modelo: No se recibió un ID válido.");
      }
    } catch (error) {
      console.error('Error al cargar el modelo:', error);
      alert("Error al cargar el modelo: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleShowDiagnosis = async () => {
    if (!imageId) {
      alert('No hay diagnóstico disponible. Sube una imagen y carga el modelo primero.');
      return;
    }

    setLoading(true);
    try {
      console.log("Solicitando diagnóstico del backend para la imagen con ID:", imageId);
      const response = await axios.get(`https://cucia-service.onrender.com/api/v1/image/${imageId}`);
      console.log("Respuesta del diagnóstico recibida:", response.data);

      const base64Image = response.data.base64;
      if (base64Image) {
        setPreviewUrl(`data:image/jpeg;base64,${base64Image}`);
        console.log("Diagnóstico cargado y transformado en imagen.");
      } else {
        console.error("Error: No se recibió una imagen en base64 válida.");
      }
    } catch (error) {
      console.error('Error al obtener el diagnóstico:', error);
      alert("Error al obtener el diagnóstico: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <Navbar />
      <ImagePreview previewUrl={previewUrl} />
      <ImageUploader onImageChange={handleImageChange} />
      <DiagnosisButton 
        modelLoaded={modelLoaded} 
        onClick={modelLoaded ? handleShowDiagnosis : handleLoadModel} 
        loading={loading} 
      />
    </div>
  );
};

export default App;
