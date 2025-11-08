const path = require("path");

const resolve = (p) => {
  return path.resolve(__dirname, p);
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  // 注意此处，一定要 `path.resolve` 一下, 传入绝对路径
  // 你要有其他目录，比如 components，也必须在这里，添加一下
  content: [
    "./index.html",
    "./pages/**/*.{html,js,ts,jsx,tsx,vue}",
    "./components/**/*.{html,js,ts,jsx,tsx,vue}",
    "./common/**/*.{html,js,ts,jsx,tsx,vue}",
    "./App.vue",
  ].map(resolve),
  theme: {
    extend: {
      // 为H5端添加一些自定义样式
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
      }
    },
  },
  plugins: [],
  corePlugins: {
    // 跨多端可以 h5 开启，小程序关闭
    preflight: false,
  },
  // 为不同平台提供不同的配置
  ...(process.env.UNI_PLATFORM === 'h5' && {
    corePlugins: {
      preflight: true, // H5端开启preflight
    }
  })
};
