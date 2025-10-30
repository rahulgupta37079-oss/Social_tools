// Image Tools - Main JavaScript
let currentImage = null;
let canvas = null;
let ctx = null;
let originalWidth = 0;
let originalHeight = 0;

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  const fileInput = document.getElementById('file-input');
  const dropZone = document.getElementById('drop-zone');
  canvas = document.getElementById('canvas-preview');
  
  if (canvas) {
    ctx = canvas.getContext('2d');
  }

  // File input change
  if (fileInput) {
    fileInput.addEventListener('change', handleFileSelect);
  }

  // Drag and drop
  if (dropZone) {
    dropZone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropZone.style.borderColor = '#FFF';
    });

    dropZone.addEventListener('dragleave', () => {
      dropZone.style.borderColor = '#FFD700';
    });

    dropZone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropZone.style.borderColor = '#FFD700';
      const files = e.dataTransfer.files;
      if (files.length > 0) {
        loadImage(files[0]);
      }
    });
  }

  // Reset button
  const resetBtn = document.getElementById('reset-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', resetEditor);
  }

  // Download button
  const downloadBtn = document.getElementById('download-btn');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', downloadImage);
  }

  // Initialize tool-specific controls
  initializeToolControls();
});

function handleFileSelect(e) {
  const file = e.target.files[0];
  if (file) {
    loadImage(file);
  }
}

function loadImage(file) {
  if (!file.type.match('image.*')) {
    alert('Please select an image file');
    return;
  }

  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      currentImage = img;
      originalWidth = img.width;
      originalHeight = img.height;
      
      // Show editor, hide upload
      document.getElementById('upload-section').classList.add('hidden');
      document.getElementById('editor-section').classList.remove('hidden');
      
      // Draw image on canvas
      drawImage();
      
      // Apply tool-specific initialization
      if (window.currentTool) {
        initializeToolWithImage();
      }
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function drawImage(modifiedImage) {
  const img = modifiedImage || currentImage;
  if (!img) return;

  // Set canvas size
  const maxWidth = 800;
  const maxHeight = 600;
  let width = img.width;
  let height = img.height;

  if (width > maxWidth || height > maxHeight) {
    const ratio = Math.min(maxWidth / width, maxHeight / height);
    width *= ratio;
    height *= ratio;
  }

  canvas.width = width;
  canvas.height = height;
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, width, height);
}

function resetEditor() {
  currentImage = null;
  document.getElementById('upload-section').classList.remove('hidden');
  document.getElementById('editor-section').classList.add('hidden');
  document.getElementById('file-input').value = '';
}

