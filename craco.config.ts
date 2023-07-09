const path = require('path')
const CracoLessPlugin = require('craco-less')
import { CracoWebpackConfig } from './src/index.d'
const resolve = (configUrl: string) => path.resolve(__dirname, configUrl)

module.exports = {
  typescript: {
    enableTypeChecking: true /* (default value) */,
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#ff385c',
              '@second-color': '#00848A;'
            },
            additionalData: `@import "@/assets/styles/variables.less";`,
            javascriptEnabled: true,
          },
        },
      },
    },
  ],

  devServer: {
    host: '0.0.0.0',
    port: 8080,
    proxy: {
      '/api': {
        target: "http://codercba.com:1888/airbnb/api",
        pathRewrite: { '^/api': '' },
      },
    }
  },
  style: {
    less: {
      loaderOptions: {
        additionalData: `@import "@/assets/styles/variables.less";`
      },
    },
  },
  webpack: {
    alias: {
      "@": resolve('src')
    },
    configure: {
      module: {
        rules: [
          {
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: [{ loader: '@svgr/webpack', options: { icon: true } }],
          },
          // {
          //   test: /\.(jpg|png|jpeg|gif)$/i,
          //   use: [{ loader: 'url-loader', options: { limit: false } }],
          // }
        ]
      }
    } as CracoWebpackConfig
  }
}
