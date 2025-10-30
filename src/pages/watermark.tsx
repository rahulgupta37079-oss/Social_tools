import { ToolTemplate } from '../components/tool-template'

export const WatermarkPage = () => {
  const controls = (
    <div class="space-y-4">
      <div class="bg-gray-800 rounded-lg p-4">
        <div class="mb-4">
          <label class="block text-yellow font-bold mb-2">
            <i class="fas fa-font mr-2"></i>
            Watermark Text
          </label>
          <input 
            type="text" 
            id="watermark-text" 
            placeholder="© Your Name" 
            class="w-full px-4 py-2 bg-black text-white border-2 border-yellow rounded"
          />
        </div>
        <div class="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label class="block text-white mb-2">Font Size</label>
            <input 
              type="number" 
              id="font-size" 
              value="24" 
              min="10" 
              max="100"
              class="w-full px-4 py-2 bg-black text-white border-2 border-yellow rounded"
            />
          </div>
          <div>
            <label class="block text-white mb-2">Opacity</label>
            <input 
              type="range" 
              id="opacity-slider" 
              min="0" 
              max="100" 
              value="50" 
              class="w-full mt-3"
            />
          </div>
        </div>
        <div>
          <label class="block text-yellow font-bold mb-2">Position</label>
          <div class="grid grid-cols-3 gap-2">
            <button class="position-btn btn-secondary py-2 text-sm rounded" data-position="top-left">Top Left</button>
            <button class="position-btn btn-secondary py-2 text-sm rounded" data-position="top-center">Top Center</button>
            <button class="position-btn btn-secondary py-2 text-sm rounded" data-position="top-right">Top Right</button>
            <button class="position-btn btn-secondary py-2 text-sm rounded" data-position="center-left">Center Left</button>
            <button class="position-btn btn-primary py-2 text-sm rounded" data-position="center">Center</button>
            <button class="position-btn btn-secondary py-2 text-sm rounded" data-position="center-right">Center Right</button>
            <button class="position-btn btn-secondary py-2 text-sm rounded" data-position="bottom-left">Bottom Left</button>
            <button class="position-btn btn-secondary py-2 text-sm rounded" data-position="bottom-center">Bottom Center</button>
            <button class="position-btn btn-secondary py-2 text-sm rounded" data-position="bottom-right">Bottom Right</button>
          </div>
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
              <i class="fas fa-font mr-2"></i>
              Font Family
            </label>
            <select id="font-family" class="w-full px-4 py-2 bg-black text-white border-2 border-yellow rounded">
              <option value="Arial">Arial</option>
              <option value="Helvetica">Helvetica</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Georgia">Georgia</option>
              <option value="Courier New">Courier New</option>
              <option value="Verdana">Verdana</option>
              <option value="Impact">Impact</option>
              <option value="Comic Sans MS">Comic Sans MS</option>
            </select>
          </div>

          <div>
            <label class="block text-white mb-2">Font Style</label>
            <div class="grid grid-cols-3 gap-2">
              <button class="font-style-btn btn-secondary py-2 rounded" data-style="normal">
                <i class="fas fa-font mr-2"></i>Normal
              </button>
              <button class="font-style-btn btn-secondary py-2 rounded" data-style="bold">
                <i class="fas fa-bold mr-2"></i>Bold
              </button>
              <button class="font-style-btn btn-secondary py-2 rounded" data-style="italic">
                <i class="fas fa-italic mr-2"></i>Italic
              </button>
            </div>
          </div>

          <div>
            <label class="block text-white mb-2">
              <i class="fas fa-palette mr-2"></i>
              Text Color
            </label>
            <div class="flex gap-2 items-center">
              <input 
                type="color" 
                id="text-color" 
                value="#FFD700" 
                class="w-16 h-10 rounded border-2 border-yellow cursor-pointer"
              />
              <div class="flex-1">
                <div class="grid grid-cols-5 gap-1">
                  <button class="color-preset w-8 h-8 rounded border-2 border-transparent hover:border-white" style="background: #FFD700" data-color="#FFD700"></button>
                  <button class="color-preset w-8 h-8 rounded border-2 border-transparent hover:border-white" style="background: #FFFFFF" data-color="#FFFFFF"></button>
                  <button class="color-preset w-8 h-8 rounded border-2 border-transparent hover:border-white" style="background: #000000" data-color="#000000"></button>
                  <button class="color-preset w-8 h-8 rounded border-2 border-transparent hover:border-white" style="background: #FF0000" data-color="#FF0000"></button>
                  <button class="color-preset w-8 h-8 rounded border-2 border-transparent hover:border-white" style="background: #0000FF" data-color="#0000FF"></button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <label class="block text-white mb-2">
              <i class="fas fa-redo mr-2"></i>
              Text Rotation
            </label>
            <input 
              type="range" 
              id="text-rotation" 
              min="-180" 
              max="180" 
              value="0" 
              class="w-full"
            />
            <div class="flex justify-between text-sm text-gray-400 mt-2">
              <span>-180°</span>
              <span id="rotation-value" class="text-yellow font-bold">0°</span>
              <span>180°</span>
            </div>
          </div>

          <div>
            <label class="block text-white mb-2">
              <i class="fas fa-border-style mr-2"></i>
              Text Outline
            </label>
            <div class="grid grid-cols-2 gap-2">
              <div>
                <label class="block text-gray-400 text-xs mb-1">Width</label>
                <input 
                  type="number" 
                  id="outline-width" 
                  value="0" 
                  min="0" 
                  max="10"
                  class="w-full px-2 py-1 bg-black text-white border border-yellow rounded"
                />
              </div>
              <div>
                <label class="block text-gray-400 text-xs mb-1">Color</label>
                <input 
                  type="color" 
                  id="outline-color" 
                  value="#000000" 
                  class="w-full h-8 rounded border border-yellow cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div>
            <label class="block text-white mb-2">
              <i class="fas fa-moon mr-2"></i>
              Shadow Effect
            </label>
            <div class="grid grid-cols-3 gap-2">
              <div>
                <label class="block text-gray-400 text-xs mb-1">Offset X</label>
                <input 
                  type="number" 
                  id="shadow-x" 
                  value="2" 
                  min="-20" 
                  max="20"
                  class="w-full px-2 py-1 bg-black text-white border border-yellow rounded"
                />
              </div>
              <div>
                <label class="block text-gray-400 text-xs mb-1">Offset Y</label>
                <input 
                  type="number" 
                  id="shadow-y" 
                  value="2" 
                  min="-20" 
                  max="20"
                  class="w-full px-2 py-1 bg-black text-white border border-yellow rounded"
                />
              </div>
              <div>
                <label class="block text-gray-400 text-xs mb-1">Blur</label>
                <input 
                  type="number" 
                  id="shadow-blur" 
                  value="4" 
                  min="0" 
                  max="20"
                  class="w-full px-2 py-1 bg-black text-white border border-yellow rounded"
                />
              </div>
            </div>
            <input 
              type="color" 
              id="shadow-color" 
              value="#000000" 
              class="w-full h-8 rounded border-2 border-yellow cursor-pointer mt-2"
            />
          </div>

          <div>
            <label class="block text-white mb-2">Custom Position</label>
            <div class="grid grid-cols-2 gap-2">
              <div>
                <label class="block text-gray-400 text-xs mb-1">X Offset (px)</label>
                <input 
                  type="number" 
                  id="custom-x" 
                  placeholder="Auto" 
                  class="w-full px-2 py-1 bg-black text-white border border-yellow rounded"
                />
              </div>
              <div>
                <label class="block text-gray-400 text-xs mb-1">Y Offset (px)</label>
                <input 
                  type="number" 
                  id="custom-y" 
                  placeholder="Auto" 
                  class="w-full px-2 py-1 bg-black text-white border border-yellow rounded"
                />
              </div>
            </div>
          </div>

          <div>
            <label class="flex items-center text-white">
              <input type="checkbox" id="repeat-watermark" class="mr-2" />
              <i class="fas fa-clone mr-2 text-yellow"></i>
              Repeat watermark (Tile across image)
            </label>
          </div>
        </div>
      </details>
    </div>
  )

  return ToolTemplate({
    title: 'Add Watermark',
    icon: 'fa-stamp',
    description: 'Protect your images with custom watermarks',
    toolId: 'watermark',
    controls
  })
}
