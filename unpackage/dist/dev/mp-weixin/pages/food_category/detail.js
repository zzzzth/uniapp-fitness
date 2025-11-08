"use strict";
const common_vendor = require("../../common/vendor.js");
const js_sdk_validator_food_category = require("../../js_sdk/validator/food_category.js");
common_vendor.tr.database();
const _sfc_main = {
  data() {
    return {
      queryWhere: "",
      collectionList: "food_category",
      loadMore: {
        contentdown: "",
        contentrefresh: "",
        contentnomore: ""
      },
      options: {
        // 将scheme enum 属性静态数据中的value转成text
        ...js_sdk_validator_food_category.enumConverter
      }
    };
  },
  onLoad(e) {
    this._id = e.id;
  },
  onReady() {
    if (this._id) {
      this.queryWhere = '_id=="' + this._id + '"';
    }
  },
  methods: {
    handleUpdate() {
      common_vendor.index.navigateTo({
        url: "./edit?id=" + this._id,
        events: {
          // 监听修改页面成功修改数据后, 刷新当前页面数据
          refreshData: () => {
            this.$refs.udb.loadData({
              clear: true
            });
          }
        }
      });
    },
    handleDelete() {
      this.$refs.udb.remove(this._id, {
        success: (res) => {
          common_vendor.index.navigateTo({
            url: "./list"
          });
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  const _easycom_uni_file_picker2 = common_vendor.resolveComponent("uni-file-picker");
  const _easycom_uni_link2 = common_vendor.resolveComponent("uni-link");
  const _easycom_unicloud_db2 = common_vendor.resolveComponent("unicloud-db");
  (_easycom_uni_load_more2 + _easycom_uni_file_picker2 + _easycom_uni_link2 + _easycom_unicloud_db2)();
}
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
const _easycom_uni_file_picker = () => "../../uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.js";
const _easycom_uni_link = () => "../../uni_modules/uni-link/components/uni-link/uni-link.js";
const _easycom_unicloud_db = () => "../../node-modules/@dcloudio/uni-components/lib/unicloud-db/unicloud-db.js";
if (!Math) {
  (_easycom_uni_load_more + _easycom_uni_file_picker + _easycom_uni_link + _easycom_unicloud_db)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.w(({
      data,
      loading,
      error,
      options
    }, s0, i0) => {
      return common_vendor.e({
        a: error
      }, error ? {
        b: common_vendor.t(error.message)
      } : loading ? {
        d: "5756c781-1-" + i0 + ",5756c781-0",
        e: common_vendor.p({
          contentText: $data.loadMore,
          status: "loading"
        })
      } : data ? common_vendor.e({
        g: common_vendor.t(data.name),
        h: data.avater && data.avater.fileType == "image"
      }, data.avater && data.avater.fileType == "image" ? {
        i: "5756c781-2-" + i0 + ",5756c781-0",
        j: common_vendor.p({
          value: data.avater,
          ["file-mediatype"]: data.avater && data.avater.fileType,
          ["return-type"]: "object",
          readonly: true
        })
      } : data.avater ? {
        l: "5756c781-3-" + i0 + ",5756c781-0",
        m: common_vendor.p({
          href: data.avater.url,
          text: data.avater.url
        })
      } : {}, {
        k: data.avater,
        n: common_vendor.t(options.age_valuetotext[data.age])
      }) : {}, {
        c: loading,
        f: data,
        o: i0,
        p: s0
      });
    }, {
      name: "d",
      path: "a",
      vueId: "5756c781-0"
    }),
    b: common_vendor.sr("udb", "5756c781-0"),
    c: common_vendor.p({
      options: $data.options,
      collection: $data.collectionList,
      field: "name,avater,age",
      where: $data.queryWhere,
      getone: true,
      manual: true
    }),
    d: common_vendor.o((...args) => $options.handleUpdate && $options.handleUpdate(...args)),
    e: common_vendor.o((...args) => $options.handleDelete && $options.handleDelete(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/food_category/detail.js.map
