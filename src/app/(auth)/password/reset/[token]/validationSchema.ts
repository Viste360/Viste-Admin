import { ResetPassword } from "@/types/user.type";
import { ObjectSchema, object, string } from "yup";

const validationSchema: ObjectSchema<ResetPassword> = object().shape({
	password: string().required("Password is required"),
	confirmPassword: string().required("Confirm Password"),
});

export default validationSchema;
