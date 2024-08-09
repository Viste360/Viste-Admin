import { object, string } from "yup";

const validationSchema = object().shape({
	name: string().required("Name is required"),
	email: string().email("Invalid Email").required("Email is required"),
	password: string().required("Password is required"),
});

export default validationSchema;
