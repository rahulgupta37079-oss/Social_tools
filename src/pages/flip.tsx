import { ToolTemplate } from '../components/tool-template'

export const FlipPage = () => {
  const controls = (
    <div class="space-y-4">
      <div class="bg-gray-800 rounded-lg p-4">
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

      {/* Advanced Options */}
      <details class="bg-gray-800 rounded-lg p-4">
        <summary class="text-yellow font-bold cursor-pointer hover:text-white transition">
          <i class="fas fa-cog mr-2"></i>
          Advanced Options
        </summary>
        <div class="mt-4 space-y-4">
          <div>
            <label class="block text-white mb-2">Combined Flip</label>
            <button class="flip-both-btn btn-secondary w-full py-3 rounded" data-direction="both">
              <i class="fas fa-sync-alt mr-2"></i>
              Flip Both (Horizontal + Vertical)
            </button>
          </div>

          <div>
            <label class="block text-white mb-2">Quick Actions</label>
            <div class="grid grid-cols-2 gap-2">
              <button class="action-btn btn-secondary py-2 text-sm rounded" data-action="mirror-h">
                <i class="fas fa-clone mr-2"></i>Mirror Horizontal
              </button>
              <button class="action-btn btn-secondary py-2 text-sm rounded" data-action="mirror-v">
                <i class="fas fa-clone mr-2"></i>Mirror Vertical
              </button>
            </div>
          </div>

          <div>
            <label class="flex items-center text-white">
              <input type="checkbox" id="flip-animation" checked class="mr-2" />
              <i class="fas fa-bolt mr-2 text-yellow"></i>
              Smooth flip animation
            </label>
          </div>

          <div class="bg-black rounded p-3">
            <div class="text-sm text-gray-400 mb-2">Flip History:</div>
            <div id="flip-history" class="text-xs text-gray-300">
              No flips applied yet
            </div>
          </div>
        </div>
      </details>
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
