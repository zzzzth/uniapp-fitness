"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_common_nav_bar2 = common_vendor.resolveComponent("common-nav-bar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_feature_grid2 = common_vendor.resolveComponent("feature-grid");
  (_easycom_common_nav_bar2 + _easycom_uni_icons2 + _easycom_feature_grid2)();
}
const _easycom_common_nav_bar = () => "../../components/common-nav-bar/common-nav-bar.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_feature_grid = () => "../../components/feature-grid/feature-grid.js";
if (!Math) {
  (_easycom_common_nav_bar + _easycom_uni_icons + _easycom_feature_grid)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const dailyQuestion = common_vendor.ref("100大卡等于几个泡芙?");
    const qaList = common_vendor.ref([
      { question: "为什么减肥会脱发?", img: "" },
      { question: "弹性素食减肥效果好吗?", img: "" },
      { question: "减1kg需要消耗多少热量?", img: "" }
    ]);
    const recipeList = common_vendor.ref([
      { title: "不开火快手食谱:鲜菇鸡胸肉...", calorie: "300大卡", img: "" },
      { title: "500大卡肥牛菌菇麻辣烫", calorie: "500大卡", img: "" },
      { title: "低卡又控糖,多肉柠香菠菠苏打", calorie: "150大卡", img: "" }
    ]);
    const gridList = [
      {
        path: "/pages/cookbookRecom/cookbookRecom",
        img: "/static/images/layout/s3Grid-canteenRank.svg",
        // 推荐食谱 
        text: "推荐食谱"
      },
      {
        path: "/pages/cookbookRecom/cookbookRecom",
        img: "/static/images/layout/s3Grid-foodRank.svg",
        // 食物排行
        text: "食物排行"
      },
      {
        img: "/static/images/layout/s3Grid-redBlack.svg",
        // 红黑榜 
        text: "红黑榜"
      },
      // {
      //   img: "", // 查奶茶 - 用户自己填充图标
      //   text: "查奶茶",
      // },
      {
        path: "/pages/food_category/list",
        img: "/static/images/layout/s3Grid-menuList.svg",
        // 食物分类
        text: "食物分类"
      },
      // {
      //   img: "", // 食物估重 - 用户自己填充图标
      //   text: "食物估重",
      // },
      {
        img: "/static/images/layout/s3Grid-BMI.svg",
        // 体重测试 
        text: "体重测试"
      }
    ];
    const searchFood = () => {
      common_vendor.index.navigateTo({
        url: "/pages/food_category/list"
      });
    };
    const goToDailyQuestion = () => {
      common_vendor.index.navigateTo({
        url: "/pages/dailyQuestion/dailyQuestion"
      });
    };
    const goToTopicPk = () => {
      common_vendor.index.navigateTo({
        url: "/pages/topicPk/topicPk"
      });
    };
    const goToQADetail = (item) => {
      common_vendor.index.showToast({
        title: "问答详情开发中",
        icon: "none"
      });
    };
    const goToRecipeDetail = (item) => {
      common_vendor.index.showToast({
        title: "食谱详情开发中",
        icon: "none"
      });
    };
    common_vendor.onMounted(() => {
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "search",
          size: "18",
          color: "#999"
        }),
        b: common_vendor.p({
          type: "scan",
          size: "18",
          color: "#999"
        }),
        c: common_vendor.o(searchFood),
        d: common_vendor.p({
          list: gridList
        }),
        e: common_assets._imports_0,
        f: common_vendor.t(dailyQuestion.value),
        g: common_vendor.p({
          type: "right",
          size: "16",
          color: "#999"
        }),
        h: common_vendor.o(goToDailyQuestion),
        i: common_vendor.p({
          type: "right",
          size: "16",
          color: "#999"
        }),
        j: common_vendor.o(goToTopicPk),
        k: common_vendor.f(qaList.value, (item, index, i0) => {
          return common_vendor.e({
            a: item.img
          }, item.img ? {
            b: item.img
          } : {}, {
            c: common_vendor.t(item.question),
            d: "40df8ba5-6-" + i0,
            e: index,
            f: common_vendor.o(($event) => goToQADetail(), index)
          });
        }),
        l: common_vendor.p({
          type: "right",
          size: "14",
          color: "#999"
        }),
        m: common_vendor.f(recipeList.value, (item, index, i0) => {
          return common_vendor.e({
            a: item.img
          }, item.img ? {
            b: item.img
          } : {}, {
            c: common_vendor.t(item.title),
            d: item.calorie
          }, item.calorie ? {
            e: common_vendor.t(item.calorie)
          } : {}, {
            f: "40df8ba5-7-" + i0,
            g: index,
            h: common_vendor.o(($event) => goToRecipeDetail(), index)
          });
        }),
        n: common_vendor.p({
          type: "right",
          size: "14",
          color: "#999"
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
