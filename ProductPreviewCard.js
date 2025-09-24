import React from 'react';
import './ProductPreviewCard.css';

const ProductPreviewCard = () => {
  return (
    <div className="product-preview-card">
      <div className="image-section">
        <img
          src="https://www.onegirl-oneworld.com/wp-content/uploads/2022/02/best-chanel-perfume-gabrielle-scaled.jpeg"
          alt="Gabrielle Essence Eau De Parfum"
        />
      </div>

      <div className="info-section">
        <h4 className="category"> P E R F U M E </h4>

        <h2 className="product-name"> Gabrielle Essence Eau De Parfum </h2>

        <p className="description">
          A floral, solar and voluptuous 
          interpretation composed by 
          Olivier Polge, Perfumer-Creator 
          for the House of CHANEL. </p>

        <div className="price">
          <span className="discounted-price"> $149.99 </span>

          <span className="original-price"> $169.99 </span>
        </div>
        
        <button className="add-to-cart"> 🛒 Add to Cart </button>

      </div>
    </div>
  );
};

export default ProductPreviewCard;
