// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
const CracoLessPlugin = require('craco-less')

const resolve = (configUrl : string) => path.resolve(__dirname , configUrl) 

module.exports = {
  plugins : [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // modifyVars: { '@primary-color': '#1DA57A' }, // 配置全局 less变量
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack : {
    alias : {
      "@" : resolve('src')
    }
  }
}
export { }
