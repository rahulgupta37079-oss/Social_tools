import { Layout } from '../components/layout'

export const HomePage = () => {
  const imageTools = [
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

  const socialTools = [
    { name: 'Reels Downloader', icon: 'fab fa-instagram', path: '/instagram/reels', desc: 'Download Instagram Reels' },
    { name: 'Post Downloader', icon: 'fab fa-instagram', path: '/instagram/post', desc: 'Save Instagram photos' },
    { name: 'Story Downloader', icon: 'fab fa-instagram', path: '/instagram/story', desc: 'Download Instagram stories' },
    { name: 'Profile Picture', icon: 'fab fa-instagram', path: '/instagram/profile', desc: 'Get profile pictures' }
  ]

  return (
    <Layout title="Home">
      <section class="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div class="text-center mb-16">
          <h1 class="text-5xl md:text-6xl font-bold text-yellow mb-4">
            <i class="fas fa-image mr-3"></i>
            ImageTools Pro
          </h1>
          <p class="text-xl md:text-2xl text-gray-300 mb-3">
            Professional Image Editing & Social Media Tools Suite
          </p>
          <p class="text-lg text-gray-400">
            No upload required • 100% Free • Privacy First • 100+ Advanced Options
          </p>
        </div>

        {/* Stats Bar */}
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div class="bg-gray-900 rounded-lg p-4 text-center border border-yellow">
            <div class="text-3xl font-bold text-yellow mb-1">12</div>
            <div class="text-sm text-gray-400">Image Tools</div>
          </div>
          <div class="bg-gray-900 rounded-lg p-4 text-center border border-yellow">
            <div class="text-3xl font-bold text-yellow mb-1">100+</div>
            <div class="text-sm text-gray-400">Advanced Options</div>
          </div>
          <div class="bg-gray-900 rounded-lg p-4 text-center border border-yellow">
            <div class="text-3xl font-bold text-yellow mb-1">4</div>
            <div class="text-sm text-gray-400">Instagram Tools</div>
          </div>
          <div class="bg-gray-900 rounded-lg p-4 text-center border border-yellow">
            <div class="text-3xl font-bold text-yellow mb-1">∞</div>
            <div class="text-sm text-gray-400">Usage Limit</div>
          </div>
        </div>

        {/* Image Tools Section */}
        <div class="mb-16">
          <div class="flex items-center justify-between mb-8">
            <div>
              <h2 class="text-3xl md:text-4xl font-bold text-white mb-2">
                <i class="fas fa-images mr-3"></i>
                Image Editing Tools
              </h2>
              <p class="text-gray-400">Professional tools with advanced options for every need</p>
            </div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="tools">
            {imageTools.map(tool => (
              <a href={tool.path} class="tool-card rounded-lg p-6 block">
                <div class="text-center">
                  <i class={`fas ${tool.icon} text-yellow text-4xl mb-4`}></i>
                  <h3 class="text-xl font-bold text-white mb-2">{tool.name}</h3>
                  <p class="text-gray-400 text-sm">{tool.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Instagram Tools Section */}
        <div class="mb-16">
          <div class="flex items-center justify-between mb-8">
            <div>
              <h2 class="text-3xl md:text-4xl font-bold text-white mb-2">
                <i class="fab fa-instagram mr-3 text-pink-500"></i>
                Instagram Tools
              </h2>
              <p class="text-gray-400">Download Instagram content - Reels, Posts, Stories & More</p>
            </div>
            <a href="/social-tools" class="hidden md:block text-yellow hover:text-white transition">
              View All <i class="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialTools.map(tool => (
              <a href={tool.path} class="tool-card rounded-lg p-6 block">
                <div class="text-center">
                  <i class={`${tool.icon} text-pink-500 text-4xl mb-4`}></i>
                  <h3 class="text-xl font-bold text-white mb-2">{tool.name}</h3>
                  <p class="text-gray-400 text-sm">{tool.desc}</p>
                </div>
              </a>
            ))}
          </div>

          <div class="mt-6 text-center md:hidden">
            <a href="/social-tools" class="inline-block text-yellow hover:text-white transition">
              View All Social Tools <i class="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>

        {/* Privacy Banner */}
        <div class="bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-lg p-8 text-center mb-16">
          <h2 class="text-3xl font-bold text-black mb-4">
            <i class="fas fa-shield-alt mr-2"></i>
            Your Privacy Matters
          </h2>
          <p class="text-black text-lg mb-4">
            All processing happens in your browser. Your images never leave your device.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div class="bg-black bg-opacity-20 rounded-lg p-4">
              <i class="fas fa-lock text-black text-3xl mb-2"></i>
              <h3 class="font-bold text-black">Secure</h3>
              <p class="text-black text-sm">No data uploaded to servers</p>
            </div>
            <div class="bg-black bg-opacity-20 rounded-lg p-4">
              <i class="fas fa-bolt text-black text-3xl mb-2"></i>
              <h3 class="font-bold text-black">Fast</h3>
              <p class="text-black text-sm">Instant processing</p>
            </div>
            <div class="bg-black bg-opacity-20 rounded-lg p-4">
              <i class="fas fa-infinity text-black text-3xl mb-2"></i>
              <h3 class="font-bold text-black">Unlimited</h3>
              <p class="text-black text-sm">No usage limits</p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div class="bg-gray-900 rounded-lg p-8">
          <h2 class="text-3xl font-bold text-yellow mb-6 text-center">
            <i class="fas fa-star mr-2"></i>
            Why Choose ImageTools?
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-black rounded-lg p-6">
              <i class="fas fa-cog text-yellow text-3xl mb-3"></i>
              <h3 class="text-white font-bold text-xl mb-2">100+ Advanced Options</h3>
              <p class="text-gray-400 text-sm">Professional-grade controls for every tool</p>
            </div>
            <div class="bg-black rounded-lg p-6">
              <i class="fas fa-mobile-alt text-yellow text-3xl mb-3"></i>
              <h3 class="text-white font-bold text-xl mb-2">Mobile Friendly</h3>
              <p class="text-gray-400 text-sm">Works perfectly on all devices</p>
            </div>
            <div class="bg-black rounded-lg p-6">
              <i class="fas fa-download text-yellow text-3xl mb-3"></i>
              <h3 class="text-white font-bold text-xl mb-2">Social Media Tools</h3>
              <p class="text-gray-400 text-sm">Download from Instagram and more</p>
            </div>
            <div class="bg-black rounded-lg p-6">
              <i class="fas fa-palette text-yellow text-3xl mb-3"></i>
              <h3 class="text-white font-bold text-xl mb-2">Professional Filters</h3>
              <p class="text-gray-400 text-sm">12+ artistic filters with intensity control</p>
            </div>
            <div class="bg-black rounded-lg p-6">
              <i class="fas fa-compress-alt text-yellow text-3xl mb-3"></i>
              <h3 class="text-white font-bold text-xl mb-2">Smart Compression</h3>
              <p class="text-gray-400 text-sm">Reduce file size without quality loss</p>
            </div>
            <div class="bg-black rounded-lg p-6">
              <i class="fas fa-code text-yellow text-3xl mb-3"></i>
              <h3 class="text-white font-bold text-xl mb-2">Open Source</h3>
              <p class="text-gray-400 text-sm">Transparent code you can trust</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
