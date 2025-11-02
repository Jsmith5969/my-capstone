// Example of importing images from src/assets
import React from 'react';
// Uncomment these when you have actual images
// import heroImage from '../assets/images/hero-bg.jpg';
// import aboutImage from '../assets/images/about-photo.jpg';

const ImageExamples = () => {
  return (
    <div className="image-examples">
      <h2>Image Usage Examples</h2>
      
      {/* Method 1: Images from public folder (use absolute paths starting with /) */}
      <div className="public-images">
        <h3>Public Folder Images</h3>
        <img 
          src="/images/logo.png" 
          alt="Logo" 
          style={{width: '100px', height: 'auto'}}
          onError={(e) => {
            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzZiNzI4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvZ28gUGxhY2Vob2xkZXI8L3RleHQ+PC9zdmc+';
          }}
        />
        <img 
          src="/images/hero-bg.jpg" 
          alt="Hero Background" 
          style={{width: '200px', height: 'auto'}}
          onError={(e) => {
            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzZiNzI4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkhlcm8gSW1hZ2UgUGxhY2Vob2xkZXI8L3RleHQ+PC9zdmc+';
          }}
        />
      </div>

      {/* Method 2: Images from src/assets (imported) */}
      <div className="imported-images">
        <h3>Imported Images (from src/assets)</h3>
        <p>To use imported images, uncomment the import statements at the top and use like this:</p>
        <code>
          {`<img src={heroImage} alt="Hero" />`}
        </code>
        
        {/* Example with imported image (commented out until you add actual images) */}
        {/* <img src={heroImage} alt="Hero" style={{width: '200px'}} /> */}
        {/* <img src={aboutImage} alt="About" style={{width: '200px'}} /> */}
      </div>
    </div>
  );
};

export default ImageExamples;