"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_common_nav_bar2 = common_vendor.resolveComponent("common-nav-bar");
  _easycom_common_nav_bar2();
}
const _easycom_common_nav_bar = () => "../../components/common-nav-bar/common-nav-bar.js";
if (!Math) {
  _easycom_common_nav_bar();
}
const _sfc_main = {
  __name: "me",
  setup(__props) {
    const navigateTo = (url) => {
      common_vendor.index.showToast({
        title: "功能开发中",
        icon: "none"
      });
    };
    common_vendor.onMounted(() => {
    });
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$2,
        b: common_assets._imports_1,
        c: common_vendor.o(($event) => navigateTo()),
        d: common_vendor.o(($event) => navigateTo()),
        e: common_vendor.o(($event) => navigateTo()),
        f: common_vendor.o(($event) => navigateTo())
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-19c123a7"]]);
tt.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-toutiao/pages/me/me.js.map
