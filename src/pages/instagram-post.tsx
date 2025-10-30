import { DownloaderTemplate } from '../components/downloader-template'

export const InstagramPostPage = () => {
  return DownloaderTemplate({
    title: 'Instagram Post Downloader',
    icon: 'fab fa-instagram',
    description: 'Download Instagram photos and videos from posts - Supports single images, carousels, and videos',
    platform: 'Instagram',
    toolType: 'post',
    placeholder: 'https://www.instagram.com/p/...',
    instructions: [
      'Open Instagram and navigate to the post you want to download',
      'Tap the three dots (•••) and select "Copy Link"',
      'Paste the link in the input field above',
      'Click "Download" to process the post',
      'For carousel posts, you can download all images individually or as a zip file'
    ]
  })
}
