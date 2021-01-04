module.exports = {
  extends: "stylelint-config-standard",
  plugins: ["stylelint-order"],
  rules: {
    indentation: 2,
    "rule-empty-line-before": "never",
    "function-comma-space-after": "never",
    "number-leading-zero":"never",
    "order/properties-order": [
      
      //层级 z-index
      // 位置相关 position float
      //模型 display  尺寸
      //内容相关  text-align font
      //背景
      // border
      //css3

      "z-index",
      "overflow",

      "position",
      "top",
      "right",
      "bottom",
      "left",

      "float",

      "display",
      "width",
      "height",
      "margin",
      "padding",

      "color",
      "background",
      "border",

      "transform",
      "transition",
      "animation",
    ],
  },
};