import { ToolTemplate } from '../components/tool-template'

export const MergePage = () => {
  const controls = (
    <div class="mb-6 bg-gray-800 rounded-lg p-4">
      <label class="block text-yellow font-bold mb-3">
        <i class="fas fa-layer-group mr-2"></i>
        Merge Direction
      </label>
      <div class="grid grid-cols-2 gap-3 mb-4">
        <button class="merge-btn btn-primary py-3 rounded" data-direction="horizontal">
          <i class="fas fa-arrows-alt-h mr-2"></i>Horizontal
        </button>
        <button class="merge-btn btn-secondary py-3 rounded" data-direction="vertical">
          <i class="fas fa-arrows-alt-v mr-2"></i>Vertical
        </button>
      </div>
      <div class="mb-4">
        <label class="block text-white mb-2">Add More Images</label>
        <input type="file" id="additional-files" accept="image/*" multiple class="hidden" />
        <button class="btn-secondary w-full py-2 rounded" onclick="document.getElementById('additional-files').click()">
          <i class="fas fa-plus mr-2"></i>Add Images
        </button>
      </div>
      <div id="image-list" class="text-gray-400 text-sm">
        <i class="fas fa-info-circle mr-2"></i>
        Upload first image to start
      </div>
    </div>
  )

  return ToolTemplate({
    title: 'Merge Images',
    icon: 'fa-layer-group',
    description: 'Combine multiple images into one',
    toolId: 'merge',
    controls
  })
}
