import React, { useState, useEffect } from 'react';
import './ImageSwiper.css';

const ImageModalSwiper = ({ images, projectName, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
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
      <div className="image-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* 닫기 버튼 */}
        <button className="image-modal-close" onClick={onClose}>
          ×
        </button>

        {/* 이미지 영역 */}
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

        {/* 하단 컨트롤 */}
        <div className="image-modal-controls">
          {/* 이전/다음 버튼 */}
          {images.length > 1 && (
            <>
              <button className="image-control-prev" onClick={prevImage}>
                ‹
              </button>
              
              {/* 페이지 표시 */}
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

export default ImageModalSwiper;