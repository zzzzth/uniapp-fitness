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
  __name: "diet",
  setup(__props) {
    const todayCalories = common_vendor.ref(1200);
    const calorieGoal = common_vendor.ref(2e3);
    const caloriesProgress = common_vendor.ref(60);
    const todayMeals = common_vendor.ref([
      { name: "燕麦粥", calories: 300, time: "08:30" },
      { name: "苹果", calories: 80, time: "10:00" },
      { name: "鸡胸肉沙拉", calories: 450, time: "12:30" },
      { name: "酸奶", calories: 120, time: "15:00" }
    ]);
    const recordMeal = (mealType) => {
      common_vendor.index.showToast({
        title: `记录${mealType}`,
        icon: "success"
      });
    };
    common_vendor.onMounted(() => {
    });
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.t(todayCalories.value),
        c: caloriesProgress.value + "%",
        d: common_vendor.t(calorieGoal.value),
        e: common_vendor.o(($event) => recordMeal("breakfast")),
        f: common_vendor.o(($event) => recordMeal("lunch")),
        g: common_vendor.o(($event) => recordMeal("dinner")),
        h: common_vendor.o(($event) => recordMeal("snack")),
        i: common_vendor.f(todayMeals.value, (meal, index, i0) => {
          return {
            a: common_vendor.t(meal.name),
            b: common_vendor.t(meal.calories),
            c: common_vendor.t(meal.time),
            d: index
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-97323f43"]]);
tt.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-toutiao/pages/diet/diet.js.map
