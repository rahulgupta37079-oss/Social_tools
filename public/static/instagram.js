// Instagram Downloader JavaScript
document.addEventListener('DOMContentLoaded', () => {
  const downloadBtn = document.getElementById('instagram-download-btn');
  const urlInput = document.getElementById('instagram-url');
  const resultsDiv = document.getElementById('download-results');
  const loadingDiv = document.getElementById('loading');
  
  if (downloadBtn) {
    downloadBtn.addEventListener('click', handleDownload);
  }
  
  if (urlInput) {
    urlInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        handleDownload();
      }
    });
  }
});

async function handleDownload() {
  const urlInput = document.getElementById('instagram-url');
  const resultsDiv = document.getElementById('download-results');
  const loadingDiv = document.getElementById('loading');
  const downloadBtn = document.getElementById('instagram-download-btn');
  
  const url = urlInput?.value.trim();
  
  if (!url) {
    showError('Please enter an Instagram URL');
    return;
  }
  
  // Validate Instagram URL
  if (!url.includes('instagram.com')) {
    showError('Please enter a valid Instagram URL');
    return;
  }
  
  // Determine content type from current page
  const currentPath = window.location.pathname;
  let type = 'post';
  
  if (currentPath.includes('reels')) {
    type = 'reel';
  } else if (currentPath.includes('story')) {
    type = 'story';
  } else if (currentPath.includes('profile')) {
    type = 'profile';
  }
  
  // Show loading
  if (loadingDiv) loadingDiv.classList.remove('hidden');
  if (resultsDiv) resultsDiv.innerHTML = '';
  if (downloadBtn) downloadBtn.disabled = true;
  
  try {
    const response = await fetch('/api/instagram/fetch', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url, type })
    });
    
    const data = await response.json();
    
    if (loadingDiv) loadingDiv.classList.add('hidden');
    if (downloadBtn) downloadBtn.disabled = false;
    
    if (data.success) {
      displayResults(data, type);
    } else if (data.error) {
      showError(data.error, data.note, data.instructions);
    } else {
      showError('Failed to fetch Instagram content');
    }
  } catch (error) {
    if (loadingDiv) loadingDiv.classList.add('hidden');
    if (downloadBtn) downloadBtn.disabled = false;
    showError('Network error. Please try again.', error.message);
  }
}

