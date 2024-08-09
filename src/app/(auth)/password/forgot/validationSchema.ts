import { object, string } from "yup";

const validationSchema = object().shape({
	email: string().email("Invalid Email").required("Email is required"),
});

export default validationSchema;
