# How to Use Local Images in Your React App

## Quick Setup Guide

### Step 1: Choose Your Method

#### Method A: Public Folder (Recommended for static images)
1. Copy your images to: `public/images/`
2. Use in components with absolute paths: `src="/images/your-image.jpg"`

#### Method B: Src Assets (For imported images)
1. Copy your images to: `src/assets/images/`
2. Import in components: `import myImage from '../assets/images/your-image.jpg'`
3. Use: `src={myImage}`

### Step 2: Copy Your Images

**For Method A (Public folder):**
```
my-capstone/
  public/
    images/          ← Put your images here
      logo.png
      hero-bg.jpg
      about-photo.jpg
      menu-item1.jpg
      etc.
```

**For Method B (Src assets):**
```
my-capstone/
  src/
    assets/
      images/        ← Put your images here
        logo.png
        hero-bg.jpg
        about-photo.jpg
        etc.
```

### Step 3: Update Your Components

#### Example: Header with Logo (Method A)
```javascript
<img 
  src="/images/logo.png" 
  alt="Your Logo" 
  className="logo-image"
/>
```

#### Example: Hero with Background (Method B)
```javascript
import heroImage from '../assets/images/hero-bg.jpg';

<img src={heroImage} alt="Hero Background" />
```

### Step 4: Common Image Types Supported
- `.jpg`, `.jpeg`
- `.png`
- `.gif`
- `.svg`
- `.webp`

### Step 5: Image Optimization Tips
1. **Resize images** before adding (recommended max width: 1920px)
2. **Compress images** to reduce file size
3. **Use appropriate formats**:
   - Photos: `.jpg`
   - Graphics/Icons: `.png` or `.svg`
   - Animations: `.gif`

### Current Setup in Your Project

I've already set up:
- ✅ `public/images/` folder
- ✅ `src/assets/images/` folder  
- ✅ Header component ready for logo
- ✅ CSS styling for logo
- ✅ Image fallback handling

### Next Steps:
1. Copy your images to `public/images/` folder
2. Update the image paths in components
3. Restart your development server: `npm start`

### Example Files to Add:
- `public/images/logo.png` - Your main logo
- `public/images/hero-bg.jpg` - Hero section background
- `public/images/about-photo.jpg` - About section image
- `public/images/greek-salad.jpg` - Menu item images
- `public/images/bruchetta.jpg`
- `public/images/lemon-dessert.jpg`