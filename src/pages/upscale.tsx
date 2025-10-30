import { ToolTemplate } from '../components/tool-template'

export const UpscalePage = () => {
  const controls = (
    <div class="space-y-4">
      <div class="bg-gray-800 rounded-lg p-4">
        <label class="block text-yellow font-bold mb-3">
          <i class="fas fa-search-plus mr-2"></i>
          Upscale Factor
        </label>
        <div class="grid grid-cols-3 gap-3 mb-4">
          <button class="scale-btn btn-secondary py-3 rounded" data-scale="2">
            <i class="fas fa-expand mr-2"></i>2x
          </button>
          <button class="scale-btn btn-primary py-3 rounded" data-scale="3">
            <i class="fas fa-expand mr-2"></i>3x
          </button>
          <button class="scale-btn btn-secondary py-3 rounded" data-scale="4">
            <i class="fas fa-expand mr-2"></i>4x
          </button>
        </div>
        <div class="bg-black rounded p-4">
          <h4 class="text-yellow font-bold mb-2">
            <i class="fas fa-info-circle mr-2"></i>
            About Upscaling:
          </h4>
          <p class="text-gray-400 text-sm">
            Upscaling increases the resolution of your image. This uses interpolation 
            to add pixels and enhance details. Best results with photos and graphics.
          </p>
        </div>
      </div>

      {/* Advanced Options */}
      <details class="bg-gray-800 rounded-lg p-4">
        <summary class="text-yellow font-bold cursor-pointer hover:text-white transition">
          <i class="fas fa-cog mr-2"></i>
          Advanced Options
        </summary>
        <div class="mt-4 space-y-4">
          <div>
            <label class="block text-white mb-2">
              <i class="fas fa-magic mr-2"></i>
              Interpolation Method
            </label>
            <select id="interpolation-method" class="w-full px-4 py-2 bg-black text-white border-2 border-yellow rounded">
              <option value="nearest">Nearest Neighbor (Pixelated)</option>
              <option value="bilinear">Bilinear (Fast)</option>
              <option value="bicubic" selected>Bicubic (Balanced)</option>
              <option value="high">High Quality (Slow)</option>
              <option value="lanczos">Lanczos (Best quality)</option>
            </select>
            <p class="text-gray-400 text-xs mt-1">Higher quality = slower processing</p>
          </div>

          <div>
            <label class="block text-white mb-2">Custom Scale Factor</label>
            <input 
              type="number" 
              id="custom-scale" 
              placeholder="1.5" 
              step="0.1"
              min="1"
              max="10"
              class="w-full px-4 py-2 bg-black text-white border-2 border-yellow rounded"
            />
            <p class="text-gray-400 text-xs mt-1">Enter custom scale (e.g., 1.5, 2.5)</p>
          </div>

          <div>
            <label class="block text-white mb-2">
              <i class="fas fa-adjust mr-2"></i>
              Sharpening
            </label>
            <input 
              type="range" 
              id="sharpen-amount" 
              min="0" 
              max="100" 
              value="50" 
              class="w-full"
            />
            <div class="flex justify-between text-sm text-gray-400 mt-2">
              <span>None</span>
              <span id="sharpen-value" class="text-yellow font-bold">50%</span>
              <span>Maximum</span>
            </div>
          </div>

          <div>
            <label class="block text-white mb-2">
              <i class="fas fa-brush mr-2"></i>
              Noise Reduction
            </label>
            <input 
              type="range" 
              id="noise-reduction" 
              min="0" 
              max="100" 
              value="20" 
              class="w-full"
            />
            <div class="flex justify-between text-sm text-gray-400 mt-2">
              <span>None</span>
              <span id="noise-value" class="text-yellow font-bold">20%</span>
              <span>Maximum</span>
            </div>
          </div>

          <div>
            <label class="block text-white mb-2">
              <i class="fas fa-paint-brush mr-2"></i>
              Edge Enhancement
            </label>
            <input 
              type="range" 
              id="edge-enhance" 
              min="0" 
              max="100" 
              value="30" 
              class="w-full"
            />
            <div class="flex justify-between text-sm text-gray-400 mt-2">
              <span>None</span>
              <span id="edge-value" class="text-yellow font-bold">30%</span>
              <span>Strong</span>
            </div>
          </div>

          <div>
            <label class="flex items-center text-white">
              <input type="checkbox" id="preserve-details" checked class="mr-2" />
              <i class="fas fa-eye mr-2 text-yellow"></i>
              Preserve fine details
            </label>
          </div>

          <div>
            <label class="flex items-center text-white">
              <input type="checkbox" id="anti-aliasing" checked class="mr-2" />
              <i class="fas fa-bezier-curve mr-2 text-yellow"></i>
              Apply anti-aliasing
            </label>
          </div>

          <div>
            <label class="flex items-center text-white">
              <input type="checkbox" id="color-correction" class="mr-2" />
              <i class="fas fa-palette mr-2 text-yellow"></i>
              Auto color correction
            </label>
          </div>

          <div>
            <label class="block text-white mb-2">Target Resolution</label>
            <div class="grid grid-cols-2 gap-2">
              <div>
                <label class="block text-gray-400 text-xs mb-1">Width (px)</label>
                <input 
                  type="number" 
                  id="target-width" 
                  placeholder="Auto" 
                  min="1"
                  class="w-full px-2 py-1 bg-black text-white border border-yellow rounded"
                />
              </div>
              <div>
                <label class="block text-gray-400 text-xs mb-1">Height (px)</label>
                <input 
                  type="number" 
                  id="target-height" 
                  placeholder="Auto" 
                  min="1"
                  class="w-full px-2 py-1 bg-black text-white border border-yellow rounded"
                />
              </div>
            </div>
            <button id="apply-target-resolution" class="btn-secondary w-full py-2 rounded text-sm mt-2">
              <i class="fas fa-check mr-2"></i>Apply Target Resolution
            </button>
          </div>

          <div>
            <label class="block text-white mb-2">Presets</label>
            <div class="grid grid-cols-2 gap-2">
              <button class="preset-upscale btn-secondary py-2 text-sm rounded" data-width="1920" data-height="1080">
                Full HD (1920×1080)
              </button>
              <button class="preset-upscale btn-secondary py-2 text-sm rounded" data-width="2560" data-height="1440">
                2K (2560×1440)
              </button>
              <button class="preset-upscale btn-secondary py-2 text-sm rounded" data-width="3840" data-height="2160">
                4K (3840×2160)
              </button>
              <button class="preset-upscale btn-secondary py-2 text-sm rounded" data-width="7680" data-height="4320">
                8K (7680×4320)
              </button>
            </div>
          </div>

          <div class="bg-black rounded p-3">
            <div class="grid grid-cols-2 gap-2 text-sm">
              <div>
                <span class="text-gray-400">Original:</span>
                <span id="original-res" class="text-yellow font-bold ml-2">--</span>
              </div>
              <div>
                <span class="text-gray-400">New:</span>
                <span id="new-res" class="text-yellow font-bold ml-2">--</span>
              </div>
            </div>
          </div>
        </div>
      </details>
    </div>
  )

  return ToolTemplate({
    title: 'Upscale Image',
    icon: 'fa-search-plus',
    description: 'Increase image resolution and enhance quality',
    toolId: 'upscale',
    controls
  })
}
