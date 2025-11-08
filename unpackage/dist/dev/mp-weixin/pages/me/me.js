"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_common_nav_bar2 = common_vendor.resolveComponent("common-nav-bar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_easycom_common_nav_bar2 + _easycom_uni_icons2)();
}
const _easycom_common_nav_bar = () => "../../components/common-nav-bar/common-nav-bar.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_common_nav_bar + _easycom_uni_icons)();
}
const _sfc_main = {
  __name: "me",
  setup(__props) {
    const db = common_vendor.tr.database();
    const userInfo = common_vendor.ref({
      nickname: "健身达人",
      avatar: ""
    });
    const currentWeight = common_vendor.ref(60);
    const targetWeight = common_vendor.ref(55);
    const height = common_vendor.ref(170);
    const bmi = common_vendor.computed(() => {
      if (height.value && currentWeight.value) {
        const heightInMeters = height.value / 100;
        return currentWeight.value / (heightInMeters * heightInMeters);
      }
      return 0;
    });
    const featureGrid = [
      { id: 1, name: "基本信息", icon: "👤", bgColor: "#E5F3FF" },
      { id: 2, name: "收藏的食物", icon: "⭐", bgColor: "#E5FFE5" },
      { id: 3, name: "上传的食物", icon: "📤", bgColor: "#FFF5E5" },
      { id: 4, name: "我的故事", icon: "📖", bgColor: "#F0E5FF" }
    ];
    const getUserInfo = async () => {
      try {
        const res = await db.collection("user_profile").get();
        if (res.result.errCode === 0 && res.result.data.length > 0) {
          const profile = res.result.data[0];
          userInfo.value = profile;
          currentWeight.value = profile.current_weight || 60;
          targetWeight.value = profile.target_weight || 55;
          height.value = profile.height || 170;
        }
      } catch (error) {
        common_vendor.index.__f__("error", "at pages/me/me.vue:151", "获取用户信息失败", error);
      }
    };
    const getLatestWeight = async () => {
      try {
        const res = await db.collection("weight_record").orderBy("date desc").limit(1).get();
        if (res.result.errCode === 0 && res.result.data.length > 0) {
          currentWeight.value = res.result.data[0].weight;
        }
      } catch (error) {
        common_vendor.index.__f__("error", "at pages/me/me.vue:167", "获取体重失败", error);
      }
    };
    const handleFeatureClick = (id) => {
      switch (id) {
        case 1:
          common_vendor.index.showToast({
            title: "基本信息功能开发中",
            icon: "none"
          });
          break;
        case 2:
          common_vendor.index.showToast({
            title: "收藏功能开发中",
            icon: "none"
          });
          break;
        case 3:
          common_vendor.index.showToast({
            title: "上传功能开发中",
            icon: "none"
          });
          break;
        case 4:
          common_vendor.index.showToast({
            title: "故事功能开发中",
            icon: "none"
          });
          break;
      }
    };
    const goToHealthAssessment = () => {
      common_vendor.index.showToast({
        title: "健康测评功能开发中",
        icon: "none"
      });
    };
    const goToHealthPlan = () => {
      common_vendor.index.showToast({
        title: "健康方案功能开发中",
        icon: "none"
      });
    };
    const goToFeedback = () => {
      common_vendor.index.showToast({
        title: "反馈功能开发中",
        icon: "none"
      });
    };
    const goToSettings = () => {
      common_vendor.index.showToast({
        title: "设置功能开发中",
        icon: "none"
      });
    };
    const switchAccount = () => {
      common_vendor.index.showModal({
        title: "切换账号",
        content: "确定要切换账号吗？",
        success: (res) => {
          if (res.confirm) {
            common_vendor.index.showToast({
              title: "切换账号功能开发中",
              icon: "none"
            });
          }
        }
      });
    };
    common_vendor.onMounted(() => {
      getUserInfo();
      getLatestWeight();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(userInfo.value.nickname || "用户"),
        b: common_vendor.t(currentWeight.value),
        c: common_vendor.t(targetWeight.value || "--"),
        d: common_vendor.t(bmi.value.toFixed(1)),
        e: common_vendor.f(featureGrid, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.icon),
            b: item.bgColor,
            c: common_vendor.t(item.name),
            d: item.id,
            e: common_vendor.o(($event) => handleFeatureClick(item.id), item.id)
          };
        }),
        f: common_vendor.p({
          type: "right",
          size: "16",
          color: "#999"
        }),
        g: common_vendor.o(goToHealthAssessment),
        h: common_vendor.p({
          type: "right",
          size: "16",
          color: "#999"
        }),
        i: common_vendor.o(goToHealthPlan),
        j: common_vendor.p({
          type: "right",
          size: "16",
          color: "#999"
        }),
        k: common_vendor.o(goToFeedback),
        l: common_vendor.p({
          type: "right",
          size: "16",
          color: "#999"
        }),
        m: common_vendor.o(goToSettings),
        n: common_vendor.p({
          type: "right",
          size: "16",
          color: "#999"
        }),
        o: common_vendor.o(switchAccount)
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/me/me.js.map
