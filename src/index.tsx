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

export default app
