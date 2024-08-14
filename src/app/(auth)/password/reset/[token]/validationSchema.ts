import { ResetPassword } from "@/types/user.type";
import { ObjectSchema, object, string } from "yup";

const validationSchema: ObjectSchema<ResetPassword> = object().shape({
	password: string().required("Password is required").min(8, "Must be at least 8 characters."),
	confirmPassword: string().required("Confirm Password").min(8, "Must be at least 8 characters."),
});

export default validationSchema;
