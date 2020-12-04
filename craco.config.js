const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {              
            '@primary-color': '#2D5362',
            '@layout-header-background': '#5899E2',  
            '@layout-sider-background': '#fff',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};