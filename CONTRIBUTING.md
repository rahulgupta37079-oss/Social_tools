# Contributing to ImageTools Pro

Thank you for considering contributing to ImageTools Pro! We welcome contributions from everyone.

## 🎯 How Can You Contribute?

### 1. Report Bugs
If you find a bug, please [open an issue](https://github.com/rahulgupta37079-oss/Social_tools/issues) with:
- Clear description of the issue
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Browser and OS information

### 2. Suggest Features
Have an idea? [Open an issue](https://github.com/rahulgupta37079-oss/Social_tools/issues) with:
- Clear description of the feature
- Use cases and benefits
- Possible implementation approach
- Examples from other tools (if any)

### 3. Submit Pull Requests
Ready to code? Follow these steps:

#### Getting Started
```bash
# Fork and clone the repository
git clone https://github.com/YOUR_USERNAME/Social_tools.git
cd Social_tools

# Install dependencies
npm install

# Create a new branch
git checkout -b feature/your-feature-name
```

#### Development Workflow
```bash
# Build the project
npm run build

# Start development server
npm run dev:sandbox

# The server will run on http://localhost:3000
```

#### Making Changes
1. Make your changes in the appropriate files
2. Test your changes thoroughly
3. Ensure code follows existing style
4. Update documentation if needed

#### Submitting Your PR
```bash
# Commit your changes
git add .
git commit -m "feat: add your feature description"

# Push to your fork
git push origin feature/your-feature-name
```

Then:
1. Go to GitHub and create a Pull Request
2. Fill out the PR template
3. Link any related issues
4. Wait for review

## 📝 Commit Message Guidelines

We follow conventional commits:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `perf:` Performance improvements
- `test:` Adding tests
- `chore:` Maintenance tasks

Examples:
```
feat: add Twitter downloader support
fix: resolve dropdown menu hover issue
docs: update installation instructions
style: format code with prettier
refactor: optimize image processing logic
```

## 🎨 Code Style Guidelines

### TypeScript/JavaScript
- Use TypeScript for type safety
- Use meaningful variable names
- Add comments for complex logic
- Follow existing code patterns
- Keep functions small and focused

### CSS/Styling
- Use TailwindCSS utility classes
- Maintain consistent spacing
- Follow color scheme (Yellow for images, Pink for Instagram)
- Ensure responsive design

### File Organization
```
src/
├── components/      # Reusable components
├── pages/          # Page components
└── index.tsx       # Main app entry

public/
└── static/         # Static assets (JS, CSS, images)
```

## 🧪 Testing Your Changes

### Manual Testing
1. Test all affected features
2. Try different browsers (Chrome, Firefox, Safari)
3. Test on mobile devices
4. Check for console errors
5. Verify responsive design

### Image Tools Testing
1. Upload various image formats (PNG, JPEG, WebP)
2. Test with different image sizes
3. Try all control options
4. Verify download works correctly

### Social Media Tools Testing
1. Test with valid URLs
2. Test with invalid URLs
3. Verify error messages
4. Check API responses

## 🏗️ Project Structure

```
webapp/
├── src/
│   ├── index.tsx              # Main app with routes
│   ├── components/
│   │   ├── layout.tsx         # Header, footer, navigation
│   │   ├── tool-template.tsx  # Image tool template
│   │   └── downloader-template.tsx  # Social media template
│   └── pages/
│       ├── home.tsx           # Landing page
│       ├── compress.tsx       # Image tools (12 files)
│       ├── instagram-*.tsx    # Instagram tools (4 files)
│       ├── tiktok-downloader.tsx
│       └── youtube-downloader.tsx
├── public/
│   └── static/
│       ├── app.js             # Image tools logic
│       ├── instagram.js       # Instagram downloader
│       └── social-media.js    # TikTok & YouTube
├── dist/                      # Build output
├── README.md                  # Project documentation
├── DEPLOYMENT.md             # Deployment guide
├── CONTRIBUTING.md           # This file
└── LICENSE                   # MIT License
```

## 🎯 Areas for Contribution

### High Priority
- [ ] Add Twitter/X media downloader
- [ ] Add Facebook video downloader
- [ ] Implement batch image processing
- [ ] Add undo/redo functionality
- [ ] Improve error handling

### Medium Priority
- [ ] Add more image filters
- [ ] Optimize bundle size
- [ ] Add keyboard shortcuts
- [ ] Implement dark mode
- [ ] Add loading indicators

### Nice to Have
- [ ] PDF tools (compress, merge)
- [ ] Video tools (compress, convert)
- [ ] User preferences saving
- [ ] Multi-language support
- [ ] Service worker for offline use

## 🔍 Code Review Process

1. **Automated Checks**: Code must pass any automated checks
2. **Manual Review**: A maintainer will review your code
3. **Feedback**: You may receive feedback or change requests
4. **Approval**: Once approved, your PR will be merged
5. **Deployment**: Changes are deployed to production automatically

## ❓ Questions?

- **GitHub Discussions**: Ask questions in [Discussions](https://github.com/rahulgupta37079-oss/Social_tools/discussions)
- **GitHub Issues**: Report bugs in [Issues](https://github.com/rahulgupta37079-oss/Social_tools/issues)
- **Documentation**: Check [README.md](./README.md) and [DEPLOYMENT.md](./DEPLOYMENT.md)

## 🙏 Thank You!

Your contributions make ImageTools Pro better for everyone. We appreciate your time and effort!

---

**Happy Contributing! 🎉**
