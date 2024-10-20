import React from 'react';

const ImageUploader = ({ onImageChange }) => {
  return (
    <div className="upload-container">
      <input
        type="file"
        accept="image/*"
        id="file-upload"
        onChange={onImageChange}
        className="file-input"
      />
      <label htmlFor="file-upload" className="custom-file-upload">
        Inserte una imagen
      </label>
    </div>
  );
};

export default ImageUploader;
