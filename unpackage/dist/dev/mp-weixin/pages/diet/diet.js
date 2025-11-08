"use strict";
const common_vendor = require("../../common/vendor.js");
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
    const db = common_vendor.tr.database();
    const todayDate = common_vendor.ref(common_vendor.dayjs().format("YYYY-MM-DD"));
    const initialWeight = common_vendor.ref(60);
    const targetWeight = common_vendor.ref(55);
    const currentWeight = common_vendor.ref(60);
    const todayCalorieIntake = common_vendor.ref(0);
    const todayCalorieBurned = common_vendor.ref(0);
    const calorieTarget = common_vendor.ref(1500);
    const todayFoodRecords = common_vendor.ref([]);
    const weightRecords = common_vendor.ref([]);
    const quickRecordTypes = [
      { type: 1, name: "早餐", icon: "🌅", bgColor: "#FFE5E5" },
      { type: 2, name: "午餐", icon: "🍔", bgColor: "#E5F3FF" },
      { type: 3, name: "晚餐", icon: "🍜", bgColor: "#FFF5E5" },
      { type: 4, name: "加餐", icon: "🍎", bgColor: "#E5FFE5" },
      { type: 5, name: "运动", icon: "🏃", bgColor: "#F0E5FF" }
    ];
    const mealTypes = [
      { type: 1, name: "早餐", icon: "🌅" },
      { type: 2, name: "午餐", icon: "☀️" },
      { type: 3, name: "晚餐", icon: "🌙" },
      { type: 4, name: "加餐", icon: "🍎" }
    ];
    const weightChange = common_vendor.computed(() => {
      return currentWeight.value - initialWeight.value;
    });
    const calorieExceed = common_vendor.computed(() => {
      return todayCalorieIntake.value - calorieTarget.value;
    });
    const getMealCalorie = (mealType) => {
      const mealRecords = todayFoodRecords.value.filter((item) => item.meal_type === mealType);
      return mealRecords.reduce((sum, item) => sum + (item.calorie || 0), 0);
    };
    const getMealFoods = (mealType) => {
      return todayFoodRecords.value.filter((item) => item.meal_type === mealType);
    };
    const getTodayFoodRecords = async () => {
      try {
        const res = await db.collection("food_record").where({
          date: todayDate.value
        }).orderBy("createTime desc").get();
        if (res.result.errCode === 0) {
          todayFoodRecords.value = res.result.data;
          todayCalorieIntake.value = res.result.data.reduce((sum, item) => sum + (item.calorie || 0), 0);
        }
      } catch (error) {
        common_vendor.index.__f__("error", "at pages/diet/diet.vue:210", "获取饮食记录失败", error);
      }
    };
    const getWeightRecords = async () => {
      try {
        const res = await db.collection("weight_record").orderBy("date desc").limit(10).get();
        if (res.result.errCode === 0) {
          weightRecords.value = res.result.data;
          if (res.result.data.length > 0) {
            currentWeight.value = res.result.data[0].weight;
          }
        }
      } catch (error) {
        common_vendor.index.__f__("error", "at pages/diet/diet.vue:229", "获取体重记录失败", error);
      }
    };
    const addRecord = (type) => {
      if (type === 5) {
        common_vendor.index.showToast({
          title: "运动功能开发中",
          icon: "none"
        });
      } else {
        addFood(type);
      }
    };
    const addFood = (mealType) => {
      common_vendor.index.navigateTo({
        url: `/pages/food_category/list?mealType=${mealType}&date=${todayDate.value}`
      });
    };
    const searchFood = () => {
      common_vendor.index.navigateTo({
        url: `/pages/food_category/list?date=${todayDate.value}`
      });
    };
    const addWeight = () => {
      common_vendor.index.showModal({
        title: "记录体重",
        editable: true,
        placeholderText: "请输入体重（公斤）",
        success: async (res) => {
          if (res.confirm && res.content) {
            const weight = parseFloat(res.content);
            if (isNaN(weight) || weight <= 0) {
              common_vendor.index.showToast({
                title: "请输入有效的体重",
                icon: "none"
              });
              return;
            }
            const height = 170 / 100;
            const bmi = weight / (height * height);
            try {
              await db.collection("weight_record").add({
                weight,
                bmi,
                date: todayDate.value
              });
              common_vendor.index.showToast({
                title: "记录成功",
                icon: "success"
              });
              getWeightRecords();
            } catch (error) {
              common_vendor.index.__f__("error", "at pages/diet/diet.vue:296", "记录体重失败", error);
              common_vendor.index.showToast({
                title: "记录失败",
                icon: "none"
              });
            }
          }
        }
      });
    };
    const viewPlan = () => {
      common_vendor.index.showToast({
        title: "方案功能开发中",
        icon: "none"
      });
    };
    common_vendor.onLoad((options) => {
      if (options.mealType) {
        addFood(parseInt(options.mealType));
      }
    });
    common_vendor.onMounted(() => {
      getTodayFoodRecords();
      getWeightRecords();
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(initialWeight.value),
        b: common_vendor.t(weightChange.value >= 0 ? "+" : ""),
        c: common_vendor.t(weightChange.value.toFixed(2)),
        d: common_vendor.n(weightChange.value >= 0 ? "text-red-500" : "text-green-500"),
        e: common_vendor.o(viewPlan),
        f: common_vendor.t(targetWeight.value),
        g: common_vendor.t(Math.abs(calorieExceed.value)),
        h: common_vendor.n(calorieExceed.value >= 0 ? "text-red-500" : "text-green-500"),
        i: common_vendor.t(calorieExceed.value >= 0 ? "超出" : "剩余"),
        j: common_vendor.t(todayCalorieIntake.value),
        k: common_vendor.t(todayCalorieBurned.value),
        l: common_vendor.f(quickRecordTypes, (meal, k0, i0) => {
          return {
            a: common_vendor.t(meal.icon),
            b: meal.bgColor,
            c: common_vendor.t(meal.name),
            d: meal.type,
            e: common_vendor.o(($event) => addRecord(meal.type), meal.type)
          };
        }),
        m: common_vendor.o(addWeight),
        n: weightRecords.value.length === 0
      }, weightRecords.value.length === 0 ? {} : {
        o: common_vendor.f(weightRecords.value, (record, k0, i0) => {
          var _a;
          return {
            a: common_vendor.t(record.weight),
            b: common_vendor.t(record.date),
            c: common_vendor.t(((_a = record.bmi) == null ? void 0 : _a.toFixed(1)) || "--"),
            d: record._id
          };
        })
      }, {
        p: common_vendor.o(searchFood),
        q: common_vendor.f(mealTypes, (meal, k0, i0) => {
          return common_vendor.e({
            a: common_vendor.t(meal.icon),
            b: common_vendor.t(meal.name),
            c: common_vendor.t(getMealCalorie(meal.type)),
            d: getMealFoods(meal.type).length === 0
          }, getMealFoods(meal.type).length === 0 ? {
            e: common_vendor.o(($event) => addFood(meal.type), meal.type)
          } : {
            f: common_vendor.f(getMealFoods(meal.type), (food, k1, i1) => {
              return {
                a: common_vendor.t(food.food_name),
                b: common_vendor.t(food.quantity),
                c: common_vendor.t(food.calorie),
                d: food._id
              };
            })
          }, {
            g: meal.type
          });
        })
      });
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/diet/diet.js.map
