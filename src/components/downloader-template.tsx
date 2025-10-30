import { Layout } from './layout'

interface DownloaderTemplateProps {
  title: string
  icon: string
  description: string
  platform: string
  toolType: string
  placeholder: string
  instructions: string[]
}

export const DownloaderTemplate = (props: DownloaderTemplateProps) => {
  return (
    <Layout title={props.title}>
      <section class="container mx-auto px-4 py-12">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-8">
            <h1 class="text-4xl font-bold text-yellow mb-3">
              <i class={`${props.icon} mr-3`}></i>
              {props.title}
            </h1>
            <p class="text-gray-300 text-lg">{props.description}</p>
          </div>

          {/* Main Downloader Box */}
          <div class="bg-gradient-to-br from-gray-900 to-black rounded-lg p-8 border-2 border-yellow mb-8">
            <div class="mb-6">
              <label class="block text-yellow font-bold mb-3">
                <i class="fas fa-link mr-2"></i>
                Enter {props.platform} URL
              </label>
              <div class="flex gap-3">
                <input 
                  type="text" 
                  id="url-input" 
                  placeholder={props.placeholder}
                  class="flex-1 px-4 py-3 bg-black text-white border-2 border-yellow rounded-lg focus:outline-none focus:border-white"
                />
                <button id="download-btn" class="btn-primary px-8 py-3 rounded-lg text-lg">
                  <i class="fas fa-download mr-2"></i>
                  Download
                </button>
              </div>
            </div>

            {/* Loading State */}
            <div id="loading" class="hidden text-center py-8">
              <i class="fas fa-spinner fa-spin text-yellow text-4xl mb-4"></i>
              <p class="text-gray-400">Processing your request...</p>
            </div>

            {/* Result Section */}
            <div id="result" class="hidden">
              <div class="bg-black rounded-lg p-6">
                <h3 class="text-yellow font-bold text-xl mb-4">
                  <i class="fas fa-check-circle mr-2"></i>
                  Ready to Download
                </h3>
                
                {/* Preview */}
                <div id="preview" class="mb-4"></div>

                {/* Download Buttons */}
                <div id="download-options" class="space-y-3"></div>
              </div>
            </div>

            {/* Error State */}
            <div id="error" class="hidden bg-red-900 bg-opacity-20 border-2 border-red-500 rounded-lg p-4">
              <p class="text-red-400">
                <i class="fas fa-exclamation-triangle mr-2"></i>
                <span id="error-message">Error processing URL</span>
              </p>
            </div>
          </div>

          {/* How to Use Section */}
          <div class="bg-gray-800 rounded-lg p-6 mb-8">
            <h2 class="text-yellow font-bold text-2xl mb-4">
              <i class="fas fa-question-circle mr-2"></i>
              How to Use
            </h2>
            <ol class="space-y-3">
              {props.instructions.map((instruction, index) => (
                <li class="flex items-start">
                  <span class="bg-yellow text-black font-bold w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    {index + 1}
                  </span>
                  <span class="text-gray-300 pt-1">{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Features */}
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div class="bg-gray-800 rounded-lg p-4 text-center">
              <i class="fas fa-bolt text-yellow text-3xl mb-2"></i>
              <h3 class="text-white font-bold mb-1">Fast</h3>
              <p class="text-gray-400 text-sm">Download in seconds</p>
            </div>
            <div class="bg-gray-800 rounded-lg p-4 text-center">
              <i class="fas fa-hd-video text-yellow text-3xl mb-2"></i>
              <h3 class="text-white font-bold mb-1">High Quality</h3>
              <p class="text-gray-400 text-sm">Best available quality</p>
            </div>
            <div class="bg-gray-800 rounded-lg p-4 text-center">
              <i class="fas fa-shield-alt text-yellow text-3xl mb-2"></i>
              <h3 class="text-white font-bold mb-1">Private</h3>
              <p class="text-gray-400 text-sm">No data stored</p>
            </div>
          </div>

          {/* FAQ */}
          <div class="bg-gray-800 rounded-lg p-6">
            <h2 class="text-yellow font-bold text-2xl mb-4">
              <i class="fas fa-lightbulb mr-2"></i>
              Frequently Asked Questions
            </h2>
            <div class="space-y-4">
              <details class="bg-black rounded p-4">
                <summary class="text-white font-bold cursor-pointer">Is this service free?</summary>
                <p class="text-gray-400 mt-2 text-sm">Yes! All our tools are completely free to use with no hidden charges.</p>
              </details>
              <details class="bg-black rounded p-4">
                <summary class="text-white font-bold cursor-pointer">Is it safe to use?</summary>
                <p class="text-gray-400 mt-2 text-sm">Absolutely! We don't store any of your data. All processing happens securely.</p>
              </details>
              <details class="bg-black rounded p-4">
                <summary class="text-white font-bold cursor-pointer">Do I need to install anything?</summary>
                <p class="text-gray-400 mt-2 text-sm">No installation required! Everything works directly in your browser.</p>
              </details>
              <details class="bg-black rounded p-4">
                <summary class="text-white font-bold cursor-pointer">What quality will I get?</summary>
                <p class="text-gray-400 mt-2 text-sm">You'll get the best quality available from the source, including HD when available.</p>
              </details>
            </div>
          </div>

          <div class="mt-8 text-center">
            <a href="/social-tools" class="inline-block text-yellow hover:text-white transition">
              <i class="fas fa-arrow-left mr-2"></i>
              Back to all social media tools
            </a>
          </div>
        </div>
      </section>

      <script>{`
        // Downloader functionality placeholder
        window.downloaderType = '${props.toolType}';
        window.platform = '${props.platform}';
      `}</script>
    </Layout>
  )
}
