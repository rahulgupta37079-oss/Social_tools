import { ToolTemplate } from '../components/tool-template'

export const BrightnessPage = () => {
  const controls = (
    <div class="space-y-4">
      <div class="bg-gray-800 rounded-lg p-4 space-y-4">
        <div>
          <label class="block text-yellow font-bold mb-2">
            <i class="fas fa-sun mr-2"></i>
            Brightness
          </label>
          <input 
            type="range" 
            id="brightness-slider" 
            min="-100" 
            max="100" 
            value="0" 
            class="w-full"
          />
          <div class="flex justify-between text-sm text-gray-400 mt-2">
            <span>Darker</span>
            <span id="brightness-value" class="text-yellow font-bold">0</span>
            <span>Brighter</span>
          </div>
        </div>
        
        <div>
          <label class="block text-yellow font-bold mb-2">
            <i class="fas fa-adjust mr-2"></i>
            Contrast
          </label>
          <input 
            type="range" 
            id="contrast-slider" 
            min="-100" 
            max="100" 
            value="0" 
            class="w-full"
          />
          <div class="flex justify-between text-sm text-gray-400 mt-2">
            <span>Lower</span>
            <span id="contrast-value" class="text-yellow font-bold">0</span>
            <span>Higher</span>
          </div>
        </div>
        
        <div>
          <label class="block text-yellow font-bold mb-2">
            <i class="fas fa-palette mr-2"></i>
            Saturation
          </label>
          <input 
            type="range" 
            id="saturation-slider" 
            min="-100" 
            max="100" 
            value="0" 
            class="w-full"
          />
          <div class="flex justify-between text-sm text-gray-400 mt-2">
            <span>Grayscale</span>
            <span id="saturation-value" class="text-yellow font-bold">0</span>
            <span>Vibrant</span>
          </div>
        </div>

        <button id="reset-adjustments" class="btn-secondary w-full py-2 rounded">
          <i class="fas fa-undo mr-2"></i>Reset All Adjustments
        </button>
      </div>

      {/* Advanced Options */}
      <details class="bg-gray-800 rounded-lg p-4">
        <summary class="text-yellow font-bold cursor-pointer hover:text-white transition">
          <i class="fas fa-cog mr-2"></i>
          Advanced Options
        </summary>
        <div class="mt-4 space-y-4">
          <div>
            <label class="block text-white mb-2">
              <i class="fas fa-moon mr-2"></i>
              Shadows
            </label>
            <input 
              type="range" 
              id="shadows" 
              min="-100" 
              max="100" 
              value="0" 
              class="w-full"
            />
            <div class="flex justify-between text-sm text-gray-400 mt-2">
              <span>Darker</span>
              <span id="shadows-value" class="text-yellow font-bold">0</span>
              <span>Lighter</span>
            </div>
          </div>

          <div>
            <label class="block text-white mb-2">
              <i class="fas fa-sun mr-2"></i>
              Highlights
            </label>
            <input 
              type="range" 
              id="highlights" 
              min="-100" 
              max="100" 
              value="0" 
              class="w-full"
            />
            <div class="flex justify-between text-sm text-gray-400 mt-2">
              <span>Darker</span>
              <span id="highlights-value" class="text-yellow font-bold">0</span>
              <span>Lighter</span>
            </div>
          </div>

          <div>
            <label class="block text-white mb-2">
              <i class="fas fa-circle-half-stroke mr-2"></i>
              Midtones
            </label>
            <input 
              type="range" 
              id="midtones" 
              min="-100" 
              max="100" 
              value="0" 
              class="w-full"
            />
            <div class="flex justify-between text-sm text-gray-400 mt-2">
              <span>Darker</span>
              <span id="midtones-value" class="text-yellow font-bold">0</span>
              <span>Lighter</span>
            </div>
          </div>

          <div>
            <label class="block text-white mb-2">
              <i class="fas fa-chart-line mr-2"></i>
              Gamma
            </label>
            <input 
              type="range" 
              id="gamma" 
              min="0" 
              max="200" 
              value="100" 
              class="w-full"
            />
            <div class="flex justify-between text-sm text-gray-400 mt-2">
              <span>0</span>
              <span id="gamma-value" class="text-yellow font-bold">100</span>
              <span>200</span>
            </div>
          </div>

          <div>
            <label class="block text-white mb-2">
              <i class="fas fa-image mr-2"></i>
              Exposure
            </label>
            <input 
              type="range" 
              id="exposure" 
              min="-200" 
              max="200" 
              value="0" 
              class="w-full"
            />
            <div class="flex justify-between text-sm text-gray-400 mt-2">
              <span>Under</span>
              <span id="exposure-value" class="text-yellow font-bold">0</span>
              <span>Over</span>
            </div>
          </div>

          <div>
            <label class="block text-white mb-2">
              <i class="fas fa-temperature-high mr-2"></i>
              Vibrance
            </label>
            <input 
              type="range" 
              id="vibrance" 
              min="-100" 
              max="100" 
              value="0" 
              class="w-full"
            />
            <div class="flex justify-between text-sm text-gray-400 mt-2">
              <span>Muted</span>
              <span id="vibrance-value" class="text-yellow font-bold">0</span>
              <span>Vibrant</span>
            </div>
          </div>

          <div>
            <label class="block text-white mb-2">
              <i class="fas fa-chess-board mr-2"></i>
              Clarity
            </label>
            <input 
              type="range" 
              id="clarity" 
              min="-100" 
              max="100" 
              value="0" 
              class="w-full"
            />
            <div class="flex justify-between text-sm text-gray-400 mt-2">
              <span>Soft</span>
              <span id="clarity-value" class="text-yellow font-bold">0</span>
              <span>Sharp</span>
            </div>
          </div>

          <div>
            <label class="block text-white mb-2">Individual Color Channels</label>
            <div class="space-y-2">
              <div>
                <label class="block text-gray-400 text-xs mb-1">
                  <i class="fas fa-circle text-red-500 mr-2"></i>Red
                </label>
                <input type="range" id="red-brightness" min="-100" max="100" value="0" class="w-full" />
              </div>
              <div>
                <label class="block text-gray-400 text-xs mb-1">
                  <i class="fas fa-circle text-green-500 mr-2"></i>Green
                </label>
                <input type="range" id="green-brightness" min="-100" max="100" value="0" class="w-full" />
              </div>
              <div>
                <label class="block text-gray-400 text-xs mb-1">
                  <i class="fas fa-circle text-blue-500 mr-2"></i>Blue
                </label>
                <input type="range" id="blue-brightness" min="-100" max="100" value="0" class="w-full" />
              </div>
            </div>
          </div>

          <div>
            <label class="block text-white mb-2">Levels</label>
            <div class="bg-black rounded p-3 space-y-2">
              <div class="grid grid-cols-3 gap-2">
                <div>
                  <label class="block text-gray-400 text-xs mb-1">Black Point</label>
                  <input type="number" id="black-point" value="0" min="0" max="255" class="w-full px-2 py-1 bg-gray-800 text-white border border-yellow rounded text-sm" />
                </div>
                <div>
                  <label class="block text-gray-400 text-xs mb-1">Mid Point</label>
                  <input type="number" id="mid-point" value="128" min="0" max="255" class="w-full px-2 py-1 bg-gray-800 text-white border border-yellow rounded text-sm" />
                </div>
                <div>
                  <label class="block text-gray-400 text-xs mb-1">White Point</label>
                  <input type="number" id="white-point" value="255" min="0" max="255" class="w-full px-2 py-1 bg-gray-800 text-white border border-yellow rounded text-sm" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <label class="flex items-center text-white">
              <input type="checkbox" id="auto-levels" class="mr-2" />
              <i class="fas fa-magic mr-2 text-yellow"></i>
              Auto levels correction
            </label>
          </div>

          <div>
            <label class="flex items-center text-white">
              <input type="checkbox" id="auto-contrast" class="mr-2" />
              <i class="fas fa-adjust mr-2 text-yellow"></i>
              Auto contrast
            </label>
          </div>

          <div>
            <label class="flex items-center text-white">
              <input type="checkbox" id="auto-color" class="mr-2" />
              <i class="fas fa-palette mr-2 text-yellow"></i>
              Auto color balance
            </label>
          </div>

          <div>
            <label class="block text-white mb-2">Quick Presets</label>
            <div class="grid grid-cols-2 gap-2">
              <button class="brightness-preset btn-secondary py-2 text-sm rounded" data-preset="brighten">
                <i class="fas fa-sun mr-2"></i>Brighten
              </button>
              <button class="brightness-preset btn-secondary py-2 text-sm rounded" data-preset="darken">
                <i class="fas fa-moon mr-2"></i>Darken
              </button>
              <button class="brightness-preset btn-secondary py-2 text-sm rounded" data-preset="high-contrast">
                <i class="fas fa-bolt mr-2"></i>High Contrast
              </button>
              <button class="brightness-preset btn-secondary py-2 text-sm rounded" data-preset="low-contrast">
                <i class="fas fa-circle mr-2"></i>Low Contrast
              </button>
              <button class="brightness-preset btn-secondary py-2 text-sm rounded" data-preset="vivid">
                <i class="fas fa-paint-brush mr-2"></i>Vivid
              </button>
              <button class="brightness-preset btn-secondary py-2 text-sm rounded" data-preset="muted">
                <i class="fas fa-tint mr-2"></i>Muted
              </button>
            </div>
          </div>

          <div class="flex gap-2">
            <button id="copy-settings" class="btn-secondary flex-1 py-2 rounded text-sm">
              <i class="fas fa-copy mr-2"></i>Copy Settings
            </button>
            <button id="paste-settings" class="btn-secondary flex-1 py-2 rounded text-sm">
              <i class="fas fa-paste mr-2"></i>Paste Settings
            </button>
          </div>

          <div class="bg-black rounded p-3">
            <div class="text-sm text-yellow font-bold mb-2">
              <i class="fas fa-chart-bar mr-2"></i>Histogram
            </div>
            <canvas id="histogram" class="w-full h-24 bg-gray-900 rounded"></canvas>
          </div>
        </div>
      </details>
    </div>
  )

  return ToolTemplate({
    title: 'Adjust Brightness',
    icon: 'fa-sun',
    description: 'Fine-tune brightness, contrast, and saturation',
    toolId: 'brightness',
    controls
  })
}
