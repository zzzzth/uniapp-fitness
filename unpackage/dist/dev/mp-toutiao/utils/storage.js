"use strict";
const common_vendor = require("../common/vendor.js");
class StorageManager {
  constructor() {
    this.prefix = "fitness_app_";
  }
  // 设置数据
  set(key, value) {
    try {
      const data = JSON.stringify(value);
      common_vendor.index.setStorageSync(this.prefix + key, data);
      return true;
    } catch (error) {
      common_vendor.index.__f__("error", "at utils/storage.js:14", "存储数据失败:", error);
      return false;
    }
  }
  // 获取数据
  get(key, defaultValue = null) {
    try {
      const data = common_vendor.index.getStorageSync(this.prefix + key);
      return data ? JSON.parse(data) : defaultValue;
    } catch (error) {
      common_vendor.index.__f__("error", "at utils/storage.js:25", "获取数据失败:", error);
      return defaultValue;
    }
  }
  // 删除数据
  remove(key) {
    try {
      common_vendor.index.removeStorageSync(this.prefix + key);
      return true;
    } catch (error) {
      common_vendor.index.__f__("error", "at utils/storage.js:36", "删除数据失败:", error);
      return false;
    }
  }
  // 清空所有数据
  clear() {
    try {
      common_vendor.index.clearStorageSync();
      return true;
    } catch (error) {
      common_vendor.index.__f__("error", "at utils/storage.js:47", "清空数据失败:", error);
      return false;
    }
  }
}
class FitnessDataManager {
  constructor() {
    this.storage = new StorageManager();
  }
  // 保存运动记录
  saveWorkout(workout) {
    const workouts = this.getWorkouts();
    workouts.push({
      id: Date.now(),
      date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      time: (/* @__PURE__ */ new Date()).toLocaleTimeString("zh-CN", {
        hour: "2-digit",
        minute: "2-digit"
      }),
      ...workout
    });
    this.storage.set("workouts", workouts);
    return true;
  }
  // 获取运动记录
  getWorkouts(date = null) {
    const workouts = this.storage.get("workouts", []);
    if (date) {
      return workouts.filter((workout) => workout.date === date);
    }
    return workouts;
  }
  // 保存饮食记录
  saveMeal(meal) {
    const meals = this.getMeals();
    meals.push({
      id: Date.now(),
      date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      time: (/* @__PURE__ */ new Date()).toLocaleTimeString("zh-CN", {
        hour: "2-digit",
        minute: "2-digit"
      }),
      ...meal
    });
    this.storage.set("meals", meals);
    return true;
  }
  // 获取饮食记录
  getMeals(date = null) {
    const meals = this.storage.get("meals", []);
    if (date) {
      return meals.filter((meal) => meal.date === date);
    }
    return meals;
  }
  // 保存用户目标
  saveGoals(goals) {
    this.storage.set("goals", goals);
    return true;
  }
  // 获取用户目标
  getGoals() {
    return this.storage.get("goals", {
      dailyExerciseTime: 30,
      dailyCalories: 300,
      dailySteps: 8e3,
      weeklyWorkouts: 5
    });
  }
  // 获取今日统计数据
  getTodayStats() {
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    const workouts = this.getWorkouts(today);
    const meals = this.getMeals(today);
    const totalExerciseTime = workouts.reduce(
      (sum, workout) => sum + (workout.duration || 0),
      0
    );
    const totalCaloriesBurned = workouts.reduce(
      (sum, workout) => sum + (workout.calories || 0),
      0
    );
    const totalCaloriesConsumed = meals.reduce(
      (sum, meal) => sum + (meal.calories || 0),
      0
    );
    return {
      exerciseTime: totalExerciseTime,
      caloriesBurned: totalCaloriesBurned,
      caloriesConsumed: totalCaloriesConsumed,
      workoutCount: workouts.length,
      mealCount: meals.length
    };
  }
  // 获取本周统计数据
  getWeekStats() {
    const today = /* @__PURE__ */ new Date();
    const weekStart = new Date(today.setDate(today.getDate() - today.getDay()));
    const weekEnd = new Date(today.setDate(today.getDate() + 6));
    const workouts = this.getWorkouts();
    const meals = this.getMeals();
    const weekWorkouts = workouts.filter((workout) => {
      const workoutDate = new Date(workout.date);
      return workoutDate >= weekStart && workoutDate <= weekEnd;
    });
    const weekMeals = meals.filter((meal) => {
      const mealDate = new Date(meal.date);
      return mealDate >= weekStart && mealDate <= weekEnd;
    });
    const totalExerciseTime = weekWorkouts.reduce(
      (sum, workout) => sum + (workout.duration || 0),
      0
    );
    const totalCaloriesBurned = weekWorkouts.reduce(
      (sum, workout) => sum + (workout.calories || 0),
      0
    );
    const totalCaloriesConsumed = weekMeals.reduce(
      (sum, meal) => sum + (meal.calories || 0),
      0
    );
    return {
      workoutDays: new Set(weekWorkouts.map((w) => w.date)).size,
      totalExerciseTime,
      totalCaloriesBurned,
      totalCaloriesConsumed,
      avgCaloriesPerDay: Math.round(totalCaloriesConsumed / 7),
      workoutCount: weekWorkouts.length
    };
  }
}
const fitnessData = new FitnessDataManager();
exports.fitnessData = fitnessData;
//# sourceMappingURL=../../.sourcemap/mp-toutiao/utils/storage.js.map
