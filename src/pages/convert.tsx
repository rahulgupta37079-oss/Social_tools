import { ToolTemplate } from '../components/tool-template'

export const ConvertPage = () => {
  const controls = (
    <div class="space-y-4">
      <div class="bg-gray-800 rounded-lg p-4">
        <label class="block text-yellow font-bold mb-3">
          <i class="fas fa-file-image mr-2"></i>
          Convert to Format
        </label>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
          <button class="format-btn btn-secondary py-3 rounded" data-format="png">
            <i class="fas fa-file mr-2"></i>PNG
          </button>
          <button class="format-btn btn-secondary py-3 rounded" data-format="jpeg">
            <i class="fas fa-file mr-2"></i>JPEG
          </button>
          <button class="format-btn btn-secondary py-3 rounded" data-format="webp">
            <i class="fas fa-file mr-2"></i>WebP
          </button>
          <button class="format-btn btn-secondary py-3 rounded" data-format="bmp">
            <i class="fas fa-file mr-2"></i>BMP
          </button>
        </div>
        <p class="text-gray-400 text-sm mt-3">
          <i class="fas fa-info-circle mr-2"></i>
          Selected format: <span id="selected-format" class="text-yellow font-bold">PNG</span>
        </p>
      </div>

      {/* Advanced Options */}
      <details class="bg-gray-800 rounded-lg p-4">
        <summary class="text-yellow font-bold cursor-pointer hover:text-white transition">
          <i class="fas fa-cog mr-2"></i>
          Advanced Options
        </summary>
        <div class="mt-4 space-y-4">
          <div id="jpeg-options" class="hidden">
            <label class="block text-white mb-2">
              <i class="fas fa-sliders-h mr-2"></i>
              JPEG Quality
            </label>
            <input 
              type="range" 
              id="jpeg-quality" 
              min="10" 
              max="100" 
              value="90" 
              class="w-full"
            />
            <div class="flex justify-between text-sm text-gray-400 mt-2">
              <span>Lower</span>
              <span id="jpeg-quality-value" class="text-yellow font-bold">90%</span>
              <span>Higher</span>
            </div>

            <label class="flex items-center text-white mt-3">
              <input type="checkbox" id="progressive-jpeg" class="mr-2" />
              <i class="fas fa-layer-group mr-2 text-yellow"></i>
              Progressive JPEG (Better for web)
            </label>
          </div>

          <div id="png-options" class="hidden">
            <label class="block text-white mb-2">PNG Compression Level</label>
            <select id="png-compression" class="w-full px-4 py-2 bg-black text-white border-2 border-yellow rounded">
              <option value="0">No compression (Fastest)</option>
              <option value="3">Low compression</option>
              <option value="6" selected>Medium compression</option>
              <option value="9">Maximum compression (Slowest)</option>
            </select>

            <label class="flex items-center text-white mt-3">
              <input type="checkbox" id="png-transparency" checked class="mr-2" />
              <i class="fas fa-chess-board mr-2 text-yellow"></i>
              Preserve transparency
            </label>
          </div>

          <div id="webp-options" class="hidden">
            <label class="block text-white mb-2">
              <i class="fas fa-sliders-h mr-2"></i>
              WebP Quality
            </label>
            <input 
              type="range" 
              id="webp-quality" 
              min="10" 
              max="100" 
              value="85" 
              class="w-full"
            />
            <div class="flex justify-between text-sm text-gray-400 mt-2">
              <span>Lower</span>
              <span id="webp-quality-value" class="text-yellow font-bold">85%</span>
              <span>Higher</span>
            </div>

            <label class="flex items-center text-white mt-3">
              <input type="checkbox" id="webp-lossless" class="mr-2" />
              <i class="fas fa-lock mr-2 text-yellow"></i>
              Lossless WebP
            </label>
          </div>

          <div>
            <label class="block text-white mb-2">Color Space</label>
            <select id="color-space" class="w-full px-4 py-2 bg-black text-white border-2 border-yellow rounded">
              <option value="srgb">sRGB (Standard)</option>
              <option value="rgb">RGB</option>
              <option value="grayscale">Grayscale</option>
            </select>
          </div>

          <div>
            <label class="flex items-center text-white">
              <input type="checkbox" id="strip-metadata" class="mr-2" />
              <i class="fas fa-eraser mr-2 text-yellow"></i>
              Strip metadata (Reduce file size)
            </label>
          </div>

          <div>
            <label class="flex items-center text-white">
              <input type="checkbox" id="optimize-output" checked class="mr-2" />
              <i class="fas fa-compress mr-2 text-yellow"></i>
              Optimize for file size
            </label>
          </div>

          <div class="bg-black rounded p-3">
            <div class="text-sm text-gray-400 mb-2">Format Information:</div>
            <div id="format-info" class="text-xs text-gray-300">
              Select a format to see details
            </div>
          </div>
        </div>
      </details>
    </div>
  )

  return ToolTemplate({
    title: 'Convert Image Format',
    icon: 'fa-exchange-alt',
    description: 'Convert between different image formats',
    toolId: 'convert',
    controls
  })
}
