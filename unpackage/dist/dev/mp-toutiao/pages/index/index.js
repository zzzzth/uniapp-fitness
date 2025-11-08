"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const utils_storage = require("../../utils/storage.js");
if (!Array) {
  const _easycom_common_nav_bar2 = common_vendor.resolveComponent("common-nav-bar");
  _easycom_common_nav_bar2();
}
const _easycom_common_nav_bar = () => "../../components/common-nav-bar/common-nav-bar.js";
if (!Math) {
  _easycom_common_nav_bar();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const currentDate = common_vendor.ref(/* @__PURE__ */ new Date());
    const currentDay = common_vendor.computed(() => currentDate.value.getDate());
    const currentYearMonth = common_vendor.computed(() => {
      const year = currentDate.value.getFullYear();
      const month = currentDate.value.getMonth() + 1;
      return `${year}年${month}月`;
    });
    const currentWeekday = common_vendor.computed(() => {
      const weekdays = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
      return weekdays[currentDate.value.getDay()];
    });
    const goalProgress = common_vendor.ref(3);
    const todayStats = common_vendor.ref({
      exerciseTime: 45,
      caloriesBurned: 320,
      caloriesConsumed: 1850,
      steps: 8500
    });
    const startWorkout = (type) => {
      const workoutTypes = {
        running: "跑步",
        gym: "健身",
        yoga: "瑜伽",
        cycling: "骑行"
      };
      common_vendor.index.showModal({
        title: "开始运动",
        content: `确定开始${workoutTypes[type]}吗？`,
        success: (res) => {
          if (res.confirm) {
            common_vendor.index.showToast({
              title: "运动开始！",
              icon: "success"
            });
          }
        }
      });
    };
    const recordMeal = (mealType) => {
      const mealTypes = {
        breakfast: "早餐",
        lunch: "午餐",
        dinner: "晚餐",
        snack: "加餐"
      };
      common_vendor.index.showToast({
        title: `记录${mealTypes[mealType]}`,
        icon: "success"
      });
    };
    const navigateTo = (url) => {
      common_vendor.index.navigateTo({ url });
    };
    common_vendor.onMounted(() => {
      loadTodayData();
    });
    const loadTodayData = () => {
      const stats = utils_storage.fitnessData.getTodayStats();
      todayStats.value = {
        ...todayStats.value,
        ...stats
      };
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.t(currentDay.value),
        c: common_vendor.t(currentYearMonth.value),
        d: common_vendor.t(currentWeekday.value),
        e: common_vendor.f(5, (i, k0, i0) => {
          return {
            a: i,
            b: i <= goalProgress.value ? 1 : ""
          };
        }),
        f: goalProgress.value * 20 + "%",
        g: common_vendor.t(goalProgress.value * 20),
        h: common_vendor.o(($event) => startWorkout("running")),
        i: common_vendor.o(($event) => startWorkout("gym")),
        j: common_vendor.o(($event) => startWorkout("yoga")),
        k: common_vendor.o(($event) => startWorkout("cycling")),
        l: common_vendor.o(($event) => recordMeal("breakfast")),
        m: common_vendor.o(($event) => recordMeal("lunch")),
        n: common_vendor.o(($event) => recordMeal("dinner")),
        o: common_vendor.o(($event) => recordMeal("snack")),
        p: common_vendor.o(($event) => navigateTo("/pages/statistics/statistics")),
        q: common_vendor.t(todayStats.value.exerciseTime),
        r: common_vendor.t(todayStats.value.caloriesBurned),
        s: common_vendor.t(todayStats.value.caloriesConsumed),
        t: common_vendor.t(todayStats.value.steps)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
tt.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-toutiao/pages/index/index.js.map
