import { ToolTemplate } from '../components/tool-template'

export const CompressPage = () => {
  const controls = (
    <div class="space-y-4">
      <div class="bg-gray-800 rounded-lg p-4">
        <label class="block text-yellow font-bold mb-2">
          <i class="fas fa-sliders-h mr-2"></i>
          Compression Quality
        </label>
        <input 
          type="range" 
          id="quality-slider" 
          min="10" 
          max="100" 
          value="80" 
          class="w-full"
        />
        <div class="flex justify-between text-sm text-gray-400 mt-2">
          <span>Lower quality (smaller file)</span>
          <span id="quality-value" class="text-yellow font-bold">80%</span>
          <span>Higher quality (larger file)</span>
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
            <label class="block text-white mb-2">Output Format</label>
            <select id="compress-format" class="w-full px-4 py-2 bg-black text-white border-2 border-yellow rounded">
              <option value="jpeg">JPEG (Best compression)</option>
              <option value="png">PNG (Lossless)</option>
              <option value="webp">WebP (Modern, efficient)</option>
            </select>
          </div>
          
          <div>
            <label class="block text-white mb-2">
              <i class="fas fa-compress-arrows-alt mr-2"></i>
              Compression Method
            </label>
            <select id="compress-method" class="w-full px-4 py-2 bg-black text-white border-2 border-yellow rounded">
              <option value="standard">Standard</option>
              <option value="aggressive">Aggressive (Smaller file)</option>
              <option value="balanced">Balanced</option>
            </select>
          </div>

          <div>
            <label class="flex items-center text-white">
              <input type="checkbox" id="preserve-metadata" class="mr-2" />
              <i class="fas fa-info-circle mr-2 text-yellow"></i>
              Preserve image metadata
            </label>
          </div>

          <div>
            <label class="flex items-center text-white">
              <input type="checkbox" id="optimize-colors" checked class="mr-2" />
              <i class="fas fa-palette mr-2 text-yellow"></i>
              Optimize color palette
            </label>
          </div>

          <div class="bg-black rounded p-3">
            <div class="flex justify-between text-sm">
              <span class="text-gray-400">Original Size:</span>
              <span id="original-size" class="text-yellow font-bold">--</span>
            </div>
            <div class="flex justify-between text-sm mt-2">
              <span class="text-gray-400">Estimated Size:</span>
              <span id="estimated-size" class="text-yellow font-bold">--</span>
            </div>
            <div class="flex justify-between text-sm mt-2">
              <span class="text-gray-400">Savings:</span>
              <span id="savings" class="text-green-400 font-bold">--</span>
            </div>
          </div>
        </div>
      </details>
    </div>
  )

  return ToolTemplate({
    title: 'Compress Image',
    icon: 'fa-compress',
    description: 'Reduce image file size while maintaining quality',
    toolId: 'compress',
    controls
  })
}
