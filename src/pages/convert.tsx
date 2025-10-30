import { ToolTemplate } from '../components/tool-template'

export const ConvertPage = () => {
  const controls = (
    <div class="mb-6 bg-gray-800 rounded-lg p-4">
      <label class="block text-yellow font-bold mb-3">
        <i class="fas fa-file-image mr-2"></i>
        Convert to Format
      </label>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
        <button class="format-btn btn-secondary py-3 rounded" data-format="png">
          <i class="fas fa-file mr-2"></i>PNG
        </button>
        <button class="format-btn btn-secondary py-3 rounded" data-format="jpeg">
          <i class="fas fa-file mr-2"></i>JPEG
        </button>
        <button class="format-btn btn-secondary py-3 rounded" data-format="webp">
          <i class="fas fa-file mr-2"></i>WebP
        </button>
        <button class="format-btn btn-secondary py-3 rounded" data-format="bmp">
          <i class="fas fa-file mr-2"></i>BMP
        </button>
      </div>
      <p class="text-gray-400 text-sm mt-3">
        <i class="fas fa-info-circle mr-2"></i>
        Selected format: <span id="selected-format" class="text-yellow font-bold">PNG</span>
      </p>
    </div>
  )

  return ToolTemplate({
    title: 'Convert Image Format',
    icon: 'fa-exchange-alt',
    description: 'Convert between different image formats',
    toolId: 'convert',
    controls
  })
}
