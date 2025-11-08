const SYSTEM_INFO = uni.getSystemInfoSync();
const menuButtonInfo =
  typeof uni.getMenuButtonBoundingClientRect === "function"
    ? uni.getMenuButtonBoundingClientRect()
    : null;

// 获取状态栏高度，H5端返回0
export const getStatusBarHeight = () => {
  // #ifdef H5
  return 0;
  // #endif
  // #ifndef H5
  return SYSTEM_INFO.statusBarHeight || 0;
  // #endif
};

// 导航栏高度
export const getNavBarHeight = () => {
  // #ifdef H5
  return 44; // H5端固定导航栏高度
  // #endif
  // #ifndef H5
  if (menuButtonInfo) {
    return (
      (menuButtonInfo.top - SYSTEM_INFO.statusBarHeight) * 2 +
      menuButtonInfo.height
    );
  } else {
    return 60; // 默认导航栏高度
  }
  // #endif
};

export const getLeftIcon = () => {
  // #ifdef MP-TOUTIAO
  if (tt.getCustomButtonBoundingClientRect) {
    const {
      leftIcon: { right },
    } = tt.getCustomButtonBoundingClientRect();
    return right + 5;
  } else {
    return 0;
  }
  // #endif
};
