import * as yup from "yup";

const createacc_schema = yup.object().shape({
    email: yup.string().email().required("You must enter a valid email."),
    password: yup.string().required("You must enter a password.").min(8).max(32),
    confirm_password: yup.string().required("You must enter a password.").min(8).max(32),
    first_name: yup.string().required("The 'First Name' field cannot be blank.").min(3),
    last_name: yup.string().required("The 'Last Name' field cannot be blank.").min(3),
    phone_num: yup.number("The 'Phone Number' field cannot be blank.").required("Please enter your number !"),
    address_line1: yup.string().required("The 'Address Line 1' field cannot be blank.").min(3),
    city: yup.string().required("The 'Suburb/City' field cannot be blank.").min(3),
    zip_code: yup.number("The 'Zip/Postcode' field cannot be blank.").required("Please enter your zip code !").min(3)
    

});

export default createacc_schema