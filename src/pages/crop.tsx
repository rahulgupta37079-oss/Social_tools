import { ToolTemplate } from '../components/tool-template'

export const CropPage = () => {
  const controls = (
    <div class="mb-6 bg-gray-800 rounded-lg p-4">
      <label class="block text-yellow font-bold mb-3">
        <i class="fas fa-crop mr-2"></i>
        Crop Presets
      </label>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
        <button class="crop-preset btn-secondary py-2 rounded" data-ratio="1:1">
          <i class="fas fa-square mr-2"></i>Square (1:1)
        </button>
        <button class="crop-preset btn-secondary py-2 rounded" data-ratio="4:3">
          <i class="fas fa-desktop mr-2"></i>4:3
        </button>
        <button class="crop-preset btn-secondary py-2 rounded" data-ratio="16:9">
          <i class="fas fa-tv mr-2"></i>16:9
        </button>
        <button class="crop-preset btn-secondary py-2 rounded" data-ratio="free">
          <i class="fas fa-draw-polygon mr-2"></i>Free
        </button>
      </div>
      <p class="text-gray-400 text-sm mt-3">
        <i class="fas fa-info-circle mr-2"></i>
        Click and drag on the image to select crop area
      </p>
    </div>
  )

  return ToolTemplate({
    title: 'Crop Image',
    icon: 'fa-crop',
    description: 'Cut and trim your images to the perfect size',
    toolId: 'crop',
    controls
  })
}