function downloadImage() {
  if (!canvas) return;
  
  const link = document.createElement('a');
  const tool = window.currentTool || 'image';
  link.download = `${tool}-${Date.now()}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
}

function initializeToolWithImage() {
  const tool = window.currentTool;
  
  switch(tool) {
    case 'resize':
      document.getElementById('width-input').value = originalWidth;
      document.getElementById('height-input').value = originalHeight;
      break;
    case 'convert':
      document.getElementById('selected-format').textContent = 'PNG';
      break;
    case 'watermark':
      applyWatermark();
      break;
  }
}

function initializeToolControls() {
  const tool = window.currentTool;
  
  if (!tool) return;

  switch(tool) {
    case 'compress':
      initCompress();
      break;
    case 'resize':
      initResize();
      break;
    case 'crop':
      initCrop();
      break;
    case 'convert':
      initConvert();
      break;
    case 'rotate':
      initRotate();
      break;
    case 'watermark':
      initWatermark();
      break;
    case 'flip':
      initFlip();
      break;
    case 'upscale':
      initUpscale();
      break;
    case 'filter':
      initFilter();
      break;
    case 'brightness':
      initBrightness();
      break;
    case 'removebg':
      initRemoveBg();
      break;
    case 'merge':
      initMerge();
      break;
  }
}

// ===== COMPRESS TOOL =====
function initCompress() {
  const slider = document.getElementById('quality-slider');
  const valueDisplay = document.getElementById('quality-value');
  
  if (slider) {
    slider.addEventListener('input', (e) => {
      valueDisplay.textContent = e.target.value + '%';
    });
  }
}

// ===== RESIZE TOOL =====
function initResize() {
  const widthInput = document.getElementById('width-input');
  const heightInput = document.getElementById('height-input');
  const keepAspect = document.getElementById('keep-aspect');
  
  let aspectRatio = 1;

  function updateSize() {
    if (!currentImage) return;
    
    const newWidth = parseInt(widthInput.value) || originalWidth;
    const newHeight = parseInt(heightInput.value) || originalHeight;
    
    canvas.width = newWidth;
    canvas.height = newHeight;
    ctx.drawImage(currentImage, 0, 0, newWidth, newHeight);
  }

  if (widthInput) {
    widthInput.addEventListener('input', (e) => {
      if (keepAspect.checked && currentImage) {
        aspectRatio = originalWidth / originalHeight;
        heightInput.value = Math.round(e.target.value / aspectRatio);
      }
      updateSize();
    });
  }

  if (heightInput) {
    heightInput.addEventListener('input', (e) => {
      if (keepAspect.checked && currentImage) {
        aspectRatio = originalWidth / originalHeight;
        widthInput.value = Math.round(e.target.value * aspectRatio);
      }
      updateSize();
    });
  }
}

// ===== CROP TOOL =====
function initCrop() {
  const presets = document.querySelectorAll('.crop-preset');
  let cropData = { x: 0, y: 0, width: 0, height: 0 };
  let isSelecting = false;

  presets.forEach(btn => {
    btn.addEventListener('click', () => {
      presets.forEach(b => b.classList.remove('btn-primary'));
      presets.forEach(b => b.classList.add('btn-secondary'));
      btn.classList.remove('btn-secondary');
      btn.classList.add('btn-primary');
    });
  });

  if (canvas) {
    canvas.addEventListener('mousedown', startCrop);
    canvas.addEventListener('mousemove', updateCrop);
    canvas.addEventListener('mouseup', endCrop);
  }

  function startCrop(e) {
    const rect = canvas.getBoundingClientRect();
    cropData.x = e.clientX - rect.left;
    cropData.y = e.clientY - rect.top;
    isSelecting = true;
  }

  function updateCrop(e) {
    if (!isSelecting) return;
    const rect = canvas.getBoundingClientRect();
    cropData.width = (e.clientX - rect.left) - cropData.x;
    cropData.height = (e.clientY - rect.top) - cropData.y;
    
    drawImage();
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 2;
    ctx.strokeRect(cropData.x, cropData.y, cropData.width, cropData.height);
  }

  function endCrop() {
    if (!isSelecting) return;
    isSelecting = false;
    
    if (cropData.width > 10 && cropData.height > 10) {
      applyCrop();
    }
  }

  function applyCrop() {
    const imageData = ctx.getImageData(cropData.x, cropData.y, cropData.width, cropData.height);
    canvas.width = cropData.width;
    canvas.height = cropData.height;
    ctx.putImageData(imageData, 0, 0);
  }
}

// ===== CONVERT TOOL =====
function initConvert() {
  const formatBtns = document.querySelectorAll('.format-btn');
  let selectedFormat = 'png';

  formatBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      formatBtns.forEach(b => b.classList.remove('btn-primary'));
      formatBtns.forEach(b => b.classList.add('btn-secondary'));
      btn.classList.remove('btn-secondary');
      btn.classList.add('btn-primary');
      
      selectedFormat = btn.dataset.format;
      document.getElementById('selected-format').textContent = selectedFormat.toUpperCase();
    });
  });

  const originalDownload = downloadImage;
  window.downloadImage = function() {
    const link = document.createElement('a');
    const mimeTypes = {
      'png': 'image/png',
      'jpeg': 'image/jpeg',
      'webp': 'image/webp',
      'bmp': 'image/bmp'
    };
    
    link.download = `converted-${Date.now()}.${selectedFormat}`;
    link.href = canvas.toDataURL(mimeTypes[selectedFormat] || 'image/png', 0.9);
    link.click();
  };
}

// ===== ROTATE TOOL =====
function initRotate() {
  const rotateBtns = document.querySelectorAll('.rotate-btn');
  const angleSlider = document.getElementById('angle-slider');
  const angleValue = document.getElementById('angle-value');
  let currentAngle = 0;

  rotateBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const angle = parseInt(btn.dataset.angle);
      currentAngle = angle;
      angleSlider.value = angle;
      angleValue.textContent = angle + '°';
      rotateImage(angle);
    });
  });

  if (angleSlider) {
    angleSlider.addEventListener('input', (e) => {
      currentAngle = parseInt(e.target.value);
      angleValue.textContent = currentAngle + '°';
      rotateImage(currentAngle);
    });
  }

  function rotateImage(angle) {
    if (!currentImage) return;

    const radians = (angle * Math.PI) / 180;
    const cos = Math.cos(radians);
    const sin = Math.sin(radians);
    
    const newWidth = Math.abs(originalWidth * cos) + Math.abs(originalHeight * sin);
    const newHeight = Math.abs(originalWidth * sin) + Math.abs(originalHeight * cos);
    
    canvas.width = newWidth;
    canvas.height = newHeight;
    
    ctx.clearRect(0, 0, newWidth, newHeight);
    ctx.save();
    ctx.translate(newWidth / 2, newHeight / 2);
    ctx.rotate(radians);
    ctx.drawImage(currentImage, -originalWidth / 2, -originalHeight / 2, originalWidth, originalHeight);
    ctx.restore();
  }
}

// ===== WATERMARK TOOL =====
function initWatermark() {
  const textInput = document.getElementById('watermark-text');
  const fontSizeInput = document.getElementById('font-size');
  const opacitySlider = document.getElementById('opacity-slider');
  const positionBtns = document.querySelectorAll('.position-btn');
  
  let watermarkSettings = {
    text: '© Your Name',
    fontSize: 24,
    opacity: 0.5,
    position: 'center'
  };

  if (textInput) {
    textInput.addEventListener('input', (e) => {
      watermarkSettings.text = e.target.value;
      applyWatermark();
    });
  }

  if (fontSizeInput) {
    fontSizeInput.addEventListener('input', (e) => {
      watermarkSettings.fontSize = parseInt(e.target.value);
      applyWatermark();
    });
  }

  if (opacitySlider) {
    opacitySlider.addEventListener('input', (e) => {
      watermarkSettings.opacity = e.target.value / 100;
      applyWatermark();
    });
  }

  positionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      positionBtns.forEach(b => b.classList.remove('btn-primary'));
      positionBtns.forEach(b => b.classList.add('btn-secondary'));
      btn.classList.remove('btn-secondary');
      btn.classList.add('btn-primary');
      
      watermarkSettings.position = btn.dataset.position;
      applyWatermark();
    });
  });

  function applyWatermark() {
    if (!currentImage) return;

    drawImage();
    
    ctx.save();
    ctx.font = `${watermarkSettings.fontSize}px Arial`;
    ctx.fillStyle = `rgba(255, 215, 0, ${watermarkSettings.opacity})`;
    
    const textWidth = ctx.measureText(watermarkSettings.text).width;
    let x, y;
    
    switch(watermarkSettings.position) {
      case 'top-left':
        x = 20; y = 40;
        break;
      case 'top-center':
        x = (canvas.width - textWidth) / 2; y = 40;
        break;
      case 'top-right':
        x = canvas.width - textWidth - 20; y = 40;
        break;
      case 'center-left':
        x = 20; y = canvas.height / 2;
        break;
      case 'center':
        x = (canvas.width - textWidth) / 2; y = canvas.height / 2;
        break;
      case 'center-right':
        x = canvas.width - textWidth - 20; y = canvas.height / 2;
        break;
      case 'bottom-left':
        x = 20; y = canvas.height - 20;
        break;
      case 'bottom-center':
        x = (canvas.width - textWidth) / 2; y = canvas.height - 20;
        break;
      case 'bottom-right':
        x = canvas.width - textWidth - 20; y = canvas.height - 20;
        break;
    }
    
    ctx.fillText(watermarkSettings.text, x, y);
    ctx.restore();
  }

  window.applyWatermark = applyWatermark;
}

// ===== FLIP TOOL =====
function initFlip() {
  const flipBtns = document.querySelectorAll('.flip-btn');

  flipBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const direction = btn.dataset.direction;
      flipImage(direction);
    });
  });

  function flipImage(direction) {
    if (!currentImage) return;

    canvas.width = originalWidth;
    canvas.height = originalHeight;
    
    ctx.save();
    
    if (direction === 'horizontal') {
      ctx.scale(-1, 1);
      ctx.drawImage(currentImage, -originalWidth, 0, originalWidth, originalHeight);
    } else {
      ctx.scale(1, -1);
      ctx.drawImage(currentImage, 0, -originalHeight, originalWidth, originalHeight);
    }
    
    ctx.restore();
  }
}

// ===== UPSCALE TOOL =====
function initUpscale() {
  const scaleBtns = document.querySelectorAll('.scale-btn');

  scaleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      scaleBtns.forEach(b => b.classList.remove('btn-primary'));
      scaleBtns.forEach(b => b.classList.add('btn-secondary'));
      btn.classList.remove('btn-secondary');
      btn.classList.add('btn-primary');
      
      const scale = parseInt(btn.dataset.scale);
      upscaleImage(scale);
    });
  });

  function upscaleImage(scale) {
    if (!currentImage) return;

    const newWidth = originalWidth * scale;
    const newHeight = originalHeight * scale;
    
    canvas.width = newWidth;
    canvas.height = newHeight;
    
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(currentImage, 0, 0, newWidth, newHeight);
  }
}

// ===== FILTER TOOL =====
function initFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('btn-primary'));
      filterBtns.forEach(b => b.classList.add('btn-secondary'));
      btn.classList.remove('btn-secondary');
      btn.classList.add('btn-primary');
      
      const filter = btn.dataset.filter;
      applyFilter(filter);
    });
  });

  function applyFilter(filterType) {
    if (!currentImage) return;

    drawImage();
    
    if (filterType === 'none') return;

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    switch(filterType) {
      case 'grayscale':
        for (let i = 0; i < data.length; i += 4) {
          const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
          data[i] = data[i + 1] = data[i + 2] = avg;
        }
        break;
      
      case 'sepia':
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i], g = data[i + 1], b = data[i + 2];
          data[i] = Math.min(255, r * 0.393 + g * 0.769 + b * 0.189);
          data[i + 1] = Math.min(255, r * 0.349 + g * 0.686 + b * 0.168);
          data[i + 2] = Math.min(255, r * 0.272 + g * 0.534 + b * 0.131);
        }
        break;
      
      case 'invert':
        for (let i = 0; i < data.length; i += 4) {
          data[i] = 255 - data[i];
          data[i + 1] = 255 - data[i + 1];
          data[i + 2] = 255 - data[i + 2];
        }
        break;
      
      case 'blur':
        ctx.filter = 'blur(5px)';
        drawImage();
        ctx.filter = 'none';
        return;
      
      case 'sharpen':
        const weights = [0, -1, 0, -1, 5, -1, 0, -1, 0];
        applyConvolution(data, canvas.width, canvas.height, weights);
        break;
    }

    ctx.putImageData(imageData, 0, 0);
  }

  function applyConvolution(data, width, height, weights) {
    const side = Math.round(Math.sqrt(weights.length));
    const halfSide = Math.floor(side / 2);
    const src = data.slice();
    
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const dstOff = (y * width + x) * 4;
        let r = 0, g = 0, b = 0;
        
        for (let cy = 0; cy < side; cy++) {
          for (let cx = 0; cx < side; cx++) {
            const scy = y + cy - halfSide;
            const scx = x + cx - halfSide;
            
            if (scy >= 0 && scy < height && scx >= 0 && scx < width) {
              const srcOff = (scy * width + scx) * 4;
              const wt = weights[cy * side + cx];
              r += src[srcOff] * wt;
              g += src[srcOff + 1] * wt;
              b += src[srcOff + 2] * wt;
            }
          }
        }
        
        data[dstOff] = Math.min(255, Math.max(0, r));
        data[dstOff + 1] = Math.min(255, Math.max(0, g));
        data[dstOff + 2] = Math.min(255, Math.max(0, b));
      }
    }
  }
}

// ===== BRIGHTNESS TOOL =====
function initBrightness() {
  const brightnessSlider = document.getElementById('brightness-slider');
  const contrastSlider = document.getElementById('contrast-slider');
  const saturationSlider = document.getElementById('saturation-slider');
  const resetBtn = document.getElementById('reset-adjustments');
  
  const brightnessValue = document.getElementById('brightness-value');
  const contrastValue = document.getElementById('contrast-value');
  const saturationValue = document.getElementById('saturation-value');

  let settings = { brightness: 0, contrast: 0, saturation: 0 };

  if (brightnessSlider) {
    brightnessSlider.addEventListener('input', (e) => {
      settings.brightness = parseInt(e.target.value);
      brightnessValue.textContent = settings.brightness;
      applyAdjustments();
    });
  }

  if (contrastSlider) {
    contrastSlider.addEventListener('input', (e) => {
      settings.contrast = parseInt(e.target.value);
      contrastValue.textContent = settings.contrast;
      applyAdjustments();
    });
  }

  if (saturationSlider) {
    saturationSlider.addEventListener('input', (e) => {
      settings.saturation = parseInt(e.target.value);
      saturationValue.textContent = settings.saturation;
      applyAdjustments();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      settings = { brightness: 0, contrast: 0, saturation: 0 };
      brightnessSlider.value = 0;
      contrastSlider.value = 0;
      saturationSlider.value = 0;
      brightnessValue.textContent = '0';
      contrastValue.textContent = '0';
      saturationValue.textContent = '0';
      drawImage();
    });
  }

  function applyAdjustments() {
    if (!currentImage) return;

    drawImage();
    
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      // Brightness
      let r = data[i] + settings.brightness;
      let g = data[i + 1] + settings.brightness;
      let b = data[i + 2] + settings.brightness;

      // Contrast
      const contrastFactor = (259 * (settings.contrast + 255)) / (255 * (259 - settings.contrast));
      r = contrastFactor * (r - 128) + 128;
      g = contrastFactor * (g - 128) + 128;
      b = contrastFactor * (b - 128) + 128;

      // Saturation
      const gray = 0.2989 * r + 0.5870 * g + 0.1140 * b;
      const satFactor = 1 + settings.saturation / 100;
      r = gray + (r - gray) * satFactor;
      g = gray + (g - gray) * satFactor;
      b = gray + (b - gray) * satFactor;

      data[i] = Math.min(255, Math.max(0, r));
      data[i + 1] = Math.min(255, Math.max(0, g));
      data[i + 2] = Math.min(255, Math.max(0, b));
    }

    ctx.putImageData(imageData, 0, 0);
  }
}

// ===== REMOVE BACKGROUND TOOL =====
function initRemoveBg() {
  // Simple background removal using color threshold
  // For production, you'd use an AI service
  
  const bgColorInput = document.getElementById('bg-color');
  
  if (bgColorInput) {
    bgColorInput.addEventListener('change', () => {
      if (currentImage) {
        removeBackground();
      }
    });
  }

  function removeBackground() {
    if (!currentImage) return;

    drawImage();
    
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    // Simple edge detection and background removal
    // This is a basic implementation - real background removal needs AI
    const threshold = 50;
    
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      
      // Check if pixel is close to background color (corners)
      const isBackground = (
        (r > 200 && g > 200 && b > 200) || // White-ish
        (r < 50 && g < 50 && b < 50)       // Black-ish
      );
      
      if (isBackground) {
        data[i + 3] = 0; // Make transparent
      }
    }

    ctx.putImageData(imageData, 0, 0);
  }
}

// ===== MERGE TOOL =====
function initMerge() {
  const additionalFilesInput = document.getElementById('additional-files');
  const mergeBtns = document.querySelectorAll('.merge-btn');
  const imageListDiv = document.getElementById('image-list');
  
  let images = [];
  let mergeDirection = 'horizontal';

  mergeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      mergeBtns.forEach(b => b.classList.remove('btn-primary'));
      mergeBtns.forEach(b => b.classList.add('btn-secondary'));
      btn.classList.remove('btn-secondary');
      btn.classList.add('btn-primary');
      
      mergeDirection = btn.dataset.direction;
      if (images.length > 0) {
        mergeImages();
      }
    });
  });

  if (additionalFilesInput) {
    additionalFilesInput.addEventListener('change', (e) => {
      const files = Array.from(e.target.files);
      files.forEach(file => {
        if (file.type.match('image.*')) {
          const reader = new FileReader();
          reader.onload = (event) => {
            const img = new Image();
            img.onload = () => {
              images.push(img);
              updateImageList();
              if (images.length > 0) {
                mergeImages();
              }
            };
            img.src = event.target.result;
          };
          reader.readAsDataURL(file);
        }
      });
    });
  }

  function updateImageList() {
    if (imageListDiv) {
      imageListDiv.innerHTML = `
        <div class="text-white">
          <i class="fas fa-images mr-2 text-yellow"></i>
          ${images.length + 1} image${images.length + 1 > 1 ? 's' : ''} ready to merge
        </div>
      `;
    }
  }

  function mergeImages() {
    if (!currentImage) return;

    const allImages = [currentImage, ...images];
    const spacing = parseInt(document.getElementById('merge-spacing')?.value || 0);

    if (mergeDirection === 'horizontal') {
      // Calculate total width and max height
      let totalWidth = spacing * (allImages.length - 1);
      let maxHeight = 0;
      
      allImages.forEach(img => {
        totalWidth += img.width;
        maxHeight = Math.max(maxHeight, img.height);
      });

      canvas.width = totalWidth;
      canvas.height = maxHeight;
      ctx.clearRect(0, 0, totalWidth, maxHeight);

      // Draw images horizontally
      let currentX = 0;
      allImages.forEach(img => {
        const y = (maxHeight - img.height) / 2; // Center vertically
        ctx.drawImage(img, currentX, y, img.width, img.height);
        currentX += img.width + spacing;
      });
    } else {
      // Vertical merge
      let maxWidth = 0;
      let totalHeight = spacing * (allImages.length - 1);
      
      allImages.forEach(img => {
        maxWidth = Math.max(maxWidth, img.width);
        totalHeight += img.height;
      });

      canvas.width = maxWidth;
      canvas.height = totalHeight;
      ctx.clearRect(0, 0, maxWidth, totalHeight);

      // Draw images vertically
      let currentY = 0;
      allImages.forEach(img => {
        const x = (maxWidth - img.width) / 2; // Center horizontally
        ctx.drawImage(img, x, currentY, img.width, img.height);
        currentY += img.height + spacing;
      });
    }
  }

  // When first image is loaded, add it to the list
  if (currentImage) {
    images = [];
    updateImageList();
  }
}
