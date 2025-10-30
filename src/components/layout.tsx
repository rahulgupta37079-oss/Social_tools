export const Layout = (props: { children: any; title: string }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Professional image editing and social media tools. Edit images, download Instagram content, and more - all free and privacy-first." />
        <title>{props.title} - ImageTools</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        <style>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background: #000;
            color: #fff;
          }
          .bg-yellow {
            background-color: #FFD700;
          }
          .text-yellow {
            color: #FFD700;
          }
          .border-yellow {
            border-color: #FFD700;
          }
          .hover-yellow:hover {
            background-color: #FFD700;
            color: #000;
          }
          .tool-card {
            background: #1a1a1a;
            border: 2px solid #333;
            transition: all 0.3s ease;
          }
          .tool-card:hover {
            border-color: #FFD700;
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(255, 215, 0, 0.3);
          }
          .upload-area {
            border: 3px dashed #FFD700;
            background: #1a1a1a;
            transition: all 0.3s ease;
          }
          .upload-area:hover {
            background: #222;
            border-color: #FFF;
          }
          .btn-primary {
            background: #FFD700;
            color: #000;
            font-weight: 600;
            transition: all 0.3s ease;
          }
          .btn-primary:hover {
            background: #FFF;
            transform: scale(1.05);
          }
          .btn-secondary {
            background: #333;
            color: #FFD700;
            border: 2px solid #FFD700;
            transition: all 0.3s ease;
          }
          .btn-secondary:hover {
            background: #FFD700;
            color: #000;
          }
          #canvas-preview {
            max-width: 100%;
            border: 2px solid #FFD700;
          }
          .dropdown {
            position: relative;
            display: inline-block;
          }
          .dropdown-content {
            display: none;
            position: absolute;
            top: calc(100% - 8px);
            left: 0;
            background-color: #1a1a1a;
            min-width: 200px;
            box-shadow: 0 8px 16px rgba(255, 215, 0, 0.2);
            z-index: 1000;
            border: 2px solid #FFD700;
            border-radius: 8px;
            padding-top: 8px;
            pointer-events: auto;
          }
          .dropdown:hover .dropdown-content {
            display: block;
            pointer-events: auto;
          }
          .dropdown-content a {
            color: #fff;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
            transition: all 0.3s ease;
            cursor: pointer;
          }
          .dropdown-content a:hover {
            background-color: #FFD700;
            color: #000;
          }
          .dropdown > a {
            pointer-events: auto;
            cursor: pointer;
          }
          .mobile-menu {
            display: none;
          }
          @media (max-width: 768px) {
            .desktop-menu {
              display: none;
            }
            .mobile-menu {
              display: block;
            }
          }
        `}</style>
      </head>
      <body>
        {/* Header */}
        <nav class="bg-black border-b-2 border-yellow py-4 sticky top-0 z-50">
          <div class="container mx-auto px-4">
            <div class="flex items-center justify-between">
              {/* Logo */}
              <a href="/" class="flex items-center space-x-3">
                <i class="fas fa-image text-yellow text-3xl"></i>
                <div>
                  <span class="text-2xl font-bold text-yellow block">ImageTools</span>
                  <span class="text-xs text-gray-400">Professional Editing Suite</span>
                </div>
              </a>
              
              {/* Desktop Menu */}
              <div class="desktop-menu flex items-center space-x-6">
                <a href="/" class="text-white hover:text-yellow transition flex items-center">
                  <i class="fas fa-home mr-2"></i>Home
                </a>
                
                {/* Image Tools Dropdown */}
                <div class="dropdown">
                  <a href="#" class="text-white hover:text-yellow transition flex items-center cursor-pointer">
                    <i class="fas fa-image mr-2"></i>Image Tools
                    <i class="fas fa-chevron-down ml-2 text-xs"></i>
                  </a>
                  <div class="dropdown-content">
                    <a href="/compress"><i class="fas fa-compress mr-2"></i>Compress</a>
                    <a href="/resize"><i class="fas fa-expand-arrows-alt mr-2"></i>Resize</a>
                    <a href="/crop"><i class="fas fa-crop mr-2"></i>Crop</a>
                    <a href="/convert"><i class="fas fa-exchange-alt mr-2"></i>Convert</a>
                    <a href="/rotate"><i class="fas fa-redo mr-2"></i>Rotate</a>
                    <a href="/flip"><i class="fas fa-arrows-alt-h mr-2"></i>Flip</a>
                  </div>
                </div>

                {/* Effects & Filters Dropdown */}
                <div class="dropdown">
                  <a href="#" class="text-white hover:text-yellow transition flex items-center cursor-pointer">
                    <i class="fas fa-magic mr-2"></i>Effects
                    <i class="fas fa-chevron-down ml-2 text-xs"></i>
                  </a>
                  <div class="dropdown-content">
                    <a href="/filter"><i class="fas fa-magic mr-2"></i>Filters</a>
                    <a href="/brightness"><i class="fas fa-sun mr-2"></i>Brightness</a>
                    <a href="/watermark"><i class="fas fa-stamp mr-2"></i>Watermark</a>
                    <a href="/remove-bg"><i class="fas fa-cut mr-2"></i>Remove BG</a>
                    <a href="/upscale"><i class="fas fa-search-plus mr-2"></i>Upscale</a>
                    <a href="/merge"><i class="fas fa-layer-group mr-2"></i>Merge</a>
                  </div>
                </div>

                {/* Instagram Tools Dropdown */}
                <div class="dropdown">
                  <a href="#" class="text-white hover:text-yellow transition flex items-center cursor-pointer">
                    <i class="fab fa-instagram mr-2"></i>Instagram
                    <i class="fas fa-chevron-down ml-2 text-xs"></i>
                  </a>
                  <div class="dropdown-content">
                    <a href="/instagram/reels"><i class="fas fa-video mr-2"></i>Reels Downloader</a>
                    <a href="/instagram/post"><i class="fas fa-image mr-2"></i>Post Downloader</a>
                    <a href="/instagram/story"><i class="fas fa-clock mr-2"></i>Story Downloader</a>
                    <a href="/instagram/profile"><i class="fas fa-user-circle mr-2"></i>Profile Picture</a>
                  </div>
                </div>

                <a href="/social-tools" class="text-white hover:text-yellow transition flex items-center">
                  <i class="fas fa-share-alt mr-2"></i>Social Tools
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button id="mobile-menu-btn" class="mobile-menu text-yellow text-2xl">
                <i class="fas fa-bars"></i>
              </button>
            </div>
          </div>
        </nav>
        
        <main>
          {props.children}
        </main>
        
        {/* Enhanced Footer */}
        <footer class="bg-black border-t-2 border-yellow py-12 mt-20">
          <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* About Section */}
              <div>
                <h3 class="text-yellow font-bold text-xl mb-4 flex items-center">
                  <i class="fas fa-info-circle mr-2"></i>About ImageTools
                </h3>
                <p class="text-gray-400 text-sm leading-relaxed">
                  Professional image editing and social media tools suite. Process images directly in your browser with 100% privacy. No uploads, no registration, completely free.
                </p>
                <div class="mt-4 flex space-x-3">
                  <a href="#" class="text-gray-400 hover:text-yellow transition">
                    <i class="fab fa-twitter text-xl"></i>
                  </a>
                  <a href="#" class="text-gray-400 hover:text-yellow transition">
                    <i class="fab fa-github text-xl"></i>
                  </a>
                  <a href="#" class="text-gray-400 hover:text-yellow transition">
                    <i class="fab fa-discord text-xl"></i>
                  </a>
                </div>
              </div>

              {/* Image Tools */}
              <div>
                <h3 class="text-yellow font-bold text-xl mb-4 flex items-center">
                  <i class="fas fa-image mr-2"></i>Image Tools
                </h3>
                <ul class="space-y-2">
                  <li><a href="/compress" class="text-gray-400 hover:text-yellow transition text-sm">Compress Image</a></li>
                  <li><a href="/resize" class="text-gray-400 hover:text-yellow transition text-sm">Resize Image</a></li>
                  <li><a href="/crop" class="text-gray-400 hover:text-yellow transition text-sm">Crop Image</a></li>
                  <li><a href="/convert" class="text-gray-400 hover:text-yellow transition text-sm">Convert Format</a></li>
                  <li><a href="/rotate" class="text-gray-400 hover:text-yellow transition text-sm">Rotate Image</a></li>
                  <li><a href="/filter" class="text-gray-400 hover:text-yellow transition text-sm">Apply Filters</a></li>
                </ul>
              </div>

              {/* Instagram Tools */}
              <div>
                <h3 class="text-yellow font-bold text-xl mb-4 flex items-center">
                  <i class="fab fa-instagram mr-2"></i>Instagram Tools
                </h3>
                <ul class="space-y-2">
                  <li><a href="/instagram/reels" class="text-gray-400 hover:text-yellow transition text-sm">Reels Downloader</a></li>
                  <li><a href="/instagram/post" class="text-gray-400 hover:text-yellow transition text-sm">Post Downloader</a></li>
                  <li><a href="/instagram/story" class="text-gray-400 hover:text-yellow transition text-sm">Story Downloader</a></li>
                  <li><a href="/instagram/profile" class="text-gray-400 hover:text-yellow transition text-sm">Profile Picture</a></li>
                  <li><a href="/social-tools" class="text-gray-400 hover:text-yellow transition text-sm">All Social Tools</a></li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 class="text-yellow font-bold text-xl mb-4 flex items-center">
                  <i class="fas fa-book mr-2"></i>Resources
                </h3>
                <ul class="space-y-2">
                  <li><a href="#" class="text-gray-400 hover:text-yellow transition text-sm">How to Use</a></li>
                  <li><a href="#" class="text-gray-400 hover:text-yellow transition text-sm">FAQ</a></li>
                  <li><a href="#" class="text-gray-400 hover:text-yellow transition text-sm">Privacy Policy</a></li>
                  <li><a href="#" class="text-gray-400 hover:text-yellow transition text-sm">Terms of Service</a></li>
                  <li><a href="#" class="text-gray-400 hover:text-yellow transition text-sm">Contact Us</a></li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div class="border-t border-gray-800 mt-8 pt-8 text-center">
              <div class="flex flex-col md:flex-row justify-between items-center">
                <p class="text-gray-400 text-sm">
                  <i class="fas fa-heart text-yellow"></i> Built with Hono & Cloudflare Workers
                </p>
                <p class="text-gray-500 text-sm mt-2 md:mt-0">
                  © 2025 ImageTools. All rights reserved.
                </p>
              </div>
              <div class="mt-4">
                <p class="text-gray-500 text-xs">
                  <i class="fas fa-shield-alt text-yellow mr-1"></i>
                  Your privacy is our priority. All processing happens in your browser. No data is stored or uploaded.
                </p>
              </div>
            </div>
          </div>
        </footer>
        
        <script src="/static/app.js"></script>
        <script src="/static/instagram.js"></script>
      </body>
    </html>
  )
}
