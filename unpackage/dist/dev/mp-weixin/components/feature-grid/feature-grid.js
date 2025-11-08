"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "feature-grid",
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const toPage = (url) => {
      if (url)
        common_vendor.index.navigateTo({
          url
        });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.list, (item, index, i0) => {
          return {
            a: item.img,
            b: common_vendor.t(item.text),
            c: index,
            d: common_vendor.o(($event) => toPage(item.path), index)
          };
        })
      };
    };
  }
};
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/feature-grid/feature-grid.js.map
