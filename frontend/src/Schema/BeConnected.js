import * as yup from "yup";

const beConnected_schema = yup.object().shape({
  email: yup.string().email().required("PLEASE,ENTER EMAIL ADDRESS !"),
});

export default beConnected_schema