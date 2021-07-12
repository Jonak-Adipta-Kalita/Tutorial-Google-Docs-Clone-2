import Head from "next/head";
import Header from "../components/Header";
import BodyTop from "../components/BodyTop";
import BodyBottom from "../components/BodyBottom";
import Login from "../components/Login";
import { useSession } from 'next-auth/client';

export default function Home() {
	const [session] = useSession();
	if (!session) return <Login />;
	return (
		<div className="">
			<Head>
				<title>JAK Google Docs Clone</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<BodyTop />
			<BodyBottom />
		</div>
	);
}
