# ImageTools - Professional Image Editing Suite

A comprehensive, browser-based image editing toolkit built with Hono and Cloudflare Pages. Features 12 powerful tools with **advanced options** and a sleek black, white, and yellow design.

## 🌟 Live Demo

**Production URL**: https://3000-ip8cfyoccqplvzbnmsrg1-b9b802c4.sandbox.novita.ai

## ✨ Features Completed

### Image Optimization Tools

#### **Compress Image** (`/compress`)
- **Basic**: Quality slider (10-100%)
- **Advanced**:
  - Output format selection (JPEG, PNG, WebP)
  - Compression method (Standard, Aggressive, Balanced)
  - Preserve metadata option
  - Color palette optimization
  - Real-time file size estimation

#### **Resize Image** (`/resize`)
- **Basic**: Custom dimensions with aspect ratio lock
- **Advanced**:
  - Resize modes (Stretch, Contain, Cover, Exact)
  - Resampling algorithms (High/Medium/Low quality, Pixelated)
  - Scale by percentage
  - Quick presets (Full HD, HD, SVGA, VGA)
  - Sharpening after resize option

#### **Upscale Image** (`/upscale`)
- **Basic**: 2x, 3x, 4x upscaling
- **Advanced**:
  - Interpolation methods (Nearest, Bilinear, Bicubic, Lanczos)
  - Custom scale factor (1-10x)
  - Sharpening control
  - Noise reduction
  - Edge enhancement
  - Anti-aliasing
  - Target resolution presets (Full HD, 2K, 4K, 8K)

### Image Transformation Tools

#### **Crop Image** (`/crop`)
- **Basic**: Interactive selection with presets (1:1, 4:3, 16:9, Free)
- **Advanced**:
  - Additional aspect ratios (9:16 Story, 2:3 Portrait, 3:2 Photo, 21:9 Cinema)
  - Manual coordinate input (X, Y, Width, Height)
  - 9-point alignment system
  - Grid overlay (Rule of thirds)

#### **Rotate Image** (`/rotate`)
- **Basic**: Quick rotate buttons (90°, 180°, 270°, -90°) + slider (0-360°)
- **Advanced**:
  - Custom background color fill
  - Auto-trim edges option
  - Expand canvas to fit
  - Rotation direction control
  - Precise angle input (with decimals)
  - Quick angles (45°, 135°, 225°, 315°, 22.5°, 67.5°)
  - Smooth rotation toggle

#### **Flip Image** (`/flip`)
- **Basic**: Horizontal and vertical flip
- **Advanced**:
  - Combined flip (both directions)
  - Mirror effects
  - Flip animation toggle
  - Flip history tracking

### Image Enhancement Tools

#### **Apply Filters** (`/filter`)
- **Basic**: 6 filters (Original, Grayscale, Sepia, Invert, Blur, Sharpen)
- **Advanced**:
  - 6 additional filters (Vintage, Polaroid, Emboss, Edge Detect, Posterize, Solarize)
  - Filter intensity control (0-100%)
  - Blur radius adjustment
  - Sharpen amount control
  - Individual RGB channel adjustments
  - Temperature control (Cool to Warm)
  - Tint adjustment (Green to Magenta)
  - Vignette effect
  - Auto enhance colors
  - Preserve skin tones
  - Custom presets (B&W High Contrast, Warm Sunset, Cool Winter, Dreamy)

#### **Adjust Brightness** (`/brightness`)
- **Basic**: Brightness, Contrast, Saturation sliders
- **Advanced**:
  - Shadows/Highlights/Midtones control
  - Gamma adjustment
  - Exposure control
  - Vibrance control
  - Clarity adjustment
  - Individual RGB channel brightness
  - Levels (Black Point, Mid Point, White Point)
  - Auto levels/contrast/color balance
  - Quick presets (Brighten, Darken, High/Low Contrast, Vivid, Muted)
  - Copy/Paste settings
  - Histogram display

#### **Remove Background** (`/remove-bg`)
- **Basic**: Auto background removal + optional color fill
- **Advanced**:
  - Detection sensitivity (1-10)
  - Edge refinement (None, Soft, Hard, Feathered)
  - Feather radius control
  - Threshold adjustment
  - Remove similar colors option
  - Smooth edges (Anti-aliasing)
  - Fill small holes in subject
  - Output options (Transparent, Color fill)
  - Preview modes (Original, Result, Split view)

### Creative Tools

