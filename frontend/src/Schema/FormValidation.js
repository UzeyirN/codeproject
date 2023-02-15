import * as yup from "yup";

const schema = yup.object().shape({
    companytName: yup.string().required("Enter value"),
    contactName: yup.string().min(3).required("Enter value"),
    
});

export default schema