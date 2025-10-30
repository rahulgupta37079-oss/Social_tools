import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'

// Image Tools
import { HomePage } from './pages/home'
import { CompressPage } from './pages/compress'
import { ResizePage } from './pages/resize'
import { CropPage } from './pages/crop'
import { ConvertPage } from './pages/convert'
import { RotatePage } from './pages/rotate'
import { WatermarkPage } from './pages/watermark'
import { MergePage } from './pages/merge'
import { FlipPage } from './pages/flip'
import { RemoveBgPage } from './pages/removebg'
import { UpscalePage } from './pages/upscale'
import { FilterPage } from './pages/filter'
import { BrightnessPage } from './pages/brightness'

// Social Media Tools
import { SocialToolsPage } from './pages/social-tools'
import { InstagramReelsPage } from './pages/instagram-reels'
import { InstagramPostPage } from './pages/instagram-post'
import { InstagramStoryPage } from './pages/instagram-story'
import { InstagramProfilePage } from './pages/instagram-profile'
import { TikTokDownloaderPage } from './pages/tiktok-downloader'
import { YouTubeDownloaderPage } from './pages/youtube-downloader'

const app = new Hono()

// Enable CORS
app.use('/api/*', cors())

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// Homepage
app.get('/', (c) => c.html(HomePage()))

// Image Tool pages
app.get('/compress', (c) => c.html(CompressPage()))
app.get('/resize', (c) => c.html(ResizePage()))
app.get('/crop', (c) => c.html(CropPage()))
app.get('/convert', (c) => c.html(ConvertPage()))
app.get('/rotate', (c) => c.html(RotatePage()))
app.get('/watermark', (c) => c.html(WatermarkPage()))
app.get('/merge', (c) => c.html(MergePage()))
app.get('/flip', (c) => c.html(FlipPage()))
app.get('/remove-bg', (c) => c.html(RemoveBgPage()))
app.get('/upscale', (c) => c.html(UpscalePage()))
app.get('/filter', (c) => c.html(FilterPage()))
app.get('/brightness', (c) => c.html(BrightnessPage()))

// Social Media Tools
app.get('/social-tools', (c) => c.html(SocialToolsPage()))

// Instagram Tools
app.get('/instagram/reels', (c) => c.html(InstagramReelsPage()))
app.get('/instagram/post', (c) => c.html(InstagramPostPage()))
app.get('/instagram/story', (c) => c.html(InstagramStoryPage()))
app.get('/instagram/profile', (c) => c.html(InstagramProfilePage()))

// Other Social Media Tools
app.get('/tiktok', (c) => c.html(TikTokDownloaderPage()))
app.get('/youtube', (c) => c.html(YouTubeDownloaderPage()))

