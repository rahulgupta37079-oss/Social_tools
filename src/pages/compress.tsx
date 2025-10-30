import { ToolTemplate } from '../components/tool-template'

export const CompressPage = () => {
  const controls = (
    <div class="mb-6 bg-gray-800 rounded-lg p-4">
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
  )

  return ToolTemplate({
    title: 'Compress Image',
    icon: 'fa-compress',
    description: 'Reduce image file size while maintaining quality',
    toolId: 'compress',
    controls
  })
}
