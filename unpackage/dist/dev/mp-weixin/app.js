"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/diet/diet.js";
  "./pages/me/me.js";
  "./pages/food_category/list.js";
  "./pages/food_category/add.js";
  "./pages/food_category/detail.js";
  "./pages/food_category/edit.js";
  "./pages/dailyQuestion/dailyQuestion.js";
  "./pages/topicPk/topicPk.js";
  "./pages/cookbookRecom/cookbookRecom.js";
  "./common/commonHeader/commonHeader.js";
  "./pages/diet/preview.js";
}
const _sfc_main = {
  onLaunch: function() {
    common_vendor.index.__f__("log", "at App.vue:4", "App Launch");
  },
  onShow: function() {
    common_vendor.index.__f__("log", "at App.vue:7", "App Show");
  },
  onHide: function() {
    common_vendor.index.__f__("log", "at App.vue:10", "App Hide");
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
//# sourceMappingURL=../.sourcemap/mp-weixin/app.js.map
