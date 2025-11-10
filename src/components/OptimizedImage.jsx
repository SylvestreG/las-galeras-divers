import React from 'react'
import { getAssetPath } from '../utils/assets'

/**
 * OptimizedImage component that uses WebP format with fallback
 * 
 * @param {string} src - Image source path (without extension)
 * @param {string} alt - Alt text for the image
 * @param {string} className - CSS class for the image
 * @param {object} props - Other props to pass to the img element
 */
const OptimizedImage = ({ src, alt, className = '', ...props }) => {
  // Remove file extension if present
  const basePath = src.replace(/\.(jpg|jpeg|png)$/i, '')
  
  const webpPath = getAssetPath(`${basePath}.webp`)
  const fallbackPath = getAssetPath(src)

  return (
    <picture>
      <source srcSet={webpPath} type="image/webp" />
      <img 
        src={fallbackPath} 
        alt={alt} 
        className={className}
        loading="lazy"
        {...props}
      />
    </picture>
  )
}

export default OptimizedImage

