import type { Metadata } from "next";
import localFont from "next/font/local";
import '@styles/app/app.css'

export const metadata: Metadata = {
  title: "svey | resume",
  description: "Personal resume.",
};

const monaSans = localFont({
	src: "../public/fonts/MonaspaceNeonVarVF[wght,wdth,slnt].woff2",
	variable: "--font-mona-sans",
});

const monaSerif = localFont({
	src: "../public/fonts/MonaspaceXenonVarVF[wght,wdth,slnt].woff2",
	variable: "--font-mona-serif",
});

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<title>svey | resume</title>
			</head>
			<body className={`${monaSans.variable} ${monaSerif.variable} antialiased grid min-h-screen place-items-center bg-bg-secondary print:min-h-0`}>
				<main
					className="m-4 p-8 h-[297mm] w-[210mm] overflow-hidden rounded-md bg-white shadow-lg print:p-0 print:m-0 print:h-screen print:w-screen print:rounded-none print:shadow-none"
				>
					{children}
				</main>
			</body>
		</html>
  );
}

export default RootLayout
