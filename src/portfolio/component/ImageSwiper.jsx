import React, { useState, useEffect } from 'react';

const ImageModalSwiper = ({ images, projectName, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 모달이 열릴 때 배경 스크롤 방지
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;

      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';

      return () => {
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';

        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  if (!isOpen || !images || images.length === 0) return null;

  const nextImage = () => {
    console.log('Next clicked, current:', currentIndex);
    setCurrentIndex((prev) => {
      const newIndex = (prev + 1) % images.length;
      console.log('Next index:', newIndex);
      return newIndex;
    });
  };

  const prevImage = () => {
    console.log('Prev clicked, current:', currentIndex);
    setCurrentIndex((prev) => {
      const newIndex = prev === 0 ? images.length - 1 : prev - 1;
      console.log('Prev index:', newIndex);
      return newIndex;
    });
  };

  const currentImage = images[currentIndex];

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        padding: 0
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          width: '600px',
          height: '500px',
          maxWidth: '90vw',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          position: 'relative',
          margin: 0,
          transform: 'none'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 헤더 */}
        <div style={{
          padding: '20px',
          borderBottom: '1px solid #eee',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#f8f9fa'
        }}>
          <h3 style={{ margin: 0, fontSize: '18px' }}>
            {projectName} 프로젝트
          </h3>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '24px',
              cursor: 'pointer',
              padding: '5px'
            }}
          >
            ×
          </button>
        </div>

        {/* 이미지 영역 */}
        <div style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          padding: '20px',
          minHeight: '300px'
        }}>
          {/* 현재 이미지 */}
          <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                borderRadius: '8px'
              }}
              onError={(e) => {
                console.error('Image load error:', currentImage.src);
                e.target.style.display = 'none';
              }}
              onLoad={() => {
                console.log('Image loaded:', currentImage.src);
              }}
            />
          </div>

          {/* 이전/다음 버튼 */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                style={{
                  position: 'absolute',
                  left: '20px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px',
                  fontSize: '20px',
                  cursor: 'pointer',
                  zIndex: 10
                }}
              >
                ‹
              </button>

              <button
                onClick={nextImage}
                style={{
                  position: 'absolute',
                  right: '20px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px',
                  fontSize: '20px',
                  cursor: 'pointer',
                  zIndex: 10
                }}
              >
                ›
              </button>
            </>
          )}

          {/* 카운터 */}
          <div style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            color: 'white',
            padding: '8px 12px',
            borderRadius: '15px',
            fontSize: '14px'
          }}>
            {currentIndex + 1} / {images.length}
          </div>

          {/* 도트 네비게이션 */}
          {images.length > 1 && (
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '8px'
            }}>
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    console.log('Dot clicked:', index);
                    setCurrentIndex(index);
                  }}
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    border: 'none',
                    backgroundColor: index === currentIndex ? 'white' : 'rgba(255, 255, 255, 0.5)',
                    cursor: 'pointer',
                    transform: index === currentIndex ? 'scale(1.2)' : 'scale(1)',
                    transition: 'all 0.2s ease'
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageModalSwiper;