import { LoginUser } from "@/types/user.type";
import { ObjectSchema, object, string } from "yup";

const validationSchema: ObjectSchema<LoginUser> = object().shape({
	email: string().email("Invalid Email").required("Email is required"),
	password: string().required("Password is required"),
});

export default validationSchema;
