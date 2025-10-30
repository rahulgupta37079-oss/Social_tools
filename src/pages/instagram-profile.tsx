import { DownloaderTemplate } from '../components/downloader-template'

export const InstagramProfilePage = () => {
  return DownloaderTemplate({
    title: 'Instagram Profile Picture Downloader',
    icon: 'fab fa-instagram',
    description: 'Download Instagram profile pictures in full resolution - View and save any profile photo',
    platform: 'Instagram',
    toolType: 'profile',
    placeholder: 'https://www.instagram.com/username/ or just @username',
    instructions: [
      'Visit the Instagram profile you want to download the picture from',
      'Copy the profile URL from your browser, or just type the username with @',
      'Paste the URL or username in the input field above',
      'Click "Download" to fetch the profile picture',
      'View in full size and download the high-resolution image'
    ]
  })
}
