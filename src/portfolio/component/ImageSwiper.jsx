import React, { useState, useEffect } from 'react';
import './ImageSwiper.css';

const ImageSwiper = ({ images, projectName, isOpen, onClose, cardPosition }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
      // 모달이 열릴 때 배경 스크롤 방지
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [isOpen]);

  if (!isOpen || !images || images.length === 0) return null;

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => prev === 0 ? images.length - 1 : prev - 1);
  };

  const currentImage = images[currentIndex];

  return (
    <div className="image-modal-overlay" onClick={onClose}>
      <div
        className="image-modal-container"
        style={{
          position: 'fixed',
          top: cardPosition ? `${cardPosition.top}px` : '50%',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1002,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="image-modal-close" onClick={onClose}>
          ×
        </button>

        <div className="image-modal-content">
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            onError={(e) => {
              console.error('Image load error:', currentImage.src);
              e.target.style.display = 'none';
            }}
          />
        </div>

        <div className="image-modal-controls">
          {images.length > 1 && (
            <>
              <button className="image-control-prev" onClick={prevImage}>
                ‹
              </button>
              <div className="image-page-indicator">
                {currentIndex + 1} / {images.length}
              </div>

              <button className="image-control-next" onClick={nextImage}>
                ›
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageSwiper;