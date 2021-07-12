import Head from "next/head";
import Header from "../components/Header";
import BodyTop from "../components/BodyTop";
import BodyBottom from "../components/BodyBottom";

export default function Home() {
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
