/**
 * Helper function to get the correct asset path
 * Works with both local development and GitHub Pages deployment
 */
export const getAssetPath = (path) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  // Combine with BASE_URL (which includes trailing slash)
  return `${import.meta.env.BASE_URL}${cleanPath}`
}

