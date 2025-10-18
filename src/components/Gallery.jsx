import React, { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { getAssetPath } from '../utils/assets'
import './Gallery.css'

const Gallery = () => {
  const { t } = useLanguage()
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    { id: 1, src: getAssetPath('/assets/gallery-1.jpg'), altKey: 'gallery.image1', category: 'coral' },
    { id: 2, src: getAssetPath('/assets/gallery-2.jpg'), altKey: 'gallery.image2', category: 'fauna' },
    { id: 3, src: getAssetPath('/assets/gallery-3.jpg'), altKey: 'gallery.image3', category: 'fauna' },
    { id: 4, src: getAssetPath('/assets/gallery-4.jpg'), altKey: 'gallery.image4', category: 'coral' },
    { id: 5, src: getAssetPath('/assets/gallery-5.jpg'), altKey: 'gallery.image5', category: 'beach' },
    { id: 6, src: getAssetPath('/assets/gallery-6.jpg'), altKey: 'gallery.image6', category: 'diving' },
    { id: 7, src: getAssetPath('/assets/gallery-7.jpg'), altKey: 'gallery.image7', category: 'fauna' },
    { id: 8, src: getAssetPath('/assets/gallery-8.jpg'), altKey: 'gallery.image8', category: 'landscape' },
    { id: 9, src: getAssetPath('/assets/gallery-9.jpg'), altKey: 'gallery.image9', category: 'fauna' },
  ]

  const openLightbox = (image) => {
    setSelectedImage(image)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'auto'
  }

  const navigateImage = (direction) => {
    const currentIndex = images.findIndex(img => img.id === selectedImage.id)
    let newIndex

    if (direction === 'next') {
      newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1
    } else {
      newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1
    }

    setSelectedImage(images[newIndex])
  }

  return (
    <section id="gallery" className="gallery bg-sand">
      <div className="container">
        <div className="section-title">
          <h2>{t('gallery.title')}</h2>
          <p className="section-subtitle">
            {t('gallery.subtitle')}
          </p>
        </div>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <div 
              key={image.id} 
              className="gallery-item"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => openLightbox(image)}
            >
              <img src={image.src} alt={t(image.altKey)} className="gallery-image" />
              <div className="gallery-overlay">
                <span className="gallery-icon">🔍</span>
                <p className="gallery-caption">{t(image.altKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label={t('accessibility.closeModal')}>
            ×
          </button>
          <button 
            className="lightbox-nav lightbox-prev" 
            onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
            aria-label={t('accessibility.previousImage')}
          >
            ‹
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.src} alt={t(selectedImage.altKey)} />
            <p className="lightbox-caption">{t(selectedImage.altKey)}</p>
          </div>
          <button 
            className="lightbox-nav lightbox-next" 
            onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
            aria-label={t('accessibility.nextImage')}
          >
            ›
          </button>
        </div>
      )}
    </section>
  )
}

export default Gallery

