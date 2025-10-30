import { ToolTemplate } from '../components/tool-template'

export const UpscalePage = () => {
  const controls = (
    <div class="mb-6 bg-gray-800 rounded-lg p-4">
      <label class="block text-yellow font-bold mb-3">
        <i class="fas fa-search-plus mr-2"></i>
        Upscale Factor
      </label>
      <div class="grid grid-cols-3 gap-3 mb-4">
        <button class="scale-btn btn-secondary py-3 rounded" data-scale="2">
          <i class="fas fa-expand mr-2"></i>2x
        </button>
        <button class="scale-btn btn-primary py-3 rounded" data-scale="3">
          <i class="fas fa-expand mr-2"></i>3x
        </button>
        <button class="scale-btn btn-secondary py-3 rounded" data-scale="4">
          <i class="fas fa-expand mr-2"></i>4x
        </button>
      </div>
      <div class="bg-black rounded p-4">
        <h4 class="text-yellow font-bold mb-2">
          <i class="fas fa-info-circle mr-2"></i>
          About Upscaling:
        </h4>
        <p class="text-gray-400 text-sm">
          Upscaling increases the resolution of your image. This uses interpolation 
          to add pixels and enhance details. Best results with photos and graphics.
        </p>
      </div>
    </div>
  )

  return ToolTemplate({
    title: 'Upscale Image',
    icon: 'fa-search-plus',
    description: 'Increase image resolution and enhance quality',
    toolId: 'upscale',
    controls
  })
}
