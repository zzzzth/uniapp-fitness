"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "preview",
  setup(__props) {
    const detail = common_vendor.ref();
    const db = common_vendor.tr.database();
    const getDetail = async (id) => {
      let res = await db.collection("food_category").doc(id).get({
        getOne: true
        //getOne: true 的作用是 获取一条数据
      });
      detail.value = res.result.data;
    };
    common_vendor.onLoad((e) => {
      let { id } = e;
      getDetail(id);
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: detail.value
      }, detail.value ? {
        b: common_vendor.t(detail.value.name),
        c: common_vendor.t(detail.value.age),
        d: common_vendor.t(detail.value.ip),
        e: common_vendor.t(common_vendor.unref(common_vendor.dayjs)(detail.value.createTime).format("YYYY-MM-DD HH:mm:ss"))
      } : {});
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/diet/preview.js.map
