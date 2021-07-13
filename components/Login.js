import Head from "next/head";
import Image from "next/image";
import Button from "@material-tailwind/react/Button";
import { signIn } from "next-auth/client";

export default function Login() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<Head>
				<title>JAK Google Docs Clone | Login</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Image
				src="https://links.papareact.com/1ui"
				height="300"
				width="550"
				objectFit="contain"
			/>
			<Button
				className="w-44 mt-10"
				color="blue"
				buttonType="filled"
				ripple="light"
				onClick={signIn}
			>
				Login
			</Button>
		</div>
	);
}
