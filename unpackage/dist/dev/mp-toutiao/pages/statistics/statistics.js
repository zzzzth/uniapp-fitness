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
  __name: "statistics",
  setup(__props) {
    const weekStats = common_vendor.ref({
      workoutDays: 5,
      totalCalories: 2800,
      avgCalories: 1850,
      weight: "65.2kg"
    });
    common_vendor.onMounted(() => {
    });
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$1,
        b: common_vendor.t(weekStats.value.workoutDays),
        c: common_vendor.t(weekStats.value.totalCalories),
        d: common_vendor.t(weekStats.value.avgCalories),
        e: common_vendor.t(weekStats.value.weight)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-fc23ec97"]]);
tt.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-toutiao/pages/statistics/statistics.js.map
