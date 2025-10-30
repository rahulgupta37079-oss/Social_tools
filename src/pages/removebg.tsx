import { ToolTemplate } from '../components/tool-template'

export const RemoveBgPage = () => {
  const controls = (
    <div class="space-y-4">
      <div class="bg-gray-800 rounded-lg p-4">
        <div class="text-center mb-4">
          <i class="fas fa-cut text-yellow text-4xl mb-2"></i>
          <p class="text-gray-300">
            This tool will process your image and remove the background automatically
          </p>
        </div>
        <div class="bg-black rounded p-4">
          <h4 class="text-yellow font-bold mb-2">
            <i class="fas fa-magic mr-2"></i>
            How it works:
          </h4>
          <ul class="text-gray-400 space-y-2">
            <li><i class="fas fa-check text-yellow mr-2"></i>Upload your image</li>
            <li><i class="fas fa-check text-yellow mr-2"></i>AI detects the subject</li>
            <li><i class="fas fa-check text-yellow mr-2"></i>Background is removed</li>
            <li><i class="fas fa-check text-yellow mr-2"></i>Download transparent PNG</li>
          </ul>
        </div>
        <div class="mt-4">
          <label class="block text-white mb-2">Background Color (optional)</label>
          <input 
            type="color" 
            id="bg-color" 
            value="#ffffff" 
            class="w-full h-12 rounded border-2 border-yellow cursor-pointer"
          />
          <p class="text-gray-400 text-sm mt-2">Choose a solid color background instead of transparent</p>
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
              <i class="fas fa-bullseye mr-2"></i>
              Detection Sensitivity
            </label>
            <input 
              type="range" 
              id="sensitivity" 
              min="1" 
              max="10" 
              value="5" 
              class="w-full"
            />
            <div class="flex justify-between text-sm text-gray-400 mt-2">
              <span>Less sensitive</span>
              <span id="sensitivity-value" class="text-yellow font-bold">5</span>
              <span>More sensitive</span>
            </div>
          </div>

          <div>
            <label class="block text-white mb-2">
              <i class="fas fa-border-style mr-2"></i>
              Edge Refinement
            </label>
            <select id="edge-refinement" class="w-full px-4 py-2 bg-black text-white border-2 border-yellow rounded">
              <option value="none">None</option>
              <option value="soft" selected>Soft edges</option>
              <option value="hard">Hard edges</option>
              <option value="feather">Feathered</option>
            </select>
          </div>

          <div>
            <label class="block text-white mb-2">
              <i class="fas fa-expand-arrows-alt mr-2"></i>
              Feather Radius (px)
            </label>
            <input 
              type="number" 
              id="feather-radius" 
              value="2" 
              min="0" 
              max="20"
              class="w-full px-4 py-2 bg-black text-white border-2 border-yellow rounded"
            />
            <p class="text-gray-400 text-xs mt-1">Soften edges by this many pixels</p>
          </div>

          <div>
            <label class="block text-white mb-2">
              <i class="fas fa-eraser mr-2"></i>
              Threshold
            </label>
            <input 
              type="range" 
              id="threshold" 
              min="0" 
              max="255" 
              value="128" 
              class="w-full"
            />
            <div class="flex justify-between text-sm text-gray-400 mt-2">
              <span>0</span>
              <span id="threshold-value" class="text-yellow font-bold">128</span>
              <span>255</span>
            </div>
          </div>

          <div>
            <label class="flex items-center text-white">
              <input type="checkbox" id="remove-similar-colors" class="mr-2" />
              <i class="fas fa-palette mr-2 text-yellow"></i>
              Remove similar colors
            </label>
          </div>

          <div>
            <label class="flex items-center text-white">
              <input type="checkbox" id="smooth-edges" checked class="mr-2" />
              <i class="fas fa-bezier-curve mr-2 text-yellow"></i>
              Smooth edges (Anti-aliasing)
            </label>
          </div>

          <div>
            <label class="flex items-center text-white">
              <input type="checkbox" id="fill-holes" class="mr-2" />
              <i class="fas fa-fill mr-2 text-yellow"></i>
              Fill small holes in subject
            </label>
          </div>

          <div>
            <label class="block text-white mb-2">Output Options</label>
            <div class="grid grid-cols-2 gap-2">
              <button class="output-btn btn-primary py-2 rounded" data-output="transparent">
                <i class="fas fa-chess-board mr-2"></i>Transparent
              </button>
              <button class="output-btn btn-secondary py-2 rounded" data-output="color">
                <i class="fas fa-fill-drip mr-2"></i>Color Fill
              </button>
            </div>
          </div>

          <div>
            <label class="block text-white mb-2">Preview Mode</label>
            <div class="grid grid-cols-3 gap-2">
              <button class="preview-btn btn-secondary py-2 text-sm rounded" data-mode="original">Original</button>
              <button class="preview-btn btn-primary py-2 text-sm rounded" data-mode="result">Result</button>
              <button class="preview-btn btn-secondary py-2 text-sm rounded" data-mode="split">Split View</button>
            </div>
          </div>

          <div class="bg-black rounded p-3">
            <div class="text-sm text-yellow font-bold mb-2">
              <i class="fas fa-lightbulb mr-2"></i>Tips:
            </div>
            <ul class="text-xs text-gray-300 space-y-1">
              <li>• Works best with clear subject separation</li>
              <li>• Use high resolution images for better results</li>
              <li>• Adjust sensitivity for complex backgrounds</li>
              <li>• Enable edge refinement for natural look</li>
            </ul>
          </div>
        </div>
      </details>
    </div>
  )

  return ToolTemplate({
    title: 'Remove Background',
    icon: 'fa-cut',
    description: 'Remove image backgrounds with AI precision',
    toolId: 'removebg',
    controls
  })
}
