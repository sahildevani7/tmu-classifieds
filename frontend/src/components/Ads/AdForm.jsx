import React, { useState } from "react";

const AdForm = ({ onAdSubmit }) => {
  const [ad, setAd] = useState({ title: "", description: "", contact: "", image: null });

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdSubmit(ad);
    setAd({ title: "", description: "", contact: "", image: null });
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    maxWidth: '500px',
    margin: '20px auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
  };

  const inputStyle = {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  };

  const textareaStyle = {
    ...inputStyle,
    height: '100px',
    resize: 'vertical',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input
        type="text"
        placeholder="Item Title"
        value={ad.title}
        onChange={(e) => setAd({ ...ad, title: e.target.value })}
        style={inputStyle}
      />
      <textarea
        placeholder="Description"
        value={ad.description}
        onChange={(e) => setAd({ ...ad, description: e.target.value })}
        style={textareaStyle}
      />
      <input
        type="text"
        placeholder="Contact Info"
        value={ad.contact}
        onChange={(e) => setAd({ ...ad, contact: e.target.value })}
        style={inputStyle}
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setAd({ ...ad, image: e.target.files[0] })}
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}>
        Post Ad
      </button>
    </form>
  );
};

export default AdForm;
