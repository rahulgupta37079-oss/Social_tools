import { ToolTemplate } from '../components/tool-template'

export const MergePage = () => {
  const controls = (
    <div class="space-y-4">
      <div class="bg-gray-800 rounded-lg p-4">
        <label class="block text-yellow font-bold mb-3">
          <i class="fas fa-layer-group mr-2"></i>
          Merge Direction
        </label>
        <div class="grid grid-cols-2 gap-3 mb-4">
          <button class="merge-btn btn-primary py-3 rounded" data-direction="horizontal">
            <i class="fas fa-arrows-alt-h mr-2"></i>Horizontal
          </button>
          <button class="merge-btn btn-secondary py-3 rounded" data-direction="vertical">
            <i class="fas fa-arrows-alt-v mr-2"></i>Vertical
          </button>
        </div>
        <div class="mb-4">
          <label class="block text-white mb-2">Add More Images</label>
          <input type="file" id="additional-files" accept="image/*" multiple class="hidden" />
          <button class="btn-secondary w-full py-2 rounded" onclick="document.getElementById('additional-files').click()">
            <i class="fas fa-plus mr-2"></i>Add Images
          </button>
        </div>
        <div id="image-list" class="text-gray-400 text-sm">
          <i class="fas fa-info-circle mr-2"></i>
          Upload first image to start
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
              <i class="fas fa-arrows-alt-h mr-2"></i>
              Spacing Between Images (px)
            </label>
            <input 
              type="number" 
              id="merge-spacing" 
              value="0" 
              min="0" 
              max="100"
              class="w-full px-4 py-2 bg-black text-white border-2 border-yellow rounded"
            />
          </div>

          <div>
            <label class="block text-white mb-2">Alignment</label>
            <select id="merge-alignment" class="w-full px-4 py-2 bg-black text-white border-2 border-yellow rounded">
              <option value="start">Start (Top/Left)</option>
              <option value="center" selected>Center</option>
              <option value="end">End (Bottom/Right)</option>
              <option value="stretch">Stretch to fit</option>
            </select>
          </div>

          <div>
            <label class="block text-white mb-2">
              <i class="fas fa-fill-drip mr-2"></i>
              Background Color
            </label>
            <div class="flex gap-2 items-center">
              <input 
                type="color" 
                id="merge-bg-color" 
                value="#FFFFFF" 
                class="w-16 h-10 rounded border-2 border-yellow cursor-pointer"
              />
              <span class="text-gray-400 text-sm">Fill empty areas with this color</span>
            </div>
          </div>

          <div>
            <label class="flex items-center text-white">
              <input type="checkbox" id="transparent-bg" class="mr-2" />
              <i class="fas fa-chess-board mr-2 text-yellow"></i>
              Use transparent background
            </label>
          </div>

          <div>
            <label class="block text-white mb-2">Grid Layout</label>
            <div class="grid grid-cols-2 gap-2">
              <button class="grid-btn btn-secondary py-2 rounded" data-layout="row">
                <i class="fas fa-grip-horizontal mr-2"></i>Single Row
              </button>
              <button class="grid-btn btn-secondary py-2 rounded" data-layout="column">
                <i class="fas fa-grip-vertical mr-2"></i>Single Column
              </button>
              <button class="grid-btn btn-secondary py-2 rounded" data-layout="2x2">
                <i class="fas fa-th mr-2"></i>2×2 Grid
              </button>
              <button class="grid-btn btn-secondary py-2 rounded" data-layout="3x3">
                <i class="fas fa-th-large mr-2"></i>3×3 Grid
              </button>
            </div>
          </div>

          <div>
            <label class="block text-white mb-2">
              <i class="fas fa-border-all mr-2"></i>
              Border Settings
            </label>
            <div class="grid grid-cols-2 gap-2">
              <div>
                <label class="block text-gray-400 text-xs mb-1">Border Width</label>
                <input 
                  type="number" 
                  id="border-width" 
                  value="0" 
                  min="0" 
                  max="20"
                  class="w-full px-2 py-1 bg-black text-white border border-yellow rounded"
                />
              </div>
              <div>
                <label class="block text-gray-400 text-xs mb-1">Border Color</label>
                <input 
                  type="color" 
                  id="border-color" 
                  value="#000000" 
                  class="w-full h-8 rounded border border-yellow cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div>
            <label class="flex items-center text-white">
              <input type="checkbox" id="match-sizes" class="mr-2" />
              <i class="fas fa-compress-arrows-alt mr-2 text-yellow"></i>
              Match all images to same size
            </label>
          </div>

          <div>
            <label class="block text-white mb-2">Image Order</label>
            <div class="bg-black rounded p-2" id="image-order">
              <p class="text-gray-400 text-xs">Drag images to reorder (coming soon)</p>
            </div>
          </div>

          <div>
            <label class="block text-white mb-2">Padding (px)</label>
            <div class="grid grid-cols-4 gap-2">
              <div>
                <label class="block text-gray-400 text-xs mb-1">Top</label>
                <input type="number" id="padding-top" value="0" min="0" class="w-full px-2 py-1 bg-black text-white border border-yellow rounded text-sm" />
              </div>
              <div>
                <label class="block text-gray-400 text-xs mb-1">Right</label>
                <input type="number" id="padding-right" value="0" min="0" class="w-full px-2 py-1 bg-black text-white border border-yellow rounded text-sm" />
              </div>
              <div>
                <label class="block text-gray-400 text-xs mb-1">Bottom</label>
                <input type="number" id="padding-bottom" value="0" min="0" class="w-full px-2 py-1 bg-black text-white border border-yellow rounded text-sm" />
              </div>
              <div>
                <label class="block text-gray-400 text-xs mb-1">Left</label>
                <input type="number" id="padding-left" value="0" min="0" class="w-full px-2 py-1 bg-black text-white border border-yellow rounded text-sm" />
              </div>
            </div>
          </div>
        </div>
      </details>
    </div>
  )

  return ToolTemplate({
    title: 'Merge Images',
    icon: 'fa-layer-group',
    description: 'Combine multiple images into one',
    toolId: 'merge',
    controls
  })
}
