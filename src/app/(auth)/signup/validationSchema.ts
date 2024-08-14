import { SignUpUser } from "@/types/user.type";
import { ObjectSchema, object, string } from "yup";

const validationSchema: ObjectSchema<SignUpUser> = object().shape({
	name: string().required("Name is required"),
	email: string().email("Invalid Email").required("Email is required"),
	password: string().required("Password is required").min(8, "Must be at least 8 characters."),
});

export default validationSchema;
