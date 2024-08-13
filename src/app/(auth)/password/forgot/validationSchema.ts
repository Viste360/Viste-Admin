import { ObjectSchema, object, string } from "yup";

const validationSchema: ObjectSchema<{ email: string }> = object().shape({
	email: string().email("Invalid Email").required("Email is required"),
});

export default validationSchema;
