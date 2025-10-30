import { ToolTemplate } from '../components/tool-template'

export const CropPage = () => {
  const controls = (
    <div class="space-y-4">
      <div class="bg-gray-800 rounded-lg p-4">
        <label class="block text-yellow font-bold mb-3">
          <i class="fas fa-crop mr-2"></i>
          Crop Presets
        </label>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
          <button class="crop-preset btn-secondary py-2 rounded" data-ratio="1:1">
            <i class="fas fa-square mr-2"></i>Square (1:1)
          </button>
          <button class="crop-preset btn-secondary py-2 rounded" data-ratio="4:3">
            <i class="fas fa-desktop mr-2"></i>4:3
          </button>
          <button class="crop-preset btn-secondary py-2 rounded" data-ratio="16:9">
            <i class="fas fa-tv mr-2"></i>16:9
          </button>
          <button class="crop-preset btn-secondary py-2 rounded" data-ratio="free">
            <i class="fas fa-draw-polygon mr-2"></i>Free
          </button>
        </div>
        <p class="text-gray-400 text-sm mt-3">
          <i class="fas fa-info-circle mr-2"></i>
          Click and drag on the image to select crop area
        </p>
      </div>

      {/* Advanced Options */}
      <details class="bg-gray-800 rounded-lg p-4">
        <summary class="text-yellow font-bold cursor-pointer hover:text-white transition">
          <i class="fas fa-cog mr-2"></i>
          Advanced Options
        </summary>
        <div class="mt-4 space-y-4">
          <div>
            <label class="block text-white mb-2">Additional Aspect Ratios</label>
            <div class="grid grid-cols-2 gap-2">
              <button class="crop-preset btn-secondary py-2 text-sm rounded" data-ratio="9:16">9:16 (Story)</button>
              <button class="crop-preset btn-secondary py-2 text-sm rounded" data-ratio="2:3">2:3 (Portrait)</button>
              <button class="crop-preset btn-secondary py-2 text-sm rounded" data-ratio="3:2">3:2 (Photo)</button>
              <button class="crop-preset btn-secondary py-2 text-sm rounded" data-ratio="21:9">21:9 (Cinema)</button>
            </div>
          </div>

          <div class="grid grid-cols-4 gap-2">
            <div>
              <label class="block text-white text-sm mb-1">X Position</label>
              <input 
                type="number" 
                id="crop-x" 
                placeholder="0" 
                min="0"
                class="w-full px-2 py-1 bg-black text-white border border-yellow rounded text-sm"
              />
            </div>
            <div>
              <label class="block text-white text-sm mb-1">Y Position</label>
              <input 
                type="number" 
                id="crop-y" 
                placeholder="0" 
                min="0"
                class="w-full px-2 py-1 bg-black text-white border border-yellow rounded text-sm"
              />
            </div>
            <div>
              <label class="block text-white text-sm mb-1">Width</label>
              <input 
                type="number" 
                id="crop-width" 
                placeholder="Auto" 
                min="1"
                class="w-full px-2 py-1 bg-black text-white border border-yellow rounded text-sm"
              />
            </div>
            <div>
              <label class="block text-white text-sm mb-1">Height</label>
              <input 
                type="number" 
                id="crop-height" 
                placeholder="Auto" 
                min="1"
                class="w-full px-2 py-1 bg-black text-white border border-yellow rounded text-sm"
              />
            </div>
          </div>
          <button id="apply-manual-crop" class="btn-secondary w-full py-2 rounded text-sm">
            <i class="fas fa-check mr-2"></i>Apply Manual Crop
          </button>

          <div>
            <label class="block text-white mb-2">Crop Alignment</label>
            <div class="grid grid-cols-3 gap-2">
              <button class="align-btn btn-secondary py-2 text-xs rounded" data-align="top-left">Top Left</button>
              <button class="align-btn btn-secondary py-2 text-xs rounded" data-align="top-center">Top Center</button>
              <button class="align-btn btn-secondary py-2 text-xs rounded" data-align="top-right">Top Right</button>
              <button class="align-btn btn-secondary py-2 text-xs rounded" data-align="center-left">Center Left</button>
              <button class="align-btn btn-primary py-2 text-xs rounded" data-align="center">Center</button>
              <button class="align-btn btn-secondary py-2 text-xs rounded" data-align="center-right">Center Right</button>
              <button class="align-btn btn-secondary py-2 text-xs rounded" data-align="bottom-left">Bottom Left</button>
              <button class="align-btn btn-secondary py-2 text-xs rounded" data-align="bottom-center">Bottom Center</button>
              <button class="align-btn btn-secondary py-2 text-xs rounded" data-align="bottom-right">Bottom Right</button>
            </div>
          </div>

          <div>
            <label class="flex items-center text-white">
              <input type="checkbox" id="show-grid" class="mr-2" />
              <i class="fas fa-th mr-2 text-yellow"></i>
              Show grid overlay (Rule of thirds)
            </label>
          </div>
        </div>
      </details>
    </div>
  )

  return ToolTemplate({
    title: 'Crop Image',
    icon: 'fa-crop',
    description: 'Cut and trim your images to the perfect size',
    toolId: 'crop',
    controls
  })
}
