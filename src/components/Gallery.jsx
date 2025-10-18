import React, { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import './Gallery.css'

const Gallery = () => {
  const { t } = useLanguage()
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    { id: 1, src: '/assets/gallery-1.jpg', alt: 'Plongée corail Las Galeras', category: 'coral' },
    { id: 2, src: '/assets/gallery-2.jpg', alt: 'Tortue marine', category: 'fauna' },
    { id: 3, src: '/assets/gallery-3.jpg', alt: 'Poisson tropical', category: 'fauna' },
    { id: 4, src: '/assets/gallery-4.jpg', alt: 'Jardin de corail', category: 'coral' },
    { id: 5, src: '/assets/gallery-5.jpg', alt: 'Plage Las Galeras', category: 'beach' },
    { id: 6, src: '/assets/gallery-6.jpg', alt: 'Groupe de plongeurs', category: 'diving' },
    { id: 7, src: '/assets/gallery-7.jpg', alt: 'Raie manta', category: 'fauna' },
    { id: 8, src: '/assets/gallery-8.jpg', alt: 'Cascade Samaná', category: 'landscape' },
    { id: 9, src: '/assets/gallery-9.jpg', alt: 'Barracuda', category: 'fauna' },
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
              <img src={image.src} alt={image.alt} className="gallery-image" />
              <div className="gallery-overlay">
                <span className="gallery-icon">🔍</span>
                <p className="gallery-caption">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Fermer">
            ×
          </button>
          <button 
            className="lightbox-nav lightbox-prev" 
            onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
            aria-label="Image précédente"
          >
            ‹
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <p className="lightbox-caption">{selectedImage.alt}</p>
          </div>
          <button 
            className="lightbox-nav lightbox-next" 
            onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
            aria-label="Image suivante"
          >
            ›
          </button>
        </div>
      )}
    </section>
  )
}

export default Gallery