#### **Add Watermark** (`/watermark`)
- **Basic**: Text, font size, opacity, 9 position presets
- **Advanced**:
  - 8 font families (Arial, Helvetica, Times, Georgia, Courier, Verdana, Impact, Comic Sans)
  - Font styles (Normal, Bold, Italic)
  - Custom text color + 5 color presets
  - Text rotation (-180° to 180°)
  - Text outline (width + color)
  - Shadow effects (X/Y offset, blur, color)
  - Custom position (X/Y coordinates)
  - Repeat watermark (tiling)

#### **Convert Format** (`/convert`)
- **Basic**: Convert to PNG, JPEG, WebP, BMP
- **Advanced**:
  - JPEG quality control + progressive option
  - PNG compression levels (0-9) + transparency preservation
  - WebP quality control + lossless option
  - Color space selection (sRGB, RGB, Grayscale)
  - Strip metadata option
  - Optimize for file size
  - Format-specific information display

#### **Merge Images** (`/merge`)
- **Basic**: Horizontal/vertical merge + add multiple images
- **Advanced**:
  - Spacing between images
  - Alignment options (Start, Center, End, Stretch)
  - Background color selection
  - Transparent background option
  - Grid layouts (Single row/column, 2×2, 3×3)
  - Border settings (width + color)
  - Match all images to same size
  - Individual padding control (Top, Right, Bottom, Left)

## 🎨 Design Features

- **Color Scheme**: Black (#000), White (#FFF), Yellow (#FFD700)
- **Responsive Layout**: Works on desktop, tablet, and mobile
- **Interactive UI**: Hover effects, smooth transitions, drag-and-drop support
- **Collapsible Advanced Options**: Clean interface with expandable settings
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

### Advanced Options
- All tools have collapsible **Advanced Options** sections
- Click to expand and access professional-grade controls
- Settings persist during editing session
- Clean UI keeps basic options front and center

### Key Technologies
- **Canvas API**: For all image manipulation
- **FileReader API**: For client-side file loading
- **Blob API**: For image download functionality
- **ImageData API**: For pixel-level operations

## 🎯 Tool Details Summary

| Tool | Basic Features | Advanced Features |
|------|----------------|-------------------|
| **Compress** | Quality slider | Format selection, compression methods, metadata control |
| **Resize** | Width/height, aspect ratio | Resize modes, resampling algorithms, presets, percentage |
| **Crop** | Interactive selection, presets | Manual coordinates, alignment, grid overlay |
| **Convert** | Format selection | Quality settings, color space, metadata stripping |
| **Rotate** | Quick angles, slider | Background color, trim edges, precise angles |
| **Watermark** | Text, size, opacity, position | Font family/style, color, rotation, outline, shadow |
| **Merge** | Direction, multiple images | Spacing, alignment, grid layouts, borders, padding |
| **Flip** | Horizontal/vertical | Combined flip, mirror effects, animation |
| **Remove BG** | Auto removal, color fill | Sensitivity, edge refinement, threshold, preview modes |
| **Upscale** | 2x/3x/4x scaling | Interpolation methods, sharpening, noise reduction |
| **Filter** | 6 basic filters | 6 additional filters, intensity, RGB channels, temperature |
| **Brightness** | Brightness/contrast/saturation | Shadows/highlights, gamma, exposure, levels, histogram |

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

## 🛠️ Recent Updates

### v2.0 - Advanced Options (Current)
- ✅ Added collapsible Advanced Options to all 12 tools
- ✅ 100+ new professional controls across all tools
- ✅ Enhanced UI with expandable sections
- ✅ Improved file size: 107KB (was 58KB)

### v1.0 - Initial Release
- ✅ 12 fully functional image editing tools
- ✅ Basic controls for all tools
- ✅ Black/white/yellow design theme

## 🎓 Future Enhancements

### Planned Features
- [ ] Batch processing (multiple images)
- [ ] Undo/redo functionality with history
- [ ] Save/load custom presets
- [ ] Keyboard shortcuts
- [ ] Image comparison slider (before/after)
- [ ] Export settings as JSON
- [ ] Progressive Web App (offline support)
- [ ] Advanced AI-powered background removal API integration

## 📄 License

MIT License - Free to use and modify

## 👨‍💻 Author

Built with ❤️ using Hono and Cloudflare Pages

---

**Last Updated**: 2025-10-30  
**Version**: 2.0 (Advanced Options)  
**Total Tools**: 12  
**Total Advanced Options**: 100+
