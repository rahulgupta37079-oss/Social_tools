import { DownloaderTemplate } from '../components/downloader-template'

export const TikTokDownloaderPage = () => {
  return DownloaderTemplate({
    title: 'TikTok Video Downloader',
    icon: 'fab fa-tiktok',
    description: 'Download TikTok videos without watermark in HD quality',
    platform: 'TikTok',
    toolType: 'tiktok',
    placeholder: 'https://www.tiktok.com/@username/video/1234567890',
    instructions: [
      'Open TikTok app or website and find the video you want to download',
      'Tap the Share button and select "Copy Link"',
      'Paste the TikTok video URL in the input field above',
      'Click the Download button to fetch the video',
      'Choose your preferred quality and download the video'
    ]
  })
}
