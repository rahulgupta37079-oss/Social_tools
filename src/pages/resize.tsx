import { ToolTemplate } from '../components/tool-template'

export const ResizePage = () => {
  const controls = (
    <div class="mb-6 bg-gray-800 rounded-lg p-4 grid grid-cols-2 gap-4">
      <div>
        <label class="block text-yellow font-bold mb-2">
          <i class="fas fa-arrows-alt-h mr-2"></i>
          Width (px)
        </label>
        <input 
          type="number" 
          id="width-input" 
          placeholder="800" 
          class="w-full px-4 py-2 bg-black text-white border-2 border-yellow rounded"
        />
      </div>
      <div>
        <label class="block text-yellow font-bold mb-2">
          <i class="fas fa-arrows-alt-v mr-2"></i>
          Height (px)
        </label>
        <input 
          type="number" 
          id="height-input" 
          placeholder="600" 
          class="w-full px-4 py-2 bg-black text-white border-2 border-yellow rounded"
        />
      </div>
      <div class="col-span-2">
        <label class="flex items-center text-white">
          <input type="checkbox" id="keep-aspect" checked class="mr-2" />
          <i class="fas fa-lock mr-2 text-yellow"></i>
          Keep aspect ratio
        </label>
      </div>
    </div>
  )

  return ToolTemplate({
    title: 'Resize Image',
    icon: 'fa-expand-arrows-alt',
    description: 'Change image dimensions while maintaining quality',
    toolId: 'resize',
    controls
  })
}
