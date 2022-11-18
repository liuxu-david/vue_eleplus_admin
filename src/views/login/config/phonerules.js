export const phoneRules = {
  telephone: [
    {
      required: true,
      message: "请填写手机号",
      trigger: "blur",
    },
    {
      min: 11,
      max: 11,
      message: "请填写正确的中国大陆手机号",
      trigger: "blur",
    },
  ],
  vcode: [
    {
      required: true,
      message: "填写验证码",
      trigger: "blur",
    },
    { min: 6, max: 6, message: "验证码格式不对", trigger: "blur" },
  ],
};
