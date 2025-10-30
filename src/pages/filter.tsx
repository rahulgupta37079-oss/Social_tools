import { ToolTemplate } from '../components/tool-template'

export const FilterPage = () => {
  const controls = (
    <div class="mb-6 bg-gray-800 rounded-lg p-4">
      <label class="block text-yellow font-bold mb-3">
        <i class="fas fa-magic mr-2"></i>
        Choose Filter
      </label>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
        <button class="filter-btn btn-primary py-3 rounded text-sm" data-filter="none">
          <i class="fas fa-image mr-2"></i>Original
        </button>
        <button class="filter-btn btn-secondary py-3 rounded text-sm" data-filter="grayscale">
          <i class="fas fa-adjust mr-2"></i>Grayscale
        </button>
        <button class="filter-btn btn-secondary py-3 rounded text-sm" data-filter="sepia">
          <i class="fas fa-palette mr-2"></i>Sepia
        </button>
        <button class="filter-btn btn-secondary py-3 rounded text-sm" data-filter="invert">
          <i class="fas fa-adjust mr-2"></i>Invert
        </button>
        <button class="filter-btn btn-secondary py-3 rounded text-sm" data-filter="blur">
          <i class="fas fa-circle mr-2"></i>Blur
        </button>
        <button class="filter-btn btn-secondary py-3 rounded text-sm" data-filter="sharpen">
          <i class="fas fa-star mr-2"></i>Sharpen
        </button>
      </div>
      <p class="text-gray-400 text-sm mt-3">
        <i class="fas fa-info-circle mr-2"></i>
        Click any filter to apply it instantly
      </p>
    </div>
  )

  return ToolTemplate({
    title: 'Apply Filters',
    icon: 'fa-magic',
    description: 'Add artistic filters and effects to your images',
    toolId: 'filter',
    controls
  })
}
