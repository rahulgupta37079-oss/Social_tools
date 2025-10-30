import { ToolTemplate } from '../components/tool-template'

export const WatermarkPage = () => {
  const controls = (
    <div class="mb-6 bg-gray-800 rounded-lg p-4">
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
  )

  return ToolTemplate({
    title: 'Add Watermark',
    icon: 'fa-stamp',
    description: 'Protect your images with custom watermarks',
    toolId: 'watermark',
    controls
  })
}
