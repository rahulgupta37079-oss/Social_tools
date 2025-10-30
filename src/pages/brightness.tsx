import { ToolTemplate } from '../components/tool-template'

export const BrightnessPage = () => {
  const controls = (
    <div class="mb-6 bg-gray-800 rounded-lg p-4 space-y-4">
      <div>
        <label class="block text-yellow font-bold mb-2">
          <i class="fas fa-sun mr-2"></i>
          Brightness
        </label>
        <input 
          type="range" 
          id="brightness-slider" 
          min="-100" 
          max="100" 
          value="0" 
          class="w-full"
        />
        <div class="flex justify-between text-sm text-gray-400 mt-2">
          <span>Darker</span>
          <span id="brightness-value" class="text-yellow font-bold">0</span>
          <span>Brighter</span>
        </div>
      </div>
      
      <div>
        <label class="block text-yellow font-bold mb-2">
          <i class="fas fa-adjust mr-2"></i>
          Contrast
        </label>
        <input 
          type="range" 
          id="contrast-slider" 
          min="-100" 
          max="100" 
          value="0" 
          class="w-full"
        />
        <div class="flex justify-between text-sm text-gray-400 mt-2">
          <span>Lower</span>
          <span id="contrast-value" class="text-yellow font-bold">0</span>
          <span>Higher</span>
        </div>
      </div>
      
      <div>
        <label class="block text-yellow font-bold mb-2">
          <i class="fas fa-palette mr-2"></i>
          Saturation
        </label>
        <input 
          type="range" 
          id="saturation-slider" 
          min="-100" 
          max="100" 
          value="0" 
          class="w-full"
        />
        <div class="flex justify-between text-sm text-gray-400 mt-2">
          <span>Grayscale</span>
          <span id="saturation-value" class="text-yellow font-bold">0</span>
          <span>Vibrant</span>
        </div>
      </div>

      <button id="reset-adjustments" class="btn-secondary w-full py-2 rounded">
        <i class="fas fa-undo mr-2"></i>Reset All Adjustments
      </button>
    </div>
  )

  return ToolTemplate({
    title: 'Adjust Brightness',
    icon: 'fa-sun',
    description: 'Fine-tune brightness, contrast, and saturation',
    toolId: 'brightness',
    controls
  })
}
