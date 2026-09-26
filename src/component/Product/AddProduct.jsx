import React, { useState } from 'react';

export default function AddProduct() {
  const [formData, setFormData] = useState({
    productName: '',
    parentCategory: '',
    subCategory: '',
    subSubCategory: '',
    material: '',
    color: '',
    productType: '',
    isBestSelling: '',
    isTopRated: '',
    isUpsell: '',
    actualPrice: '',
    salePrice: '',
    totalInStocks: '',
    order: '',
    description: '',
  });

  const [images, setImages] = useState({
    productImage: null,
    productImagePreview: null,
    backImage: null,
    backImagePreview: null,
    galleryImages: [],
    galleryPreviews: [],
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSingleImage = (e, key) => {
    const file = e.target.files[0];
    if (file) {
      setImages({
        ...images,
        [key]: file,
        [`${key}Preview`]: URL.createObjectURL(file),
      });
    }
  };

  const handleGalleryImages = (e) => {
    const files = Array.from(e.target.files);
    const newPreviews = files.map((file) => URL.createObjectURL(file));

    setImages({
      ...images,
      galleryImages: [...images.galleryImages, ...files],
      galleryPreviews: [...images.galleryPreviews, ...newPreviews],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    console.log('Images:', images);
    alert('Product added successfully!');
  };

  return (
    <div style={styles.page}>
      <p style={styles.breadcrumb}>Home / Product / Add</p>

      <div style={styles.card}>
        <form onSubmit={handleSubmit}>
          <div style={styles.layout}>
            {/* Left Column: 3 Image Upload Boxes */}
            <div style={styles.leftCol}>
              {/* Product Image */}
              <div style={styles.field}>
                <label style={styles.label}>Product Image</label>
                <label style={styles.imageBox}>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleSingleImage(e, 'productImage')}
                    style={{ display: 'none' }}
                  />
                  {images.productImagePreview ? (
                    <img
                      src={images.productImagePreview}
                      alt="Product preview"
                      style={styles.previewImg}
                    />
                  ) : (
                    <div>
                      <div style={styles.cloudIcon}>☁️</div>
                      <div style={styles.uploadText}>Drag and drop</div>
                    </div>
                  )}
                </label>
              </div>

              {/* Back Image */}
              <div style={styles.field}>
                <label style={styles.label}>Back Image</label>
                <label style={styles.imageBox}>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleSingleImage(e, 'backImage')}
                    style={{ display: 'none' }}
                  />
                  {images.backImagePreview ? (
                    <img
                      src={images.backImagePreview}
                      alt="Back preview"
                      style={styles.previewImg}
                    />
                  ) : (
                    <div>
                      <div style={styles.cloudIcon}>☁️</div>
                      <div style={styles.uploadText}>Drag and drop</div>
                    </div>
                  )}
                </label>
              </div>

              {/* Gallery Image */}
              <div style={styles.field}>
                <label style={styles.label}>Gallery Image</label>
                <label style={styles.imageBox}>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleGalleryImages}
                    style={{ display: 'none' }}
                  />
                  
                  <div>
                    <div style={styles.cloudIcon}>☁️</div>
                    <div style={styles.uploadText}>
                      {images.galleryPreviews.length > 0
                        ? `${images.galleryPreviews.length} image(s) selected`
                        : 'Drag and drop'}
                    </div>
                  </div>
                </label>

                {/* Gallery Mini Previews */}
                {images.galleryPreviews.length > 0 && (
                  <div style={styles.galleryPreviewRow}>
                    {images.galleryPreviews.map((src, index) => (
                      <img
                        key={index}
                        src={src}
                        alt="gallery-thumb"
                        style={styles.galleryThumb}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: 2-Column Grid Inputs */}
            <div style={styles.rightCol}>
              {/* Product Name */}
              <div style={styles.field}>
                <label style={styles.label}>Product Name</label>
                <input
                  type="text"
                  name="productName"
                  placeholder="Product Name"
                  value={formData.productName}
                  onChange={handleChange}
                  style={styles.input}
                />
              </div>

              {/* Select Parent Category */}
              <div style={styles.field}>
                <label style={styles.label}>Select Parent Category</label>
                <select
                  name="parentCategory"
                  value={formData.parentCategory}
                  onChange={handleChange}
                  style={styles.input}
                >
                  <option value="">Nothing Selected</option>
                  <option value="electronics">Electronics</option>
                  <option value="fashion">Fashion</option>
                </select>
              </div>

              {/* Select Sub Category */}
              <div style={styles.field}>
                <label style={styles.label}>Select Sub Category</label>
                <select
                  name="subCategory"
                  value={formData.subCategory}
                  onChange={handleChange}
                  style={styles.input}
                >
                  <option value="">Select Category</option>
                  <option value="men">Men</option>
                  <option value="women">Women</option>
                </select>
              </div>

              {/* Select Sub Sub Category */}
              <div style={styles.field}>
                <label style={styles.label}>Select Sub Sub Category</label>
                <select
                  name="subSubCategory"
                  value={formData.subSubCategory}
                  onChange={handleChange}
                  style={styles.input}
                >
                  <option value="">Nothing Selected</option>
                  <option value="shirts">Shirts</option>
                  <option value="shoes">Shoes</option>
                </select>
              </div>

              {/* Select Material */}
              <div style={styles.field}>
                <label style={styles.label}>Select Material</label>
                <select
                  name="material"
                  value={formData.material}
                  onChange={handleChange}
                  style={styles.input}
                >
                  <option value="">Nothing Selected</option>
                  <option value="cotton">Cotton</option>
                  <option value="polyester">Polyester</option>
                </select>
              </div>

              {/* Select Color */}
              <div style={styles.field}>
                <label style={styles.label}>Select Color</label>
                <select
                  name="color"
                  value={formData.color}
                  onChange={handleChange}
                  style={styles.input}
                >
                  <option value="">Nothing Selected</option>
                  <option value="red">Red</option>
                  <option value="blue">Blue</option>
                  <option value="black">Black</option>
                </select>
              </div>

              {/* Select Product Type */}
              <div style={styles.field}>
                <label style={styles.label}>Select Product Type</label>
                <select
                  name="productType"
                  value={formData.productType}
                  onChange={handleChange}
                  style={styles.input}
                >
                  <option value="">Nothing Selected</option>
                  <option value="simple">Simple</option>
                  <option value="variable">Variable</option>
                </select>
              </div>

              {/* Is Best Selling */}
              <div style={styles.field}>
                <label style={styles.label}>Is Best Selling</label>
                <select
                  name="isBestSelling"
                  value={formData.isBestSelling}
                  onChange={handleChange}
                  style={styles.input}
                >
                  <option value="">Nothing Selected</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              {/* Is Top Rated */}
              <div style={styles.field}>
                <label style={styles.label}>Is Top Rated</label>
                <select
                  name="isTopRated"
                  value={formData.isTopRated}
                  onChange={handleChange}
                  style={styles.input}
                >
                  <option value="">Nothing Selected</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              {/* Is Upsell */}
              <div style={styles.field}>
                <label style={styles.label}>Is Upsell</label>
                <select
                  name="isUpsell"
                  value={formData.isUpsell}
                  onChange={handleChange}
                  style={styles.input}
                >
                  <option value="">Nothing Selected</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              {/* Actual Price */}
              <div style={styles.field}>
                <label style={styles.label}>Actual Price</label>
                <input
                  type="number"
                  name="actualPrice"
                  placeholder="Actual Price"
                  value={formData.actualPrice}
                  onChange={handleChange}
                  style={styles.input}
                />
              </div>

              {/* Sale Price */}
              <div style={styles.field}>
                <label style={styles.label}>Sale Price</label>
                <input
                  type="number"
                  name="salePrice"
                  placeholder="Sale Price"
                  value={formData.salePrice}
                  onChange={handleChange}
                  style={styles.input}
                />
              </div>

              {/* Total In Stocks */}
              <div style={styles.field}>
                <label style={styles.label}>Total In Stocks</label>
                <input
                  type="number"
                  name="totalInStocks"
                  placeholder="Total In Stocks"
                  value={formData.totalInStocks}
                  onChange={handleChange}
                  style={styles.input}
                />
              </div>

              {/* Order */}
              <div style={styles.field}>
                <label style={styles.label}>Order</label>
                <input
                  type="number"
                  name="order"
                  placeholder="Order"
                  value={formData.order}
                  onChange={handleChange}
                  style={styles.input}
                />
              </div>
            </div>
          </div>

          {/* Full Width Description Area */}
          <div style={{ marginTop: '20px' }}>
            <label style={styles.label}>Description</label>
            <div style={styles.editorBox}>
              <div style={styles.toolbar}>
                <span style={{ fontWeight: 'bold', marginRight: '10px' }}>Normal :</span>
                <span style={styles.toolItem}><b>B</b></span>
                <span style={styles.toolItem}><i>I</i></span>
                <span style={styles.toolItem}><u>U</u></span>
                <span style={styles.toolItem}><s>S</s></span>
                <span style={styles.toolItem}>🔗</span>
                <span style={styles.toolItem}>≡</span>
                <span style={styles.toolItem}>1.</span>
                <span style={styles.toolItem}>Tx</span>
              </div>
              <textarea
                name="description"
                rows="5"
                placeholder="Enter description..."
                value={formData.description}
                onChange={handleChange}
                style={styles.textarea}
              />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" style={styles.button}>
            Add Product
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
    maxWidth: '100%',
    margin: '0 auto',
  },
  layout: {
    display: 'flex',
    gap: '24px',
    flexWrap: 'wrap',
  },
  leftCol: {
    flex: '1',
    minWidth: '260px',
  },
  rightCol: {
    flex: '2.2',
    minWidth: '320px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '14px 18px',
    alignContent: 'start',
  },
  label: {
    display: 'block',
    fontSize: '13px',
    fontWeight: 'bold',
    marginBottom: '6px',
    color: '#444',
  },
  imageBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px dashed #d1d5db',
    borderRadius: '6px',
    backgroundColor: '#fafafa',
    height: '110px',
    cursor: 'pointer',
    textAlign: 'center',
    overflow: 'hidden',
  },
  cloudIcon: {
    fontSize: '24px',
    marginBottom: '2px',
  },
  uploadText: {
    color: '#9ca3af',
    fontSize: '13px',
  },
  previewImg: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  galleryPreviewRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
    marginTop: '6px',
  },
  galleryThumb: {
    width: '45px',
    height: '45px',
    objectFit: 'cover',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  field: {
    marginBottom: '12px',
  },
  input: {
    width: '100%',
    padding: '8px 10px',
    border: '1px solid #d1d5db',
    borderRadius: '4px',
    fontSize: '13px',
    backgroundColor: '#fff',
    boxSizing: 'border-box',
    outline: 'none',
  },
  editorBox: {
    border: '1px solid #d1d5db',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    backgroundColor: '#f9fafb',
    borderBottom: '1px solid #d1d5db',
    padding: '8px 12px',
    fontSize: '13px',
    color: '#555',
  },
  toolItem: {
    cursor: 'pointer',
    userSelect: 'none',
  },
  textarea: {
    width: '100%',
    border: 'none',
    padding: '10px',
    fontSize: '13px',
    boxSizing: 'border-box',
    outline: 'none',
    resize: 'vertical',
  },
  button: {
    backgroundColor: '#5b32a3',
    color: '#ffffff',
    border: 'none',
    padding: '10px 24px',
    borderRadius: '4px',
    fontSize: '14px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '20px',
  },
};