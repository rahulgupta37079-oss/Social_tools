import { ToolTemplate } from '../components/tool-template'

export const RotatePage = () => {
  const controls = (
    <div class="space-y-4">
      <div class="bg-gray-800 rounded-lg p-4">
        <label class="block text-yellow font-bold mb-3">
          <i class="fas fa-redo mr-2"></i>
          Rotation Angle
        </label>
        <div class="grid grid-cols-4 gap-3 mb-4">
          <button class="rotate-btn btn-secondary py-3 rounded" data-angle="90">
            <i class="fas fa-redo mr-2"></i>90°
          </button>
          <button class="rotate-btn btn-secondary py-3 rounded" data-angle="180">
            <i class="fas fa-redo mr-2"></i>180°
          </button>
          <button class="rotate-btn btn-secondary py-3 rounded" data-angle="270">
            <i class="fas fa-redo mr-2"></i>270°
          </button>
          <button class="rotate-btn btn-secondary py-3 rounded" data-angle="-90">
            <i class="fas fa-undo mr-2"></i>-90°
          </button>
        </div>
        <label class="block text-white mb-2">Custom Angle</label>
        <input 
          type="range" 
          id="angle-slider" 
          min="0" 
          max="360" 
          value="0" 
          class="w-full"
        />
        <div class="text-center text-yellow font-bold mt-2">
          <span id="angle-value">0°</span>
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
              <i class="fas fa-fill-drip mr-2"></i>
              Background Color
            </label>
            <div class="flex gap-2 items-center">
              <input 
                type="color" 
                id="rotate-bg-color" 
                value="#000000" 
                class="w-16 h-10 rounded border-2 border-yellow cursor-pointer"
              />
              <span class="text-gray-400 text-sm">Fill empty areas with this color</span>
            </div>
          </div>

          <div>
            <label class="flex items-center text-white">
              <input type="checkbox" id="auto-trim" class="mr-2" />
              <i class="fas fa-crop mr-2 text-yellow"></i>
              Auto-trim edges (Remove empty space)
            </label>
          </div>

          <div>
            <label class="flex items-center text-white">
              <input type="checkbox" id="expand-canvas" checked class="mr-2" />
              <i class="fas fa-expand mr-2 text-yellow"></i>
              Expand canvas to fit rotated image
            </label>
          </div>

          <div>
            <label class="block text-white mb-2">Rotation Direction</label>
            <div class="grid grid-cols-2 gap-2">
              <button class="direction-btn btn-primary py-2 rounded" data-direction="clockwise">
                <i class="fas fa-redo mr-2"></i>Clockwise
              </button>
              <button class="direction-btn btn-secondary py-2 rounded" data-direction="counter">
                <i class="fas fa-undo mr-2"></i>Counter-clockwise
              </button>
            </div>
          </div>

          <div>
            <label class="block text-white mb-2">Fine Tune Angle</label>
            <input 
              type="number" 
              id="precise-angle" 
              placeholder="0.00" 
              step="0.01"
              min="-360"
              max="360"
              class="w-full px-4 py-2 bg-black text-white border-2 border-yellow rounded"
            />
            <p class="text-gray-400 text-xs mt-1">Enter precise angle (supports decimals)</p>
          </div>

          <div>
            <label class="block text-white mb-2">Quick Rotate Options</label>
            <div class="grid grid-cols-3 gap-2">
              <button class="quick-rotate btn-secondary py-2 text-sm rounded" data-angle="45">45°</button>
              <button class="quick-rotate btn-secondary py-2 text-sm rounded" data-angle="135">135°</button>
              <button class="quick-rotate btn-secondary py-2 text-sm rounded" data-angle="225">225°</button>
              <button class="quick-rotate btn-secondary py-2 text-sm rounded" data-angle="315">315°</button>
              <button class="quick-rotate btn-secondary py-2 text-sm rounded" data-angle="22.5">22.5°</button>
              <button class="quick-rotate btn-secondary py-2 text-sm rounded" data-angle="67.5">67.5°</button>
            </div>
          </div>

          <div>
            <label class="flex items-center text-white">
              <input type="checkbox" id="smooth-rotation" checked class="mr-2" />
              <i class="fas fa-bezier-curve mr-2 text-yellow"></i>
              Smooth rotation (Better quality)
            </label>
          </div>
        </div>
      </details>
    </div>
  )

  return ToolTemplate({
    title: 'Rotate Image',
    icon: 'fa-redo',
    description: 'Rotate your images to any angle',
    toolId: 'rotate',
    controls
  })
}
