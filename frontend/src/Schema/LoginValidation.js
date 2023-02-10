import * as yup from "yup";

const login__schema = yup.object().shape({
    email: yup.string().email().required("Please use a valid email address, such as user@example.com."),
    password: yup.string().required("You must enter a password.").min(8).max(32)
});

export default login__schema