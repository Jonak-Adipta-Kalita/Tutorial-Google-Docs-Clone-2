import Head from "next/head";
import Header from "../components/Header";
import Body from "../components/Body";
import Login from "../components/Login";
import { useSession, getSession } from 'next-auth/client';

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
			<Body />
		</div>
	);
}

export async function getServerSideProps(context) {
	const session = await getSession(context);
	return {
		props: {
			session,
		}
	}
}
