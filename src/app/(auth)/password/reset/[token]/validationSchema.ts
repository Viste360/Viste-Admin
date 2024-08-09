import { object, string } from "yup";

const validationSchema = object().shape({
	password: string().required("Password is required"),
	confirmPassword: string().required("Confirm Password"),
});

export default validationSchema;
