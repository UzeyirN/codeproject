import * as yup from "yup";

const products_schema = yup.object().shape({
    image: yup.string().required("You must enter a valid image link."),
    brand: yup.string().required("You must enter a brand."),
    alcohol: yup.string().required("You must enter a alcohol degree."),
    appelation: yup.string().required("You must enter a appelation."),
    size: yup.string().required("You must enter a size."),
    price: yup.string().required("You must enter a price."),
    kind: yup.string().required("You must enter a kind."),
    

});

export default products_schema