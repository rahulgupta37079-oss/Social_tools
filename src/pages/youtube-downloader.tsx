import { DownloaderTemplate } from '../components/downloader-template'

export const YouTubeDownloaderPage = () => {
  return DownloaderTemplate({
    title: 'YouTube Video Downloader',
    icon: 'fab fa-youtube',
    description: 'Download YouTube videos and audio in multiple formats and qualities',
    platform: 'YouTube',
    toolType: 'youtube',
    placeholder: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    instructions: [
      'Go to YouTube and find the video you want to download',
      'Copy the video URL from the address bar',
      'Paste the YouTube URL in the input field above',
      'Click the Download button to fetch available formats',
      'Select your preferred format (MP4, MP3, etc.) and quality',
      'Click download to save the video or audio to your device'
    ]
  })
}
