import { Layout } from '../components/layout'

export const HomePage = () => {
  const tools = [
    { name: 'Compress Image', icon: 'fa-compress', path: '/compress', desc: 'Reduce file size without losing quality' },
    { name: 'Resize Image', icon: 'fa-expand-arrows-alt', path: '/resize', desc: 'Change image dimensions' },
    { name: 'Crop Image', icon: 'fa-crop', path: '/crop', desc: 'Cut and trim your images' },
    { name: 'Convert Format', icon: 'fa-exchange-alt', path: '/convert', desc: 'Convert between JPG, PNG, WebP' },
    { name: 'Rotate Image', icon: 'fa-redo', path: '/rotate', desc: 'Rotate and flip images' },
    { name: 'Add Watermark', icon: 'fa-stamp', path: '/watermark', desc: 'Protect with watermarks' },
    { name: 'Merge Images', icon: 'fa-layer-group', path: '/merge', desc: 'Combine multiple images' },
    { name: 'Flip Image', icon: 'fa-arrows-alt-h', path: '/flip', desc: 'Flip horizontally or vertically' },
    { name: 'Remove Background', icon: 'fa-cut', path: '/remove-bg', desc: 'Remove image background' },
    { name: 'Upscale Image', icon: 'fa-search-plus', path: '/upscale', desc: 'Increase image resolution' },
    { name: 'Apply Filters', icon: 'fa-magic', path: '/filter', desc: 'Add artistic filters' },
    { name: 'Adjust Brightness', icon: 'fa-sun', path: '/brightness', desc: 'Adjust brightness and contrast' }
  ]

  return (
    <Layout title="Home">
      <section class="container mx-auto px-4 py-16">
        <div class="text-center mb-16">
          <h1 class="text-5xl font-bold text-yellow mb-4">
            <i class="fas fa-image mr-3"></i>
            Professional Image Tools
          </h1>
          <p class="text-xl text-gray-300">
            Edit, optimize, and transform your images with powerful browser-based tools
          </p>
          <p class="text-lg text-gray-400 mt-2">
            No upload required • 100% Free • Privacy First
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="tools">
          {tools.map(tool => (
            <a href={tool.path} class="tool-card rounded-lg p-6 block">
              <div class="text-center">
                <i class={`fas ${tool.icon} text-yellow text-4xl mb-4`}></i>
                <h3 class="text-xl font-bold text-white mb-2">{tool.name}</h3>
                <p class="text-gray-400 text-sm">{tool.desc}</p>
              </div>
            </a>
          ))}
        </div>

        <div class="mt-16 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-lg p-8 text-center">
          <h2 class="text-3xl font-bold text-black mb-4">
            <i class="fas fa-shield-alt mr-2"></i>
            Your Privacy Matters
          </h2>
          <p class="text-black text-lg">
            All processing happens in your browser. Your images never leave your device.
          </p>
        </div>
      </section>
    </Layout>
  )
}
