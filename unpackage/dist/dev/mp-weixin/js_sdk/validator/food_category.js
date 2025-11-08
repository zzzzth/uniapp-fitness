"use strict";
const validator = {
  "name": {
    "rules": [
      {
        "required": true,
        "errorMessage": "{label}必填"
      },
      {
        "format": "string"
      },
      {
        "minLength": 2,
        "maxLength": 8,
        "errorMessage": "{label}不能小于{minLength}个字符"
      }
    ],
    "label": "名称",
    "title": "名称"
  },
  "avater": {
    "rules": [
      {
        "format": "file"
      }
    ]
  },
  "age": {
    "rules": [
      {
        "format": "int64"
      },
      {
        "range": [
          {
            "text": "未知",
            "value": 0
          },
          {
            "text": "男",
            "value": 1
          },
          {
            "text": "女",
            "value": 2
          }
        ]
      }
    ],
    "title": "性别",
    "label": "性别"
  }
};
const enumConverter = {
  "age_valuetotext": [
    {
      "text": "未知",
      "value": 0
    },
    {
      "text": "男",
      "value": 1
    },
    {
      "text": "女",
      "value": 2
    }
  ]
};
exports.enumConverter = enumConverter;
exports.validator = validator;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/js_sdk/validator/food_category.js.map
