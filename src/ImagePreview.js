import React from 'react';

const ImagePreview = ({ previewUrl }) => {
  return previewUrl ? (
    <img src={previewUrl} alt="Preview" className="image-preview" />
  ) : (
    <div className="title-container">
      <h1 className="main-title">CUCIA</h1>
      <h4 className="subtitle">Cervix Uteri Cancer IA</h4>
    </div>
  );
};

export default ImagePreview;
