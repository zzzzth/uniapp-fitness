"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "feature-card",
  props: {
    title: String,
    desc: String,
    moreText: String,
    items: Array
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(__props.title),
        b: common_vendor.t(__props.desc),
        c: common_vendor.t(__props.moreText),
        d: common_vendor.f(__props.items, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.img),
            b: common_vendor.t(item.text)
          };
        })
      };
    };
  }
};
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/feature-card/feature-card.js.map
