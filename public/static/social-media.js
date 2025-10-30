// TikTok and YouTube Downloader JavaScript
document.addEventListener('DOMContentLoaded', () => {
  const downloadBtn = document.getElementById('instagram-download-btn');
  const urlInput = document.getElementById('instagram-url');
  
  if (downloadBtn && urlInput) {
    downloadBtn.addEventListener('click', handleSocialMediaDownload);
    
    urlInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        handleSocialMediaDownload();
      }
    });
  }
});

async function handleSocialMediaDownload() {
  const urlInput = document.getElementById('instagram-url');
  const resultsDiv = document.getElementById('download-results');
  const loadingDiv = document.getElementById('loading');
  const downloadBtn = document.getElementById('instagram-download-btn');
  
  const url = urlInput?.value.trim();
  
  if (!url) {
    showSocialError('Please enter a URL');
    return;
  }
  
  // Determine platform from URL
  let platform = '';
  let apiEndpoint = '';
  
  if (url.includes('tiktok.com')) {
    platform = 'TikTok';
    apiEndpoint = '/api/tiktok/fetch';
  } else if (url.includes('youtube.com') || url.includes('youtu.be')) {
    platform = 'YouTube';
    apiEndpoint = '/api/youtube/fetch';
  } else if (url.includes('instagram.com')) {
    platform = 'Instagram';
    apiEndpoint = '/api/instagram/fetch';
    
    // Determine Instagram type
    let type = 'post';
    if (url.includes('reel')) type = 'reel';
    else if (url.includes('stories')) type = 'story';
    else if (url.match(/instagram\.com\/[^/?]+\/?$/)) type = 'profile';
  } else {
    showSocialError('Unsupported platform. Please use TikTok, YouTube, or Instagram URLs.');
    return;
  }
  
  // Show loading
  if (loadingDiv) loadingDiv.classList.remove('hidden');
  if (resultsDiv) resultsDiv.innerHTML = '';
  if (downloadBtn) downloadBtn.disabled = true;
  
  try {
    const requestBody = platform === 'Instagram' 
      ? { url, type: determineInstagramType(url) }
      : { url };
      
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody)
    });
    
    const data = await response.json();
    
    if (loadingDiv) loadingDiv.classList.add('hidden');
    if (downloadBtn) downloadBtn.disabled = false;
    
    if (data.success) {
      displaySocialResults(data, platform);
    } else if (data.error) {
      showSocialError(data.error, data.note, data.instructions);
    } else {
      showSocialError('Failed to fetch content');
    }
  } catch (error) {
    if (loadingDiv) loadingDiv.classList.add('hidden');
    if (downloadBtn) downloadBtn.disabled = false;
    showSocialError('Network error. Please try again.', error.message);
  }
}

function determineInstagramType(url) {
  if (url.includes('reel')) return 'reel';
  if (url.includes('stories')) return 'story';
  if (url.match(/instagram\.com\/[^/?]+\/?$/)) return 'profile';
  return 'post';
}

function displaySocialResults(data, platform) {
  const resultsDiv = document.getElementById('download-results');
  if (!resultsDiv) return;
  
  let html = '<div class="bg-white rounded-lg p-6 shadow-lg">';
  
  if (platform === 'TikTok') {
    html += displayTikTokResults(data);
  } else if (platform === 'YouTube') {
    html += displayYouTubeResults(data);
  } else if (platform === 'Instagram') {
    // Use existing Instagram display logic
    return displayResults(data, data.type);
  }
  
  html += '</div>';
  resultsDiv.innerHTML = html;
}

function displayTikTokResults(data) {
  let html = `
    <div class="text-center">
      <div class="mb-4">
        <i class="fab fa-tiktok text-6xl mb-4" style="color: #000000;"></i>
      </div>
      <h3 class="text-2xl font-bold mb-3 text-gray-800">
        <i class="fas fa-check-circle text-green-500 mr-2"></i>TikTok Video Found
      </h3>
      
      ${data.title ? `<h4 class="text-xl mb-2 text-gray-700">${data.title}</h4>` : ''}
      ${data.authorName ? `
        <p class="text-gray-600 mb-4">
          <i class="fas fa-user mr-2"></i>By <strong>${data.authorName}</strong>
        </p>
      ` : ''}
      
      ${data.thumbnailUrl ? `
        <div class="mb-6">
          <img src="${data.thumbnailUrl}" alt="TikTok Video" 
               class="max-w-full h-auto rounded-lg mx-auto border-2 border-gray-300"
               style="max-height: 400px;">
        </div>
      ` : ''}
      
      <div class="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4 text-left">
        <p class="text-sm text-blue-800 mb-2">
          <i class="fas fa-info-circle mr-2"></i>
          <strong>Download Methods:</strong>
        </p>
        <p class="text-sm text-blue-800">${data.note || 'Use the methods below to download this TikTok video.'}</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
        ${data.recommendations ? data.recommendations.map(rec => `
          <a href="${rec.url}" target="_blank" 
             class="bg-gradient-to-r from-gray-800 to-black hover:from-black hover:to-gray-800 text-white px-4 py-3 rounded-lg font-bold transition flex items-center justify-center">
            <i class="fas fa-external-link-alt mr-2"></i>${rec.name}
          </a>
        `).join('') : ''}
      </div>
      
      <div class="bg-gray-50 rounded-lg p-4 mb-4 text-left">
        <p class="font-bold mb-2 text-gray-800">
          <i class="fas fa-download mr-2"></i>How to Download:
        </p>
        <ol class="text-sm text-gray-700 space-y-2 ml-4">
          ${data.instructions ? data.instructions.map(instr => `<li>${instr}</li>`).join('') : ''}
        </ol>
      </div>
      
      <div class="flex gap-3 justify-center flex-wrap">
        <a href="${data.videoUrl}" target="_blank"
           class="bg-gradient-to-r from-gray-800 to-black hover:from-black hover:to-gray-800 px-6 py-3 rounded-lg text-white font-bold flex items-center transition">
          <i class="fab fa-tiktok mr-2"></i>Open in TikTok
        </a>
        ${data.authorUrl ? `
          <a href="${data.authorUrl}" target="_blank"
             class="bg-gray-600 hover:bg-gray-700 px-6 py-3 rounded-lg text-white font-bold flex items-center transition">
            <i class="fas fa-user mr-2"></i>View Profile
          </a>
        ` : ''}
      </div>
    </div>
  `;
  
  return html;
}

