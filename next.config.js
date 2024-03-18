/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals.push({
      "utf-8-validate": "commonjs utf-8-validate",
      bufferutil: "commonjs bufferutil"
    });

  
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'media/[name].[hash:8].[ext]',
           
          },
        },
      ],
    });
    
    return config;
  },
  images: {
    domains: [
      "uploadthing.com",
      "utfs.io",
      'i.ytimg.com',
       'yt3.ggpht.com', 
       'th.bing.com', 
       'img.freepik.com',
      'play-lh.googleusercontent.com',
      "oaidalleapiprodscus.blob.core.windows.net",
      "oaidalleapiprodscus.blob.core.windows.net"
    ]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
   swcMinify: false, 
}

module.exports = nextConfig;
