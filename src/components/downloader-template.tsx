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
  const isInstagram = props.platform === 'Instagram'

  return (
    <Layout title={props.title}>
      <style>{`
        .instagram-page {
          background: linear-gradient(135deg, #ffffff 0%, #ffe5f5 50%, #ffd1eb 100%);
          min-height: 100vh;
        }
        .instagram-gradient-text {
          background: linear-gradient(45deg, #E1306C, #C13584, #833AB4, #5851DB);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .instagram-btn {
          background: linear-gradient(45deg, #E1306C, #C13584, #833AB4);
          transition: all 0.3s ease;
          border: none;
        }
        .instagram-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 30px rgba(225, 48, 108, 0.4);
        }
        .instagram-border {
          border: 3px solid;
          border-image: linear-gradient(45deg, #E1306C, #C13584, #833AB4) 1;
        }
        .instagram-card {
          background: white;
          box-shadow: 0 8px 32px rgba(225, 48, 108, 0.15);
        }
        .instagram-input {
          border: 2px solid #E1306C;
          background: white;
        }
        .instagram-input:focus {
          outline: none;
          border-color: #C13584;
          box-shadow: 0 0 0 3px rgba(225, 48, 108, 0.1);
        }
      `}</style>

      <section class={`${isInstagram ? 'instagram-page' : ''} py-12`}>
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <div class="text-center mb-8">
              <h1 class={`text-4xl md:text-5xl font-bold mb-3 ${isInstagram ? 'instagram-gradient-text' : 'text-yellow'}`}>
                <i class={`${props.icon} mr-3`}></i>
                {props.title}
              </h1>
              <p class={`text-lg ${isInstagram ? 'text-gray-700' : 'text-gray-300'}`}>{props.description}</p>
            </div>

            {/* Main Downloader Box */}
            <div class={`${isInstagram ? 'instagram-card instagram-border' : 'bg-gradient-to-br from-gray-900 to-black border-2 border-yellow'} rounded-lg p-8 mb-8`}>
              <div class="mb-6">
                <label class={`block font-bold mb-3 text-lg ${isInstagram ? 'instagram-gradient-text' : 'text-yellow'}`}>
                  <i class="fas fa-link mr-2"></i>
                  Enter {props.platform} URL
                </label>
                <div class="flex flex-col md:flex-row gap-3">
                  <input 
                    type="text" 
                    id="url-input" 
                    placeholder={props.placeholder}
                    class={`flex-1 px-4 py-3 rounded-lg ${isInstagram ? 'instagram-input text-gray-700' : 'bg-black text-white border-2 border-yellow focus:outline-none focus:border-white'}`}
                  />
                  <button id="download-btn" class={`${isInstagram ? 'instagram-btn' : 'btn-primary'} px-8 py-3 rounded-lg text-lg text-white font-bold`}>
                    <i class="fas fa-download mr-2"></i>
                    Download
                  </button>
                </div>
              </div>

              {/* Loading State */}
              <div id="loading" class="hidden text-center py-8">
                <i class={`fas fa-spinner fa-spin text-4xl mb-4 ${isInstagram ? 'text-pink-600' : 'text-yellow'}`}></i>
                <p class={`${isInstagram ? 'text-gray-600' : 'text-gray-400'}`}>Processing your request...</p>
              </div>

              {/* Result Section */}
              <div id="result" class="hidden">
                <div class={`${isInstagram ? 'bg-pink-50' : 'bg-black'} rounded-lg p-6`}>
                  <h3 class={`font-bold text-xl mb-4 ${isInstagram ? 'instagram-gradient-text' : 'text-yellow'}`}>
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
              <div id="error" class="hidden bg-red-100 border-2 border-red-500 rounded-lg p-4">
                <p class="text-red-600">
                  <i class="fas fa-exclamation-triangle mr-2"></i>
                  <span id="error-message">Error processing URL</span>
                </p>
              </div>
            </div>

            {/* How to Use Section */}
            <div class={`${isInstagram ? 'instagram-card' : 'bg-gray-800'} rounded-lg p-6 mb-8`}>
              <h2 class={`font-bold text-2xl mb-4 ${isInstagram ? 'instagram-gradient-text' : 'text-yellow'}`}>
                <i class="fas fa-question-circle mr-2"></i>
                How to Use
              </h2>
              <ol class="space-y-3">
                {props.instructions.map((instruction, index) => (
                  <li class="flex items-start">
                    <span class={`font-bold w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-white ${isInstagram ? 'bg-gradient-to-r from-pink-500 to-purple-500' : 'bg-yellow text-black'}`}>
                      {index + 1}
                    </span>
                    <span class={`pt-1 ${isInstagram ? 'text-gray-700' : 'text-gray-300'}`}>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Features */}
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div class={`${isInstagram ? 'instagram-card' : 'bg-gray-800'} rounded-lg p-6 text-center`}>
                <i class={`fas fa-bolt text-3xl mb-3 ${isInstagram ? 'text-pink-500' : 'text-yellow'}`}></i>
                <h3 class={`font-bold mb-1 ${isInstagram ? 'text-gray-800' : 'text-white'}`}>Fast</h3>
                <p class={`text-sm ${isInstagram ? 'text-gray-600' : 'text-gray-400'}`}>Download in seconds</p>
              </div>
              <div class={`${isInstagram ? 'instagram-card' : 'bg-gray-800'} rounded-lg p-6 text-center`}>
                <i class={`fas fa-hd-video text-3xl mb-3 ${isInstagram ? 'text-pink-500' : 'text-yellow'}`}></i>
                <h3 class={`font-bold mb-1 ${isInstagram ? 'text-gray-800' : 'text-white'}`}>High Quality</h3>
                <p class={`text-sm ${isInstagram ? 'text-gray-600' : 'text-gray-400'}`}>Best available quality</p>
              </div>
              <div class={`${isInstagram ? 'instagram-card' : 'bg-gray-800'} rounded-lg p-6 text-center`}>
                <i class={`fas fa-shield-alt text-3xl mb-3 ${isInstagram ? 'text-pink-500' : 'text-yellow'}`}></i>
                <h3 class={`font-bold mb-1 ${isInstagram ? 'text-gray-800' : 'text-white'}`}>Private</h3>
                <p class={`text-sm ${isInstagram ? 'text-gray-600' : 'text-gray-400'}`}>No data stored</p>
              </div>
            </div>

            {/* FAQ */}
            <div class={`${isInstagram ? 'instagram-card' : 'bg-gray-800'} rounded-lg p-6`}>
              <h2 class={`font-bold text-2xl mb-4 ${isInstagram ? 'instagram-gradient-text' : 'text-yellow'}`}>
                <i class="fas fa-lightbulb mr-2"></i>
                Frequently Asked Questions
              </h2>
              <div class="space-y-4">
                <details class={`${isInstagram ? 'bg-pink-50' : 'bg-black bg-opacity-50'} rounded p-4`}>
                  <summary class={`font-bold cursor-pointer ${isInstagram ? 'text-gray-800' : 'text-white'}`}>Is this service free?</summary>
                  <p class={`mt-2 text-sm ${isInstagram ? 'text-gray-600' : 'text-gray-400'}`}>Yes! All our tools are completely free to use with no hidden charges.</p>
                </details>
                <details class={`${isInstagram ? 'bg-pink-50' : 'bg-black bg-opacity-50'} rounded p-4`}>
                  <summary class={`font-bold cursor-pointer ${isInstagram ? 'text-gray-800' : 'text-white'}`}>Is it safe to use?</summary>
                  <p class={`mt-2 text-sm ${isInstagram ? 'text-gray-600' : 'text-gray-400'}`}>Absolutely! We don't store any of your data. All processing happens securely.</p>
                </details>
                <details class={`${isInstagram ? 'bg-pink-50' : 'bg-black bg-opacity-50'} rounded p-4`}>
                  <summary class={`font-bold cursor-pointer ${isInstagram ? 'text-gray-800' : 'text-white'}`}>Do I need to install anything?</summary>
                  <p class={`mt-2 text-sm ${isInstagram ? 'text-gray-600' : 'text-gray-400'}`}>No installation required! Everything works directly in your browser.</p>
                </details>
                <details class={`${isInstagram ? 'bg-pink-50' : 'bg-black bg-opacity-50'} rounded p-4`}>
                  <summary class={`font-bold cursor-pointer ${isInstagram ? 'text-gray-800' : 'text-white'}`}>What quality will I get?</summary>
                  <p class={`mt-2 text-sm ${isInstagram ? 'text-gray-600' : 'text-gray-400'}`}>You'll get the best quality available from the source, including HD when available.</p>
                </details>
              </div>
            </div>

            <div class="mt-8 text-center">
              <a href="/social-tools" class={`inline-block transition ${isInstagram ? 'text-pink-600 hover:text-pink-800' : 'text-yellow hover:text-white'}`}>
                <i class="fas fa-arrow-left mr-2"></i>
                Back to all social media tools
              </a>
            </div>
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
