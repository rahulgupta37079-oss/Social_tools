# ImageTools - Professional Image Editing Suite

A comprehensive, browser-based image editing toolkit built with Hono and Cloudflare Pages. Features 12 powerful tools with a sleek black, white, and yellow design.

## 🌟 Live Demo

**Production URL**: https://3000-ip8cfyoccqplvzbnmsrg1-b9b802c4.sandbox.novita.ai

## ✨ Features Completed

### Image Optimization Tools
- **Compress Image** (`/compress`) - Reduce file size with quality control (10-100%)
- **Resize Image** (`/resize`) - Change dimensions with aspect ratio lock
- **Upscale Image** (`/upscale`) - Increase resolution 2x, 3x, or 4x

### Image Transformation Tools
- **Crop Image** (`/crop`) - Interactive cropping with presets (1:1, 4:3, 16:9, free)
- **Rotate Image** (`/rotate`) - Rotate by preset angles or custom degrees (0-360°)
- **Flip Image** (`/flip`) - Flip horizontally or vertically

### Image Enhancement Tools
- **Apply Filters** (`/filter`) - 6 artistic filters (grayscale, sepia, invert, blur, sharpen)
- **Adjust Brightness** (`/brightness`) - Fine-tune brightness, contrast, and saturation
- **Remove Background** (`/remove-bg`) - Basic background removal with custom color option

### Creative Tools
- **Add Watermark** (`/watermark`) - Text watermarks with custom position, size, and opacity
- **Convert Format** (`/convert`) - Convert between PNG, JPEG, WebP, and BMP
- **Merge Images** (`/merge`) - Combine multiple images horizontally or vertically

## 🎨 Design Features

- **Color Scheme**: Black (#000), White (#FFF), Yellow (#FFD700)
- **Responsive Layout**: Works on desktop, tablet, and mobile
- **Interactive UI**: Hover effects, smooth transitions, drag-and-drop support
- **Privacy First**: All processing happens in the browser - no uploads to servers

## 🏗️ Technical Stack

- **Framework**: Hono (Lightweight web framework)
- **Runtime**: Cloudflare Workers/Pages
- **Frontend**: Vanilla JavaScript with Canvas API
- **Styling**: Tailwind CSS (CDN) + Custom CSS
- **Icons**: Font Awesome 6.4.0
- **Build Tool**: Vite

## 📁 Project Structure

```
webapp/
├── src/
│   ├── index.tsx              # Main Hono application
│   ├── components/
│   │   ├── layout.tsx         # Page layout with nav/footer
│   │   └── tool-template.tsx  # Reusable tool page template
│   └── pages/
│       ├── home.tsx           # Homepage with all tools
│       ├── compress.tsx       # Compression tool
│       ├── resize.tsx         # Resize tool
│       ├── crop.tsx           # Crop tool
│       ├── convert.tsx        # Format conversion
│       ├── rotate.tsx         # Rotation tool
│       ├── watermark.tsx      # Watermark tool
│       ├── merge.tsx          # Image merging
│       ├── flip.tsx           # Flip tool
│       ├── removebg.tsx       # Background removal
│       ├── upscale.tsx        # Upscaling tool
│       ├── filter.tsx         # Filters tool
│       └── brightness.tsx     # Brightness adjustment
├── public/static/
│   ├── app.js                 # Main JavaScript logic (21KB)
│   └── styles.css             # Custom CSS styles
├── ecosystem.config.cjs       # PM2 configuration
├── wrangler.jsonc            # Cloudflare configuration
├── vite.config.ts            # Vite build config
└── package.json              # Dependencies and scripts
```

## 🚀 Development

### Local Development
```bash
# Build the project
npm run build

# Start development server (sandbox)
pm2 start ecosystem.config.cjs

# Test the service
curl http://localhost:3000

# Check logs
pm2 logs webapp --nostream

# Stop the service
pm2 delete webapp
```

### Build Commands
```bash
npm run build          # Build for production
npm run preview        # Preview production build
npm run clean-port     # Kill process on port 3000
```

## 📋 How It Works

### Upload Process
1. User drags/drops or selects an image file
2. JavaScript FileReader loads the image
3. Image is drawn on HTML5 Canvas element
4. Tool-specific controls are initialized

### Processing Pipeline
1. User adjusts tool parameters (sliders, buttons, inputs)
2. Event listeners trigger processing functions
3. Canvas API manipulates image data (pixels, transformations)
4. Real-time preview updates on canvas
5. User downloads the processed result

### Key Technologies
- **Canvas API**: For all image manipulation
- **FileReader API**: For client-side file loading
- **Blob API**: For image download functionality
- **ImageData API**: For pixel-level operations

## 🎯 Tool Details

### Compress Tool
- Quality slider: 10-100%
- Real-time quality preview
- Optimal balance between size and quality

### Resize Tool
- Custom width/height inputs
- Aspect ratio lock toggle
- Smart scaling algorithms

### Crop Tool
- Interactive selection
- Preset ratios (1:1, 4:3, 16:9)
- Free-form cropping

### Rotate Tool
- Quick rotate buttons (90°, 180°, 270°)
- Custom angle slider (0-360°)
- Smooth rotation with canvas transforms

### Watermark Tool
- Custom text input
- 9 position options
- Adjustable font size (10-100px)
- Opacity control (0-100%)

### Filter Tool
- Grayscale, Sepia, Invert
- Blur, Sharpen effects
- Pixel-level transformations

### Brightness Tool
- Brightness adjustment (-100 to +100)
- Contrast control (-100 to +100)
- Saturation control (-100 to +100)
- Reset to original

## 🔒 Privacy & Security

- **No Server Upload**: All processing happens in the browser
- **No Data Storage**: Images never leave your device
- **No Tracking**: No analytics or user tracking
- **Open Source**: Transparent code you can review

## 📊 Browser Support

- ✅ Chrome/Edge (90+)
- ✅ Firefox (88+)
- ✅ Safari (14+)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🛠️ Future Enhancements

### Not Yet Implemented
- [ ] Batch processing (multiple images)
- [ ] Advanced background removal (AI-powered)
- [ ] More filter options (vintage, HDR, etc.)
- [ ] Image comparison (before/after slider)
- [ ] Undo/redo functionality
- [ ] Custom watermark images (not just text)
- [ ] Advanced merge options (grid, collage)
- [ ] Image metadata editor (EXIF)
- [ ] Color palette extraction
- [ ] Image optimization suggestions

### Recommended Next Steps
1. **Add Undo/Redo**: Implement history stack for all operations
2. **Batch Processing**: Allow processing multiple images at once
3. **Save Presets**: Let users save favorite settings
4. **AI Background Removal**: Integrate with background removal API
5. **More Formats**: Support TIFF, AVIF, HEIC
6. **Progressive Web App**: Add offline support
7. **Keyboard Shortcuts**: Add hotkeys for common actions
8. **Image Comparison**: Before/after slider view

## 📄 License

MIT License - Free to use and modify

## 👨‍💻 Author

Built with ❤️ using Hono and Cloudflare Pages

---

**Note**: This is a client-side application. For production use with advanced features (AI background removal, etc.), consider integrating third-party APIs via Cloudflare Workers.
