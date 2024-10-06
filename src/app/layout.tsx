import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import AuthProvider from "@/providers/AuthProvider";
import StoreProvider from "@/providers/StoreProvider";
import ToastProvider from "@/providers/ToastProvider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Viste-Admin",
	description: "Admin Panel to control viste-guest application",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const gaId = process.env.NEXT_PUBLIC_MEASUREMENT_ID;

	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<StoreProvider>
					<ToastProvider>
						<AuthProvider>{children}</AuthProvider>
					</ToastProvider>
				</StoreProvider>
				{gaId && <GoogleAnalytics gaId={gaId as string} />}
				<Script id="clarity-script" strategy="afterInteractive">
					{`
					(function (c, l, a, r, i, t, y) {
						c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
						t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
						y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
					})(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
			`}
				</Script>
			</body>
		</html>
	);
}
