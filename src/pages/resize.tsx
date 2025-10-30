import { ToolTemplate } from '../components/tool-template'

export const ResizePage = () => {
  const controls = (
    <div class="space-y-4">
      <div class="bg-gray-800 rounded-lg p-4 grid grid-cols-2 gap-4">
        <div>
          <label class="block text-yellow font-bold mb-2">
            <i class="fas fa-arrows-alt-h mr-2"></i>
            Width (px)
          </label>
          <input 
            type="number" 
            id="width-input" 
            placeholder="800" 
            class="w-full px-4 py-2 bg-black text-white border-2 border-yellow rounded"
          />
        </div>
        <div>
          <label class="block text-yellow font-bold mb-2">
            <i class="fas fa-arrows-alt-v mr-2"></i>
            Height (px)
          </label>
          <input 
            type="number" 
            id="height-input" 
            placeholder="600" 
            class="w-full px-4 py-2 bg-black text-white border-2 border-yellow rounded"
          />
        </div>
        <div class="col-span-2">
          <label class="flex items-center text-white">
            <input type="checkbox" id="keep-aspect" checked class="mr-2" />
            <i class="fas fa-lock mr-2 text-yellow"></i>
            Keep aspect ratio
          </label>
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
            <label class="block text-white mb-2">Resize Mode</label>
            <select id="resize-mode" class="w-full px-4 py-2 bg-black text-white border-2 border-yellow rounded">
              <option value="stretch">Stretch to fit</option>
              <option value="contain">Contain (add padding)</option>
              <option value="cover">Cover (crop to fit)</option>
              <option value="exact">Exact dimensions</option>
            </select>
          </div>

          <div>
            <label class="block text-white mb-2">
              <i class="fas fa-magic mr-2"></i>
              Resampling Algorithm
            </label>
            <select id="resampling-method" class="w-full px-4 py-2 bg-black text-white border-2 border-yellow rounded">
              <option value="high">High Quality (Slower)</option>
              <option value="medium" selected>Medium Quality</option>
              <option value="low">Low Quality (Faster)</option>
              <option value="pixelated">Pixelated (No smoothing)</option>
            </select>
          </div>

          <div>
            <label class="block text-white mb-2">
              <i class="fas fa-percentage mr-2"></i>
              Scale by Percentage
            </label>
            <div class="flex items-center gap-2">
              <input 
                type="number" 
                id="scale-percentage" 
                placeholder="100" 
                min="1"
                max="500"
                class="flex-1 px-4 py-2 bg-black text-white border-2 border-yellow rounded"
              />
              <button id="apply-percentage" class="btn-secondary px-4 py-2 rounded">
                Apply %
              </button>
            </div>
          </div>

          <div>
            <label class="block text-white mb-2">Quick Resize Presets</label>
            <div class="grid grid-cols-2 gap-2">
              <button class="preset-btn btn-secondary py-2 text-sm rounded" data-width="1920" data-height="1080">1920×1080 (Full HD)</button>
              <button class="preset-btn btn-secondary py-2 text-sm rounded" data-width="1280" data-height="720">1280×720 (HD)</button>
              <button class="preset-btn btn-secondary py-2 text-sm rounded" data-width="800" data-height="600">800×600 (SVGA)</button>
              <button class="preset-btn btn-secondary py-2 text-sm rounded" data-width="640" data-height="480">640×480 (VGA)</button>
            </div>
          </div>

          <div>
            <label class="flex items-center text-white">
              <input type="checkbox" id="sharpen-resize" class="mr-2" />
              <i class="fas fa-adjust mr-2 text-yellow"></i>
              Apply sharpening after resize
            </label>
          </div>
        </div>
      </details>
    </div>
  )

  return ToolTemplate({
    title: 'Resize Image',
    icon: 'fa-expand-arrows-alt',
    description: 'Change image dimensions while maintaining quality',
    toolId: 'resize',
    controls
  })
}
