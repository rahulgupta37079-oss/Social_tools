import { DownloaderTemplate } from '../components/downloader-template'

export const InstagramReelsPage = () => {
  return DownloaderTemplate({
    title: 'Instagram Reels Downloader',
    icon: 'fab fa-instagram',
    description: 'Download Instagram Reels videos in HD quality - Fast, Free, and Private',
    platform: 'Instagram',
    toolType: 'reels',
    placeholder: 'https://www.instagram.com/reel/...',
    instructions: [
      'Open Instagram and find the Reel you want to download',
      'Tap the three dots (•••) and select "Copy Link"',
      'Paste the link in the box above',
      'Click the "Download" button',
      'Choose your preferred quality and download the video'
    ]
  })
}