// API Routes for Instagram Downloads
app.post('/api/instagram/fetch', async (c) => {
  try {
    const { url, type } = await c.req.json()
    
    if (!url) {
      return c.json({ error: 'URL is required' }, 400)
    }

    // Extract Instagram shortcode or username from URL
    let shortcode = ''
    let username = ''
    
    if (type === 'profile') {
      // Extract username from profile URL
      const profileMatch = url.match(/instagram\.com\/([^/?]+)/)
      username = profileMatch ? profileMatch[1] : url.replace('@', '')
    } else {
      // Extract shortcode from post/reel/story URL
      const match = url.match(/instagram\.com\/(p|reel|stories|tv)\/([^/?]+)/)
      shortcode = match ? match[2] : ''
      
      if (!shortcode) {
        // Try direct shortcode
        const directMatch = url.match(/\/([A-Za-z0-9_-]{11})/)
        shortcode = directMatch ? directMatch[1] : url
      }
    }

    if (!shortcode && !username) {
      return c.json({ error: 'Invalid Instagram URL' }, 400)
    }

    // Use Instagram's oEmbed API for public content
    let embedData
    if (type === 'profile') {
      // For profile pictures, we'll use a different approach
      try {
        // Try to fetch user info from Instagram's public API
        const response = await fetch(`https://www.instagram.com/${username}/?__a=1&__d=dis`, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept': 'application/json',
          }
        })
        
        if (response.ok) {
          const data = await response.json()
          const user = data?.graphql?.user || data?.user
          
          if (user) {
            return c.json({
              success: true,
              type: 'profile',
              username: user.username,
              fullName: user.full_name || user.username,
              profilePic: user.profile_pic_url_hd || user.profile_pic_url,
              isVerified: user.is_verified || false,
              followers: user.edge_followed_by?.count || 0,
              following: user.edge_follow?.count || 0,
              posts: user.edge_owner_to_timeline_media?.count || 0,
              bio: user.biography || ''
            })
          }
        }
        
        // Fallback: Return basic info with lower quality profile pic
        return c.json({
          success: true,
          type: 'profile',
          username: username,
          profilePic: `https://instagram.com/${username}/`,
          note: 'High-resolution profile pictures require Instagram login. Showing public profile.'
        })
      } catch (error) {
        return c.json({ 
          error: 'Could not fetch profile data. Instagram may require authentication.',
          fallback: true,
          username: username
        }, 400)
      }
    } else {
      // For posts/reels, try oEmbed API
      const embedUrl = `https://api.instagram.com/oembed/?url=https://www.instagram.com/p/${shortcode}/`
      
      try {
        const embedResponse = await fetch(embedUrl)
        
        if (embedResponse.ok) {
          embedData = await embedResponse.json()
          
          return c.json({
            success: true,
            type: type,
            shortcode: shortcode,
            title: embedData.title,
            authorName: embedData.author_name,
            authorUrl: embedData.author_url,
            thumbnailUrl: embedData.thumbnail_url,
            embedHtml: embedData.html,
            width: embedData.thumbnail_width,
            height: embedData.thumbnail_height,
            note: 'Instagram restricts direct video downloads. Use the embed or visit the post directly.'
          })
        }
      } catch (error) {
        // oEmbed failed, return error
      }
      
      // If oEmbed fails, return basic info
      return c.json({
        success: true,
        type: type,
        shortcode: shortcode,
        postUrl: `https://www.instagram.com/p/${shortcode}/`,
        note: 'Instagram has restricted public API access. Please visit the post directly to download.',
        instructions: [
          '1. Click the link above to open the post',
          '2. Right-click on the image/video',
          '3. Select "Save image as..." or use browser extensions'
        ]
      })
    }
  } catch (error) {
    console.error('Instagram fetch error:', error)
    return c.json({ 
      error: 'Failed to fetch Instagram content',
      details: error instanceof Error ? error.message : 'Unknown error',
      note: 'Instagram restricts third-party access to their content. Consider using official Instagram app or browser extensions.'
    }, 500)
  }
})

// TikTok API endpoint
app.post('/api/tiktok/fetch', async (c) => {
  try {
    const { url } = await c.req.json()
    
    if (!url) {
      return c.json({ error: 'URL is required' }, 400)
    }

    if (!url.includes('tiktok.com')) {
      return c.json({ error: 'Please enter a valid TikTok URL' }, 400)
    }

    // Extract video ID from URL
    const videoIdMatch = url.match(/video\/(\d+)/)
    const videoId = videoIdMatch ? videoIdMatch[1] : ''

    // TikTok's oEmbed API
    try {
      const embedUrl = `https://www.tiktok.com/oembed?url=${encodeURIComponent(url)}`
      const embedResponse = await fetch(embedUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      })

      if (embedResponse.ok) {
        const embedData = await embedResponse.json()
        
        return c.json({
          success: true,
          type: 'tiktok',
          videoId: videoId,
          title: embedData.title,
          authorName: embedData.author_name,
          authorUrl: embedData.author_url,
          thumbnailUrl: embedData.thumbnail_url,
          embedHtml: embedData.html,
          videoUrl: url,
          note: 'TikTok videos can be downloaded using browser extensions or third-party tools.',
          instructions: [
            '1. Open the video in TikTok app or website',
            '2. Use browser extensions like "TikTok Downloader" or "Video Downloader"',
            '3. Or use online tools like snaptik.app or tikmate.app',
            '4. For mobile: Use "Repost" apps from app stores'
          ]
        })
      }
    } catch (error) {
      // oEmbed failed
    }

    // Fallback response
    return c.json({
      success: true,
      type: 'tiktok',
      videoId: videoId,
      videoUrl: url,
      note: 'TikTok restricts direct API access. Please use alternative methods.',
      instructions: [
        '1. Click the link above to open the video',
        '2. In TikTok app: Long press and select "Save video"',
        '3. Use browser extensions: "TikTok Downloader", "Video DownloadHelper"',
        '4. Online tools: snaptik.app, tikmate.app, or ssstik.io',
        '5. These tools can remove watermarks and download in HD'
      ],
      recommendations: [
        { name: 'SnapTik', url: 'https://snaptik.app' },
        { name: 'TikMate', url: 'https://tikmate.app' },
        { name: 'SSSTik', url: 'https://ssstik.io' }
      ]
    })
  } catch (error) {
    console.error('TikTok fetch error:', error)
    return c.json({ 
      error: 'Failed to fetch TikTok content',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, 500)
  }
})

