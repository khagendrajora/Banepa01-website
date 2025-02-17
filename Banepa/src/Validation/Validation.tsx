import * as yup from "yup";

export const contact = yup.object({
  name: yup.string().required("नाम आवश्यक छ"),
  email: yup.string().required("इमेल आवश्यक छ"),
  message: yup.string().required("सन्देश आवश्यक छ"),
});

export const adminLogin = yup.object({
  email: yup.string().required("इमेल आवश्यक छ"),
  password: yup.string().required("पासवर्ड गलत छ"),
});
