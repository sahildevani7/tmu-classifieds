import React from "react";

const AdList = ({ ads }) => {
  const listContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: '20px',
    margin: '20px auto',
    maxWidth: '1200px', 
  };

  const adStyle = {
    flex: '0 0 calc(33.33% - 20px)',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9',
    border: '1px solid #ddd',
    boxSizing: 'border-box',
  };

  const titleStyle = {
    margin: '0 0 10px 0',
    color: '#333',
    fontSize: '20px',
  };

  const descriptionStyle = {
    margin: '0 0 10px 0',
    fontSize: '16px',
  };

  const contactStyle = {
    fontWeight: 'bold',
  };

  const imageStyle = {
    width: '100%', 
    height: 'auto', 
    marginBottom: '10px',
    borderRadius: '8px',
  };

  return (
    <div style={listContainerStyle}>
      {ads.map((ad, index) => (
        <div key={index} style={adStyle}>
          <h3 style={titleStyle}>{ad.title}</h3>
          {ad.image && <img src={URL.createObjectURL(ad.image)} alt="Ad" style={imageStyle} />}
          <p style={descriptionStyle}>{ad.description}</p>
          <p style={contactStyle}>Contact: {ad.contact}</p>
        </div>
      ))}
    </div>
  );
};

export default AdList;
