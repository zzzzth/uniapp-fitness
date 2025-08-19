"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const statusBarHeight = common_vendor.ref(0);
    const navBarHeight = common_vendor.ref(0);
    common_vendor.onMounted(async () => {
      const windowInfo = await common_vendor.wx$1.getWindowInfo();
      const menuButton = common_vendor.wx$1.getMenuButtonBoundingClientRect();
      statusBarHeight.value = windowInfo.statusBarHeight;
      navBarHeight.value = menuButton.top + menuButton.height + (menuButton.top - windowInfo.statusBarHeight);
      common_vendor.index.__f__("log", "at pages/index/index.vue:32", "状态栏高度:", statusBarHeight.value);
      common_vendor.index.__f__("log", "at pages/index/index.vue:33", "自定义导航栏高度:", navBarHeight.value);
      common_vendor.index.__f__("log", "at pages/index/index.vue:34", "胶囊位置:", menuButton);
    });
    return (_ctx, _cache) => {
      return {
        a: statusBarHeight.value + "px",
        b: navBarHeight.value + "px"
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
