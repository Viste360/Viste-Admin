import Image from "next/image";
import React, { ReactNode } from "react";
import { Avatar } from "../ui/avatar";

interface AuthLayoutProps {
	children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
	return (
		<div className="flex h-screen bg-white-1">
			<div className="w-1/2 bg-red-3 text-white-1 p-8 lg:flex flex-col hidden">
				<Image
					src={"/images/VisteAdmin.png"}
					alt="viste-admin-logo"
					width={120}
					height={300}
				/>
				<div className="flex flex-col justify-center items-center flex-grow">
					<h3 className="text-center mb-8">
						We’ve been using VISTE to kick start <br /> every new order and can’t
						imagine <br />
						working without it.
					</h3>
					<Avatar className="w-16 h-16">
						<Image fill src={"/images/Avatar.png"} alt="viste-admin" />
					</Avatar>
					<h3 className="my-4">Kelly Williams</h3>
					<div className="flex justify-center items-center my-2">
						<Image src={"/images/Star.png"} alt="star" width={20} height={20} />
						<Image src={"/images/Star.png"} alt="star" width={20} height={20} />
						<Image src={"/images/Star.png"} alt="star" width={20} height={20} />
						<Image src={"/images/Star.png"} alt="star" width={20} height={20} />
						<Image src={"/images/Star.png"} alt="star" width={20} height={20} />
					</div>
				</div>
				<p className="text-violet-1 opacity-70">© All copyright resereved 2024</p>
			</div>
			<div className="w-full lg:w-1/2 bg-red-3 lg:bg-inherit flex flex-col justify-center lg:block">
				<div className="flex justify-center items-center lg:hidden mt-32 -mb-10">
					<Image
						className="w-60 h-16"
						src={"/images/VisteAdminMobile.png"}
						alt="viste-admin-logo"
						width={180}
						height={450}
					/>
				</div>
				{children}
			</div>
		</div>
	);
};

export default AuthLayout;
