import * as yup from "yup";

const contact_schema = yup.object().shape({
  name: yup.string().required("Please enter your name !").min(3),
  phone_num: yup.number("Please enter number type !").min(10).max(32).required("Please enter your number !"),
  email: yup.string().email().required("Please enter your email !"),
  comment: yup.string().required("Please enter your email !").min(10)

});

export default contact_schema