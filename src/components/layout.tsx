export const Layout = (props: { children: any; title: string }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{props.title} - ImageTools</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        <style>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background: #000;
            color: #fff;
          }
          .bg-yellow {
            background-color: #FFD700;
          }
          .text-yellow {
            color: #FFD700;
          }
          .border-yellow {
            border-color: #FFD700;
          }
          .hover-yellow:hover {
            background-color: #FFD700;
            color: #000;
          }
          .tool-card {
            background: #1a1a1a;
            border: 2px solid #333;
            transition: all 0.3s ease;
          }
          .tool-card:hover {
            border-color: #FFD700;
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(255, 215, 0, 0.3);
          }
          .upload-area {
            border: 3px dashed #FFD700;
            background: #1a1a1a;
            transition: all 0.3s ease;
          }
          .upload-area:hover {
            background: #222;
            border-color: #FFF;
          }
          .btn-primary {
            background: #FFD700;
            color: #000;
            font-weight: 600;
            transition: all 0.3s ease;
          }
          .btn-primary:hover {
            background: #FFF;
            transform: scale(1.05);
          }
          .btn-secondary {
            background: #333;
            color: #FFD700;
            border: 2px solid #FFD700;
            transition: all 0.3s ease;
          }
          .btn-secondary:hover {
            background: #FFD700;
            color: #000;
          }
          #canvas-preview {
            max-width: 100%;
            border: 2px solid #FFD700;
          }
        `}</style>
      </head>
      <body>
        <nav class="bg-black border-b-2 border-yellow py-4">
          <div class="container mx-auto px-4">
            <div class="flex items-center justify-between">
              <a href="/" class="flex items-center space-x-2">
                <i class="fas fa-image text-yellow text-3xl"></i>
                <span class="text-2xl font-bold text-yellow">ImageTools</span>
              </a>
              <div class="flex items-center space-x-4">
                <a href="/" class="text-white hover:text-yellow transition">
                  <i class="fas fa-home mr-2"></i>Home
                </a>
                <a href="#tools" class="text-white hover:text-yellow transition">
                  <i class="fas fa-tools mr-2"></i>Tools
                </a>
              </div>
            </div>
          </div>
        </nav>
        
        <main>
          {props.children}
        </main>
        
        <footer class="bg-black border-t-2 border-yellow py-8 mt-20">
          <div class="container mx-auto px-4 text-center">
            <p class="text-gray-400">
              <i class="fas fa-heart text-yellow"></i> Built with Hono & Cloudflare
            </p>
            <p class="text-sm text-gray-500 mt-2">Free Image Tools - Process images directly in your browser</p>
          </div>
        </footer>
        
        <script src="/static/app.js"></script>
      </body>
    </html>
  )
}
