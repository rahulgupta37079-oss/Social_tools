import { Layout } from '../components/layout'

export const SocialToolsPage = () => {
  const instagramTools = [
    { name: 'Reels Downloader', icon: 'fa-video', path: '/instagram/reels', desc: 'Download Instagram Reels in HD' },
    { name: 'Post Downloader', icon: 'fa-image', path: '/instagram/post', desc: 'Save photos and videos from posts' },
    { name: 'Story Downloader', icon: 'fa-clock', path: '/instagram/story', desc: 'Download stories anonymously' },
    { name: 'Profile Picture', icon: 'fa-user-circle', path: '/instagram/profile', desc: 'Get full-size profile pictures' }
  ]

  const otherTools = [
    { name: 'TikTok Downloader', icon: 'fab fa-tiktok', path: '/tiktok', desc: 'Download TikTok videos without watermark', color: 'black' },
    { name: 'YouTube Downloader', icon: 'fab fa-youtube', path: '/youtube', desc: 'Download YouTube videos and audio', color: 'red' }
  ]

  const comingSoonTools = [
    { name: 'Twitter Downloader', icon: 'fab fa-twitter', platform: 'Twitter', desc: 'Save Twitter videos and GIFs' },
    { name: 'Facebook Downloader', icon: 'fab fa-facebook', platform: 'Facebook', desc: 'Download Facebook videos' }
  ]

  return (
    <Layout title="Social Media Tools">
      <style>{`
        .instagram-section {
          background: linear-gradient(135deg, #ffffff 0%, #ffe5f5 50%, #ffd1eb 100%);
          border-radius: 1rem;
          padding: 3rem 2rem;
          margin-bottom: 3rem;
        }
        .instagram-card {
          background: white;
          border: 3px solid #E1306C;
          transition: all 0.3s ease;
          box-shadow: 0 8px 32px rgba(225, 48, 108, 0.15);
        }
        .instagram-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(225, 48, 108, 0.3);
          border-color: #C13584;
        }
        .instagram-gradient {
          background: linear-gradient(45deg, #E1306C, #C13584, #833AB4);
        }
        .instagram-text {
          background: linear-gradient(45deg, #E1306C, #C13584, #833AB4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      <section class="container mx-auto px-4 py-16">
        {/* Header */}
        <div class="text-center mb-16">
          <h1 class="text-5xl font-bold text-yellow mb-4">
            <i class="fas fa-share-alt mr-3"></i>
            Social Media Tools
          </h1>
          <p class="text-xl text-gray-300">
            Download content from your favorite social media platforms
          </p>
          <p class="text-lg text-gray-400 mt-2">
            Fast • Free • Private • No Registration Required
          </p>
        </div>

        {/* Instagram Tools */}
        <div class="instagram-section">
          <div class="flex items-center mb-8">
            <i class="fab fa-instagram text-5xl mr-4 instagram-text"></i>
            <div>
              <h2 class="text-3xl font-bold instagram-text">Instagram Tools</h2>
              <p class="text-gray-700">Download Reels, Posts, Stories, and Profile Pictures</p>
            </div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {instagramTools.map(tool => (
              <a href={tool.path} class="instagram-card rounded-lg p-6 block">
                <div class="text-center">
                  <i class={`fas ${tool.icon} text-pink-500 text-4xl mb-4`}></i>
                  <h3 class="text-xl font-bold text-gray-800 mb-2">{tool.name}</h3>
                  <p class="text-gray-600 text-sm">{tool.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Other Popular Platforms */}
        <div class="mb-16">
          <div class="flex items-center mb-8">
            <i class="fas fa-fire text-yellow text-4xl mr-4"></i>
            <div>
              <h2 class="text-3xl font-bold text-white">Popular Platforms</h2>
              <p class="text-gray-400">Download from TikTok and YouTube</p>
            </div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherTools.map(tool => (
              <a href={tool.path} class="tool-card rounded-lg p-8 block group">
                <div class="text-center">
                  <i class={`${tool.icon} text-yellow text-5xl mb-4 group-hover:scale-110 transition-transform`}></i>
                  <h3 class="text-2xl font-bold text-white mb-2">{tool.name}</h3>
                  <p class="text-gray-300 mb-4">{tool.desc}</p>
                  <span class="inline-block bg-yellow text-black text-sm font-bold px-4 py-2 rounded-full">
                    <i class="fas fa-check-circle mr-2"></i>Available Now
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Coming Soon */}
        <div class="mb-16">
          <div class="flex items-center mb-8">
            <i class="fas fa-rocket text-yellow text-4xl mr-4"></i>
            <div>
              <h2 class="text-3xl font-bold text-white">Coming Soon</h2>
              <p class="text-gray-400">More platforms being added regularly</p>
            </div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {comingSoonTools.map(tool => (
              <div class="tool-card rounded-lg p-6 opacity-60 cursor-not-allowed">
                <div class="text-center">
                  <i class={`${tool.icon} text-yellow text-4xl mb-4`}></i>
                  <h3 class="text-xl font-bold text-white mb-2">{tool.name}</h3>
                  <p class="text-gray-400 text-sm">{tool.desc}</p>
                  <span class="inline-block mt-3 bg-yellow text-black text-xs font-bold px-3 py-1 rounded-full">
                    Coming Soon
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div class="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 rounded-lg p-8 mb-16">
          <h2 class="text-3xl font-bold text-white mb-6 text-center">
            <i class="fas fa-star mr-2"></i>
            Why Use Our Tools?
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="text-center bg-white rounded-lg p-4 shadow-lg">
              <i class="fas fa-download text-pink-500 text-3xl mb-3"></i>
              <h3 class="font-bold text-gray-800 mb-2">Unlimited Downloads</h3>
              <p class="text-gray-600 text-sm">No limits, no quotas</p>
            </div>
            <div class="text-center bg-white rounded-lg p-4 shadow-lg">
              <i class="fas fa-hd-video text-pink-500 text-3xl mb-3"></i>
              <h3 class="font-bold text-gray-800 mb-2">High Quality</h3>
              <p class="text-gray-600 text-sm">Best available quality</p>
            </div>
            <div class="text-center bg-white rounded-lg p-4 shadow-lg">
              <i class="fas fa-user-secret text-pink-500 text-3xl mb-3"></i>
              <h3 class="font-bold text-gray-800 mb-2">Anonymous</h3>
              <p class="text-gray-600 text-sm">Complete privacy</p>
            </div>
            <div class="text-center bg-white rounded-lg p-4 shadow-lg">
              <i class="fas fa-bolt text-pink-500 text-3xl mb-3"></i>
              <h3 class="font-bold text-gray-800 mb-2">Super Fast</h3>
              <p class="text-gray-600 text-sm">Download in seconds</p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div class="bg-gray-900 rounded-lg p-8">
          <h2 class="text-3xl font-bold text-yellow mb-6 text-center">
            <i class="fas fa-question-circle mr-2"></i>
            How It Works
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div class="text-center">
              <div class="bg-yellow text-black w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 class="text-white font-bold mb-2">Copy Link</h3>
              <p class="text-gray-400 text-sm">Copy the URL from the social media post</p>
            </div>
            <div class="text-center">
              <div class="bg-yellow text-black w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 class="text-white font-bold mb-2">Paste URL</h3>
              <p class="text-gray-400 text-sm">Paste it in our tool's input field</p>
            </div>
            <div class="text-center">
              <div class="bg-yellow text-black w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 class="text-white font-bold mb-2">Click Download</h3>
              <p class="text-gray-400 text-sm">Process the URL with our tool</p>
            </div>
            <div class="text-center">
              <div class="bg-yellow text-black w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 class="text-white font-bold mb-2">Save File</h3>
              <p class="text-gray-400 text-sm">Download to your device</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
