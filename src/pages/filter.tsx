import { ToolTemplate } from '../components/tool-template'

export const FilterPage = () => {
  const controls = (
    <div class="space-y-4">
      <div class="bg-gray-800 rounded-lg p-4">
        <label class="block text-yellow font-bold mb-3">
          <i class="fas fa-magic mr-2"></i>
          Choose Filter
        </label>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
          <button class="filter-btn btn-primary py-3 rounded text-sm" data-filter="none">
            <i class="fas fa-image mr-2"></i>Original
          </button>
          <button class="filter-btn btn-secondary py-3 rounded text-sm" data-filter="grayscale">
            <i class="fas fa-adjust mr-2"></i>Grayscale
          </button>
          <button class="filter-btn btn-secondary py-3 rounded text-sm" data-filter="sepia">
            <i class="fas fa-palette mr-2"></i>Sepia
          </button>
          <button class="filter-btn btn-secondary py-3 rounded text-sm" data-filter="invert">
            <i class="fas fa-adjust mr-2"></i>Invert
          </button>
          <button class="filter-btn btn-secondary py-3 rounded text-sm" data-filter="blur">
            <i class="fas fa-circle mr-2"></i>Blur
          </button>
          <button class="filter-btn btn-secondary py-3 rounded text-sm" data-filter="sharpen">
            <i class="fas fa-star mr-2"></i>Sharpen
          </button>
        </div>
        <p class="text-gray-400 text-sm mt-3">
          <i class="fas fa-info-circle mr-2"></i>
          Click any filter to apply it instantly
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
            <label class="block text-white mb-2">Additional Filters</label>
            <div class="grid grid-cols-2 gap-2">
              <button class="filter-btn btn-secondary py-2 text-sm rounded" data-filter="vintage">
                <i class="fas fa-camera-retro mr-2"></i>Vintage
              </button>
              <button class="filter-btn btn-secondary py-2 text-sm rounded" data-filter="polaroid">
                <i class="fas fa-image mr-2"></i>Polaroid
              </button>
              <button class="filter-btn btn-secondary py-2 text-sm rounded" data-filter="emboss">
                <i class="fas fa-cube mr-2"></i>Emboss
              </button>
              <button class="filter-btn btn-secondary py-2 text-sm rounded" data-filter="edge-detect">
                <i class="fas fa-border-style mr-2"></i>Edge Detect
              </button>
              <button class="filter-btn btn-secondary py-2 text-sm rounded" data-filter="posterize">
                <i class="fas fa-th mr-2"></i>Posterize
              </button>
              <button class="filter-btn btn-secondary py-2 text-sm rounded" data-filter="solarize">
                <i class="fas fa-sun mr-2"></i>Solarize
              </button>
            </div>
          </div>

          <div>
            <label class="block text-white mb-2">
              <i class="fas fa-sliders-h mr-2"></i>
              Filter Intensity
            </label>
            <input 
              type="range" 
              id="filter-intensity" 
              min="0" 
              max="100" 
              value="100" 
              class="w-full"
            />
            <div class="flex justify-between text-sm text-gray-400 mt-2">
              <span>Subtle</span>
              <span id="intensity-value" class="text-yellow font-bold">100%</span>
              <span>Strong</span>
            </div>
          </div>

          <div id="blur-controls" class="hidden">
            <label class="block text-white mb-2">
              <i class="fas fa-circle mr-2"></i>
              Blur Radius
            </label>
            <input 
              type="range" 
              id="blur-radius" 
              min="1" 
              max="50" 
              value="5" 
              class="w-full"
            />
            <div class="flex justify-between text-sm text-gray-400 mt-2">
              <span>1px</span>
              <span id="blur-value" class="text-yellow font-bold">5px</span>
              <span>50px</span>
            </div>
          </div>

          <div id="sharpen-controls" class="hidden">
            <label class="block text-white mb-2">
              <i class="fas fa-star mr-2"></i>
              Sharpen Amount
            </label>
            <input 
              type="range" 
              id="sharpen-amount-filter" 
              min="0" 
              max="100" 
              value="50" 
              class="w-full"
            />
            <div class="flex justify-between text-sm text-gray-400 mt-2">
              <span>Subtle</span>
              <span id="sharpen-amount-value" class="text-yellow font-bold">50</span>
              <span>Strong</span>
            </div>
          </div>

          <div>
            <label class="block text-white mb-2">Color Adjustments</label>
            <div class="space-y-2">
              <div>
                <label class="block text-gray-400 text-xs mb-1">Red Channel</label>
                <input type="range" id="red-channel" min="0" max="200" value="100" class="w-full" />
              </div>
              <div>
                <label class="block text-gray-400 text-xs mb-1">Green Channel</label>
                <input type="range" id="green-channel" min="0" max="200" value="100" class="w-full" />
              </div>
              <div>
                <label class="block text-gray-400 text-xs mb-1">Blue Channel</label>
                <input type="range" id="blue-channel" min="0" max="200" value="100" class="w-full" />
              </div>
            </div>
          </div>

          <div>
            <label class="block text-white mb-2">
              <i class="fas fa-temperature-high mr-2"></i>
              Temperature
            </label>
            <input 
              type="range" 
              id="temperature" 
              min="-100" 
              max="100" 
              value="0" 
              class="w-full"
            />
            <div class="flex justify-between text-sm text-gray-400 mt-2">
              <span>Cool</span>
              <span id="temp-value" class="text-yellow font-bold">0</span>
              <span>Warm</span>
            </div>
          </div>

          <div>
            <label class="block text-white mb-2">
              <i class="fas fa-eye-dropper mr-2"></i>
              Tint
            </label>
            <input 
              type="range" 
              id="tint" 
              min="-100" 
              max="100" 
              value="0" 
              class="w-full"
            />
            <div class="flex justify-between text-sm text-gray-400 mt-2">
              <span>Green</span>
              <span id="tint-value" class="text-yellow font-bold">0</span>
              <span>Magenta</span>
            </div>
          </div>

          <div>
            <label class="block text-white mb-2">
              <i class="fas fa-circle-notch mr-2"></i>
              Vignette
            </label>
            <input 
              type="range" 
              id="vignette" 
              min="0" 
              max="100" 
              value="0" 
              class="w-full"
            />
            <div class="flex justify-between text-sm text-gray-400 mt-2">
              <span>None</span>
              <span id="vignette-value" class="text-yellow font-bold">0%</span>
              <span>Strong</span>
            </div>
          </div>

          <div>
            <label class="flex items-center text-white">
              <input type="checkbox" id="auto-enhance" class="mr-2" />
              <i class="fas fa-magic mr-2 text-yellow"></i>
              Auto enhance colors
            </label>
          </div>

          <div>
            <label class="flex items-center text-white">
              <input type="checkbox" id="preserve-skin-tones" class="mr-2" />
              <i class="fas fa-user mr-2 text-yellow"></i>
              Preserve skin tones
            </label>
          </div>

          <div>
            <label class="block text-white mb-2">Custom Filter Presets</label>
            <div class="grid grid-cols-2 gap-2">
              <button class="custom-preset btn-secondary py-2 text-sm rounded" data-preset="bw-high-contrast">B&W High Contrast</button>
              <button class="custom-preset btn-secondary py-2 text-sm rounded" data-preset="warm-sunset">Warm Sunset</button>
              <button class="custom-preset btn-secondary py-2 text-sm rounded" data-preset="cool-winter">Cool Winter</button>
              <button class="custom-preset btn-secondary py-2 text-sm rounded" data-preset="dreamy">Dreamy</button>
            </div>
          </div>

          <div class="flex gap-2">
            <button id="save-preset" class="btn-secondary flex-1 py-2 rounded text-sm">
              <i class="fas fa-save mr-2"></i>Save Preset
            </button>
            <button id="reset-filter" class="btn-secondary flex-1 py-2 rounded text-sm">
              <i class="fas fa-undo mr-2"></i>Reset All
            </button>
          </div>
        </div>
      </details>
    </div>
  )

  return ToolTemplate({
    title: 'Apply Filters',
    icon: 'fa-magic',
    description: 'Add artistic filters and effects to your images',
    toolId: 'filter',
    controls
  })
}
