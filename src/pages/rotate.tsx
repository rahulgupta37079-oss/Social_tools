import { ToolTemplate } from '../components/tool-template'

export const RotatePage = () => {
  const controls = (
    <div class="mb-6 bg-gray-800 rounded-lg p-4">
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
  )

  return ToolTemplate({
    title: 'Rotate Image',
    icon: 'fa-redo',
    description: 'Rotate your images to any angle',
    toolId: 'rotate',
    controls
  })
}
