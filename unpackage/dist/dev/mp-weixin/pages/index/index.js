"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const SYSTEM_INFO = common_vendor.index.getSystemInfoSync();
    const statusBarHeight = common_vendor.ref(SYSTEM_INFO.statusBarHeight);
    common_vendor.index.__f__("log", "at pages/index/index.vue:19", statusBarHeight.value);
    common_vendor.index.getMenuButtonBoundingClientRect();
    return (_ctx, _cache) => {
      return {
        a: statusBarHeight.value + 40 + "px",
        b: statusBarHeight.value + "px"
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