function displayYouTubeResults(data) {
  let html = `
    <div class="text-center">
      <div class="mb-4">
        <i class="fab fa-youtube text-6xl mb-4" style="color: #FF0000;"></i>
      </div>
      <h3 class="text-2xl font-bold mb-3 text-gray-800">
        <i class="fas fa-check-circle text-green-500 mr-2"></i>YouTube Video Found
      </h3>
      
      ${data.title ? `<h4 class="text-xl mb-2 text-gray-700">${data.title}</h4>` : ''}
      ${data.authorName ? `
        <p class="text-gray-600 mb-4">
          <i class="fas fa-user mr-2"></i>By <strong>${data.authorName}</strong>
        </p>
      ` : ''}
      
      ${data.thumbnailUrl ? `
        <div class="mb-6">
          <img src="${data.thumbnailUrl}" alt="YouTube Thumbnail" 
               class="max-w-full h-auto rounded-lg mx-auto border-2 border-red-500"
               style="max-height: 400px;"
               onerror="this.src='https://img.youtube.com/vi/${data.videoId}/hqdefault.jpg'">
        </div>
      ` : ''}
      
      ${data.formats ? `
        <div class="bg-gray-50 rounded-lg p-4 mb-4">
          <p class="font-bold mb-3 text-gray-800">
            <i class="fas fa-film mr-2"></i>Available Formats:
          </p>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
            ${data.formats.map(fmt => `
              <div class="bg-white border-2 border-gray-300 rounded p-2">
                <div class="font-bold text-gray-800">${fmt.quality}</div>
                <div class="text-gray-600">${fmt.format}</div>
                <div class="text-xs text-gray-500">${fmt.note}</div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}
      
      <div class="bg-red-50 border-l-4 border-red-400 p-4 mb-4 text-left">
        <p class="text-sm text-red-800 mb-2">
          <i class="fas fa-exclamation-circle mr-2"></i>
          <strong>Important:</strong>
        </p>
        <p class="text-sm text-red-800">${data.note || 'YouTube videos require special tools for downloading.'}</p>
      </div>
      
      <div class="bg-gray-50 rounded-lg p-4 mb-4 text-left">
        <p class="font-bold mb-2 text-gray-800">
          <i class="fas fa-download mr-2"></i>Recommended Download Tools:
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
          ${data.recommendations ? data.recommendations.map(rec => `
            <a href="${rec.url}" target="_blank" 
               class="bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg font-bold transition text-center block">
              <i class="fas fa-external-link-alt mr-2"></i>${rec.name}
              ${rec.type ? `<div class="text-xs mt-1 opacity-90">${rec.type}</div>` : ''}
            </a>
          `).join('') : ''}
        </div>
        <ol class="text-sm text-gray-700 space-y-1 ml-4">
          ${data.instructions ? data.instructions.map(instr => `<li>${instr}</li>`).join('') : ''}
        </ol>
      </div>
      
      <div class="flex gap-3 justify-center flex-wrap">
        <a href="${data.watchUrl || data.videoUrl}" target="_blank"
           class="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-white font-bold flex items-center transition">
          <i class="fab fa-youtube mr-2"></i>Watch on YouTube
        </a>
        ${data.authorUrl ? `
          <a href="${data.authorUrl}" target="_blank"
             class="bg-gray-600 hover:bg-gray-700 px-6 py-3 rounded-lg text-white font-bold flex items-center transition">
            <i class="fas fa-user mr-2"></i>Channel
          </a>
        ` : ''}
      </div>
      
      <p class="text-xs text-gray-500 mt-4">
        <i class="fas fa-shield-alt mr-1"></i>
        Always respect copyright laws and terms of service when downloading content.
      </p>
    </div>
  `;
  
  return html;
}

function showSocialError(message, note, instructions) {
  const resultsDiv = document.getElementById('download-results');
  if (!resultsDiv) return;
  
  let html = `
    <div class="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
      <div class="flex items-start mb-4">
        <i class="fas fa-exclamation-circle text-red-500 text-2xl mr-3 mt-1"></i>
        <div>
          <h3 class="text-lg font-bold text-red-800 mb-2">Error</h3>
          <p class="text-red-700">${message}</p>
          ${note ? `<p class="text-sm text-red-600 mt-2">${note}</p>` : ''}
        </div>
      </div>
      
      ${instructions ? `
        <div class="bg-white rounded p-4 mt-4">
          <p class="font-bold text-gray-800 mb-2">Try these alternatives:</p>
          <ol class="text-sm text-gray-700 space-y-1 ml-4">
            ${instructions.map(instr => `<li>${instr}</li>`).join('')}
          </ol>
        </div>
      ` : ''}
    </div>
  `;
  
  resultsDiv.innerHTML = html;
}