// YouTube API endpoint
app.post('/api/youtube/fetch', async (c) => {
  try {
    const { url } = await c.req.json()
    
    if (!url) {
      return c.json({ error: 'URL is required' }, 400)
    }

    if (!url.includes('youtube.com') && !url.includes('youtu.be')) {
      return c.json({ error: 'Please enter a valid YouTube URL' }, 400)
    }

    // Extract video ID from various YouTube URL formats
    let videoId = ''
    
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /youtube\.com\/watch\?.*v=([^&\n?#]+)/
    ]
    
    for (const pattern of patterns) {
      const match = url.match(pattern)
      if (match) {
        videoId = match[1]
        break
      }
    }

    if (!videoId) {
      return c.json({ error: 'Could not extract video ID from URL' }, 400)
    }

    // YouTube's oEmbed API
    try {
      const embedUrl = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`
      const embedResponse = await fetch(embedUrl)

      if (embedResponse.ok) {
        const embedData = await embedResponse.json()
        
        return c.json({
          success: true,
          type: 'youtube',
          videoId: videoId,
          title: embedData.title,
          authorName: embedData.author_name,
          authorUrl: embedData.author_url,
          thumbnailUrl: embedData.thumbnail_url || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
          embedHtml: embedData.html,
          videoUrl: `https://www.youtube.com/watch?v=${videoId}`,
          watchUrl: `https://www.youtube.com/watch?v=${videoId}`,
          note: 'YouTube videos require special tools for downloading due to copyright protection.',
          instructions: [
            '1. Use browser extensions: "Video Downloader Plus" (Chrome), "Video DownloadHelper" (Firefox)',
            '2. Online tools: y2mate.com, yt1s.com, or savefrom.net',
            '3. Desktop software: 4K Video Downloader, YTD Video Downloader',
            '4. For audio only: Use MP3 converter tools',
            '5. Always respect copyright and use downloaded content legally'
          ],
          recommendations: [
            { name: 'Y2Mate', url: 'https://y2mate.com', type: 'Online tool for video/audio' },
            { name: 'YT1s', url: 'https://yt1s.com', type: 'Fast MP4/MP3 converter' },
            { name: '4K Video Downloader', url: 'https://www.4kdownload.com', type: 'Desktop app (Windows/Mac)' }
          ],
          formats: [
            { quality: '1080p', format: 'MP4', note: 'Full HD video' },
            { quality: '720p', format: 'MP4', note: 'HD video' },
            { quality: '480p', format: 'MP4', note: 'Standard quality' },
            { quality: '320kbps', format: 'MP3', note: 'High quality audio' },
            { quality: '128kbps', format: 'MP3', note: 'Standard audio' }
          ]
        })
      }
    } catch (error) {
      // oEmbed failed
    }

    // Fallback response
    return c.json({
      success: true,
      type: 'youtube',
      videoId: videoId,
      thumbnailUrl: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
      videoUrl: `https://www.youtube.com/watch?v=${videoId}`,
      watchUrl: `https://www.youtube.com/watch?v=${videoId}`,
      note: 'YouTube restricts direct API access for downloads.',
      instructions: [
        '1. Click the watch link above to open the video',
        '2. Use recommended browser extensions or online tools below',
        '3. Select your preferred quality and format',
        '4. Remember to respect copyright laws'
      ],
      recommendations: [
        { name: 'Y2Mate', url: 'https://y2mate.com' },
        { name: 'YT1s', url: 'https://yt1s.com' },
        { name: 'SaveFrom.net', url: 'https://savefrom.net' }
      ]
    })
  } catch (error) {
    console.error('YouTube fetch error:', error)
    return c.json({ 
      error: 'Failed to fetch YouTube content',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, 500)
  }
})

export default app
