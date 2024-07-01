/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com', 'static.xx.fbcdn.net'],
  },
  webpack(config, options) {
    const { isServer } = options;
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      exclude: config.exclude,
      use: [
        {
          // Import file-loader thay vì sử dụng require
          loader: 'file-loader',
          options: {
            name: '[name]-[hash].[ext]',
            publicPath: `${config.assetPrefix}/_next/static/audio/`,
            outputPath: `${isServer ? '../' : ''}static/audio/`,
            esModule: config.esModule || false,
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;