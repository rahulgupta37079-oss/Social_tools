import { ToolTemplate } from '../components/tool-template'

export const RemoveBgPage = () => {
  const controls = (
    <div class="mb-6 bg-gray-800 rounded-lg p-4">
      <div class="text-center mb-4">
        <i class="fas fa-cut text-yellow text-4xl mb-2"></i>
        <p class="text-gray-300">
          This tool will process your image and remove the background automatically
        </p>
      </div>
      <div class="bg-black rounded p-4">
        <h4 class="text-yellow font-bold mb-2">
          <i class="fas fa-magic mr-2"></i>
          How it works:
        </h4>
        <ul class="text-gray-400 space-y-2">
          <li><i class="fas fa-check text-yellow mr-2"></i>Upload your image</li>
          <li><i class="fas fa-check text-yellow mr-2"></i>AI detects the subject</li>
          <li><i class="fas fa-check text-yellow mr-2"></i>Background is removed</li>
          <li><i class="fas fa-check text-yellow mr-2"></i>Download transparent PNG</li>
        </ul>
      </div>
      <div class="mt-4">
        <label class="block text-white mb-2">Background Color (optional)</label>
        <input 
          type="color" 
          id="bg-color" 
          value="#ffffff" 
          class="w-full h-12 rounded border-2 border-yellow cursor-pointer"
        />
        <p class="text-gray-400 text-sm mt-2">Choose a solid color background instead of transparent</p>
      </div>
    </div>
  )

  return ToolTemplate({
    title: 'Remove Background',
    icon: 'fa-cut',
    description: 'Remove image backgrounds with AI precision',
    toolId: 'removebg',
    controls
  })
}