function displayResults(data, type) {
  const resultsDiv = document.getElementById('download-results');
  if (!resultsDiv) return;
  
  let html = '<div class="bg-white rounded-lg p-6 shadow-lg">';
  
  if (type === 'profile') {
    // Profile Picture Display
    html += `
      <div class="text-center">
        <div class="mb-4">
          <img src="${data.profilePic}" alt="${data.username}" 
               class="w-32 h-32 rounded-full mx-auto border-4 border-pink-500 object-cover"
               onerror="this.src='https://via.placeholder.com/150?text=Profile'">
        </div>
        <h3 class="text-2xl font-bold mb-2">
          ${data.fullName || data.username}
          ${data.isVerified ? '<i class="fas fa-check-circle text-blue-500 ml-2"></i>' : ''}
        </h3>
        <p class="text-gray-600 mb-4">@${data.username}</p>
        
        ${data.bio ? `<p class="text-gray-700 mb-4">${data.bio}</p>` : ''}
        
        ${data.followers ? `
          <div class="flex justify-center gap-6 mb-4 text-sm">
            <div><span class="font-bold">${formatNumber(data.followers)}</span> followers</div>
            <div><span class="font-bold">${formatNumber(data.following)}</span> following</div>
            <div><span class="font-bold">${formatNumber(data.posts)}</span> posts</div>
          </div>
        ` : ''}
        
        ${data.note ? `
          <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
            <p class="text-sm text-yellow-800">
              <i class="fas fa-info-circle mr-2"></i>${data.note}
            </p>
          </div>
        ` : ''}
        
        <div class="flex gap-3 justify-center">
          <a href="${data.profilePic}" download="${data.username}_profile.jpg" 
             class="instagram-btn px-6 py-3 rounded-lg text-white font-bold flex items-center">
            <i class="fas fa-download mr-2"></i>Download Profile Picture
          </a>
          <a href="https://instagram.com/${data.username}" target="_blank"
             class="bg-gray-600 hover:bg-gray-700 px-6 py-3 rounded-lg text-white font-bold flex items-center transition">
            <i class="fab fa-instagram mr-2"></i>Open Profile
          </a>
        </div>
        
        <p class="text-xs text-gray-500 mt-4">
          <i class="fas fa-info-circle mr-1"></i>
          Right-click the image above and "Save As" for highest quality
        </p>
      </div>
    `;
  } else {
    // Post/Reel/Story Display
    html += `
      <div class="text-center">
        <h3 class="text-xl font-bold mb-3">
          <i class="fas fa-check-circle text-green-500 mr-2"></i>Content Found
        </h3>
        
        ${data.authorName ? `
          <p class="text-gray-700 mb-2">
            <i class="fab fa-instagram mr-2 text-pink-500"></i>
            By <strong>${data.authorName}</strong>
          </p>
        ` : ''}
        
        ${data.title ? `<p class="text-gray-600 mb-4">${data.title}</p>` : ''}
        
        ${data.thumbnailUrl ? `
          <div class="mb-4">
            <img src="${data.thumbnailUrl}" alt="Instagram Content" 
                 class="max-w-full h-auto rounded-lg mx-auto border-2 border-pink-500"
                 style="max-height: 400px;">
          </div>
        ` : ''}
        
        <div class="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4 text-left">
          <p class="text-sm text-blue-800 mb-2">
            <i class="fas fa-info-circle mr-2"></i>
            <strong>Important Note:</strong>
          </p>
          <p class="text-sm text-blue-800">
            ${data.note || 'Instagram restricts direct video downloads through third-party apps.'}
          </p>
        </div>
        
        <div class="bg-gray-50 rounded-lg p-4 mb-4 text-left">
          <p class="font-bold mb-2">How to Download:</p>
          <ol class="text-sm text-gray-700 space-y-1 ml-4">
            ${data.instructions ? data.instructions.map(instr => `<li>${instr}</li>`).join('') : `
              <li>1. Click "Open Post" button below</li>
              <li>2. Right-click on the image/video</li>
              <li>3. Select "Save as..." or "Save video as..."</li>
              <li>4. Or use browser extensions like "Video Downloader" or "Save from Net"</li>
            `}
          </ol>
        </div>
        
        <div class="flex gap-3 justify-center flex-wrap">
          ${data.postUrl ? `
            <a href="${data.postUrl}" target="_blank"
               class="instagram-btn px-6 py-3 rounded-lg text-white font-bold flex items-center">
              <i class="fas fa-external-link-alt mr-2"></i>Open Post
            </a>
          ` : ''}
          
          ${data.thumbnailUrl ? `
            <a href="${data.thumbnailUrl}" download="instagram_${data.shortcode}.jpg"
               class="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg text-white font-bold flex items-center transition">
              <i class="fas fa-download mr-2"></i>Download Thumbnail
            </a>
          ` : ''}
          
          ${data.authorUrl ? `
            <a href="${data.authorUrl}" target="_blank"
               class="bg-gray-600 hover:bg-gray-700 px-6 py-3 rounded-lg text-white font-bold flex items-center transition">
              <i class="fab fa-instagram mr-2"></i>Author Profile
            </a>
          ` : ''}
        </div>
        
        ${data.embedHtml ? `
          <details class="mt-4 text-left">
            <summary class="cursor-pointer font-bold text-gray-700 hover:text-pink-500">
              View Embed Code
            </summary>
            <div class="mt-2 bg-gray-100 rounded p-3 text-xs overflow-x-auto">
              <code>${escapeHtml(data.embedHtml)}</code>
            </div>
          </details>
        ` : ''}
      </div>
    `;
  }
  
  html += '</div>';
  
  // Add recommendation for browser extensions
  html += `
    <div class="mt-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 border border-pink-200">
      <p class="font-bold text-gray-800 mb-2">
        <i class="fas fa-lightbulb text-yellow-500 mr-2"></i>
        Pro Tip: For Easy Downloads
      </p>
      <p class="text-sm text-gray-700 mb-2">
        Install browser extensions for easier Instagram downloads:
      </p>
      <ul class="text-sm text-gray-600 space-y-1 ml-4">
        <li>• <strong>Chrome/Edge:</strong> "Instagram Downloader" or "Video Downloader Plus"</li>
        <li>• <strong>Firefox:</strong> "Video DownloadHelper"</li>
        <li>• <strong>Mobile:</strong> Use Instagram's "Save" feature or "Repost" apps</li>
      </ul>
    </div>
  `;
  
  resultsDiv.innerHTML = html;
}

function showError(message, note, instructions) {
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
          <p class="font-bold text-gray-800 mb-2">Alternative Method:</p>
          <ol class="text-sm text-gray-700 space-y-1 ml-4">
            ${instructions.map(instr => `<li>${instr}</li>`).join('')}
          </ol>
        </div>
      ` : ''}
      
      <div class="mt-4 bg-blue-50 rounded p-4">
        <p class="text-sm text-gray-700">
          <strong>Why this happens:</strong> Instagram restricts access to their content through third-party apps 
          to protect user privacy and prevent unauthorized downloads. Consider using official Instagram features 
          or browser extensions instead.
        </p>
      </div>
    </div>
  `;
  
  resultsDiv.innerHTML = html;
}

function formatNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

function escapeHtml(html) {
  const div = document.createElement('div');
  div.textContent = html;
  return div.innerHTML;
}
