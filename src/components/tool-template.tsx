import { Layout } from './layout'

interface ToolTemplateProps {
  title: string
  icon: string
  description: string
  toolId: string
  controls?: any
}

export const ToolTemplate = (props: ToolTemplateProps) => {
  return (
    <Layout title={props.title}>
      <section class="container mx-auto px-4 py-12">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-8">
            <h1 class="text-4xl font-bold text-yellow mb-3">
              <i class={`fas ${props.icon} mr-3`}></i>
              {props.title}
            </h1>
            <p class="text-gray-300 text-lg">{props.description}</p>
          </div>

          <div class="bg-gradient-to-br from-gray-900 to-black rounded-lg p-8 border-2 border-yellow">
            <div id="upload-section" class="text-center">
              <div class="upload-area rounded-lg p-12 cursor-pointer" id="drop-zone">
                <i class="fas fa-cloud-upload-alt text-yellow text-6xl mb-4"></i>
                <h3 class="text-2xl font-bold text-white mb-2">Drop your image here</h3>
                <p class="text-gray-400 mb-4">or click to browse</p>
                <input type="file" id="file-input" accept="image/*" class="hidden" />
                <button class="btn-primary px-8 py-3 rounded-lg text-lg" onclick="document.getElementById('file-input').click()">
                  <i class="fas fa-folder-open mr-2"></i>
                  Choose Image
                </button>
              </div>
            </div>

            <div id="editor-section" class="hidden">
              {props.controls}
              
              <div class="mt-6 bg-black rounded-lg p-4">
                <canvas id="canvas-preview" class="mx-auto"></canvas>
              </div>

              <div class="flex gap-4 mt-6">
                <button id="download-btn" class="btn-primary flex-1 px-6 py-3 rounded-lg text-lg">
                  <i class="fas fa-download mr-2"></i>
                  Download Result
                </button>
                <button id="reset-btn" class="btn-secondary px-6 py-3 rounded-lg text-lg">
                  <i class="fas fa-redo mr-2"></i>
                  New Image
                </button>
              </div>
            </div>
          </div>

          <div class="mt-8">
            <a href="/" class="inline-block text-yellow hover:text-white transition">
              <i class="fas fa-arrow-left mr-2"></i>
              Back to all tools
            </a>
          </div>
        </div>
      </section>

      <script>{`
        window.currentTool = '${props.toolId}';
      `}</script>
    </Layout>
  )
}
