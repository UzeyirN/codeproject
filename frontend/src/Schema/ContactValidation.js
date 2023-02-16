import * as yup from "yup";

const contact_schema = yup.object().shape({
  fullname: yup.string().required("Please enter your name !").min(3),
  email: yup.string().email().required("Please enter your email !"),
  comments: yup.string().required("Please enter your email !").min(10)

});

export default contact_schema