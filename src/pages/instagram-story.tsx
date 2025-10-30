import { DownloaderTemplate } from '../components/downloader-template'

export const InstagramStoryPage = () => {
  return DownloaderTemplate({
    title: 'Instagram Story Downloader',
    icon: 'fab fa-instagram',
    description: 'Download Instagram Stories anonymously - Photos and videos in full quality',
    platform: 'Instagram',
    toolType: 'story',
    placeholder: 'https://www.instagram.com/stories/username/...',
    instructions: [
      'Open Instagram and find the story you want to download',
      'Tap the story to view it, then tap the three dots (•••)',
      'Select "Share to..." and then "Copy Link"',
      'Paste the story link in the box above',
      'Click "Download" and save the story to your device'
    ]
  })
}
