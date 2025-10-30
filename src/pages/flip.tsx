import { ToolTemplate } from '../components/tool-template'

export const FlipPage = () => {
  const controls = (
    <div class="mb-6 bg-gray-800 rounded-lg p-4">
      <label class="block text-yellow font-bold mb-3">
        <i class="fas fa-arrows-alt mr-2"></i>
        Flip Direction
      </label>
      <div class="grid grid-cols-2 gap-4">
        <button class="flip-btn btn-secondary py-4 rounded" data-direction="horizontal">
          <i class="fas fa-arrows-alt-h text-2xl mb-2"></i>
          <div>Flip Horizontal</div>
        </button>
        <button class="flip-btn btn-secondary py-4 rounded" data-direction="vertical">
          <i class="fas fa-arrows-alt-v text-2xl mb-2"></i>
          <div>Flip Vertical</div>
        </button>
      </div>
      <p class="text-gray-400 text-sm mt-3">
        <i class="fas fa-info-circle mr-2"></i>
        Click the buttons to flip the image instantly
      </p>
    </div>
  )

  return ToolTemplate({
    title: 'Flip Image',
    icon: 'fa-arrows-alt-h',
    description: 'Flip images horizontally or vertically',
    toolId: 'flip',
    controls
  })
}
