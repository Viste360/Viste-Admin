import Image from "next/image";
import React, { ReactNode } from "react";
import { Avatar } from "../ui/avatar";

interface AuthLayoutProps {
	children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
	return (
		<div className="flex h-screen">
			<div className="w-1/2 bg-background text-foreground p-8 md:flex flex-col hidden">
				<Image
					src={"/images/VisteAdmin.png"}
					alt="viste-admin-logo"
					width={120}
					height={300}
				/>
				<div className="flex flex-col justify-center items-center flex-grow">
					<h2 className="text-center mb-8">
						We’ve been using VISTE to kick start <br /> every new order and can’t
						imagine <br />
						working without it.
					</h2>
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
				<h6 className="text-secondary-foreground opacity-70">
					© All copyright resereved 2024
				</h6>
			</div>
			<div className="w-1/2">{children}</div>
		</div>
	);
};

export default AuthLayout;
