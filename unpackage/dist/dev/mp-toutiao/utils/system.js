"use strict";
const common_vendor = require("../common/vendor.js");
const SYSTEM_INFO = common_vendor.index.getSystemInfoSync();
const menuButtonInfo = typeof common_vendor.index.getMenuButtonBoundingClientRect === "function" ? common_vendor.index.getMenuButtonBoundingClientRect() : null;
const getStatusBarHeight = () => SYSTEM_INFO.statusBarHeight || 0;
const getNavBarHeight = () => {
  if (menuButtonInfo) {
    return (menuButtonInfo.top - SYSTEM_INFO.statusBarHeight) * 2 + menuButtonInfo.height;
  } else {
    return 60;
  }
};
const getLeftIcon = () => {
  if (tt.getCustomButtonBoundingClientRect) {
    const { leftIcon: { right } } = tt.getCustomButtonBoundingClientRect();
    return right + 5;
  } else {
    return 0;
  }
};
exports.getLeftIcon = getLeftIcon;
exports.getNavBarHeight = getNavBarHeight;
exports.getStatusBarHeight = getStatusBarHeight;
//# sourceMappingURL=../../.sourcemap/mp-toutiao/utils/system.js.map
