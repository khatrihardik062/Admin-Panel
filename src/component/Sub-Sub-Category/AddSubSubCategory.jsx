import React, { useState } from 'react';

export default function AddSubSubCategory() {
  const [formData, setFormData] = useState({
    name: '',
    designation: 0,
    rating: 0,
    order: 0,
    message: '',
  });

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    console.log('Image file:', imageFile);
    alert('Submitted!');
  };

  return (
    <div style={styles.page}>
      <p style={styles.breadcrumb}>Home / Sub Sub Category / Add</p>

      <div style={styles.card}>
        <h2 style={styles.heading}>Add Sub Sub Category</h2>

        <form onSubmit={handleSubmit}>
          <div style={styles.layout}>
            {/* Left Column: Image Box */}
            <div style={styles.leftCol}>
              <label style={styles.label}>Choose Image</label>

              {/* The whole box is a clickable label */}
              <label style={styles.imageBox}>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: 'none' }}
                />

                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Uploaded preview"
                    style={styles.previewImg}
                  />
                ) : (
                  <div>
                    <div style={{ fontSize: '32px', marginBottom: '8px' }}>☁️</div>
                    <div style={{ color: '#666', fontSize: '14px' }}>
                      Drag and drop or <b>Click to browse</b>
                    </div>
                  </div>
                )}
              </label>
            </div>

            {/* Right Column: Text & Number Fields */}
            <div style={styles.rightCol}>
              <div style={styles.field}>
                <label style={styles.label}>Category</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  style={styles.input}
                />
              </div>

              <div style={styles.field}>
                <label style={styles.label}>Sub Category</label>
                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  style={styles.input}
                />
              </div>

              <div style={styles.field}>
                <label style={styles.label}>Sub Sub Category</label>
                <input
                  type="text"
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  style={styles.input}
                />
              </div>

              <div style={styles.field}>
                <label style={styles.label}>Order</label>
                <input
                  type="number"
                  name="order"
                  value={formData.order}
                  onChange={handleChange}
                  style={styles.input}
                />
              </div>

              <div style={styles.field}>
                <label style={styles.label}>Message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  style={styles.input}
                />
              </div>
            </div>
          </div>

          <button type="submit" style={styles.button}>
            Add Testimonial
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: '#f3f4f6',
    minHeight: '100vh',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  breadcrumb: {
    color: '#666',
    fontSize: '14px',
    marginBottom: '15px',
  },
  card: {
    backgroundColor: '#ffffff',
    border: '1px solid #e5e7eb',
    borderRadius: '6px',
    padding: '24px',
    maxWidth: "100%",
    margin: '0 auto',
  },
  heading: {
    marginTop: 0,
    paddingBottom: '12px',
    borderBottom: '1px solid #e5e7eb',
    fontSize: '18px',
  },
  layout: {
    display: 'flex',
    gap: '24px',
    marginTop: '20px',
    flexWrap: 'wrap',
  },
  leftCol: {
    flex: '1',
    minWidth: '240px',
  },
  rightCol: {
    flex: '2',
    minWidth: '280px',
  },
  label: {
    display: 'block',
    fontSize: '14px',
    fontWeight: 'bold',
    marginBottom: '6px',
    color: '#333',
  },
  imageBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px dashed #ccc',
    borderRadius: '6px',
    backgroundColor: '#fafafa',
    height: '240px',
    cursor: 'pointer',
    textAlign: 'center',
    overflow: 'hidden',
  },
  previewImg: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  field: {
    marginBottom: '16px',
  },
  input: {
    width: '100%',
    padding: '8px 10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px',
    boxSizing: 'border-box',
  },
  button: {
    backgroundColor: '#5b32a3',
    color: '#ffffff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    fontSize: '14px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};