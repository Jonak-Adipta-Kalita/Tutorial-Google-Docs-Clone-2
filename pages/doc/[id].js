import Head from "next/head";
import TextEditor from "../../components/TextEditor";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { useRouter } from "next/router";
import { db } from "../../firebase";
import { useDocumentOnce } from "react-firebase-hooks/firestore";
import { useSession, signOut, getSession } from 'next-auth/client';
import Login from "../../components/Login";

export default function Doc() {
	const [session] = useSession();
	if (!session) return <Login />;
	const router = useRouter();
	const { id } = router.query;
	const [snapshot, loadingSnapshot] = useDocumentOnce(
		db.collection("userDocs").doc(session?.user?.email).collection("docs").doc(id)
	);
	if (!loadingSnapshot && !snapshot?.data()?.fileName) {
		router.replace('/');
	}
	return (
		<div className="">
			<Head>
				<title>
					Edit {snapshot?.data()?.fileName ? snapshot?.data()?.fileName : "..."}
				</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header className="flex justify-between items-center p-3 pb-1">
				<span onClick={() => router.push("/")} className="cursor-pointer">
					<Icon name="description" size="5xl" color="blue" />
				</span>
				<div className="flex-grow px-2">
					<h2 className="">
						{snapshot?.data()?.fileName ? snapshot?.data()?.fileName : "..."}
					</h2>
					<div className="flex items-center text-sm space-x-1 -ml-1 h-8 text-gray-600">
						<p className="option">File</p>
						<p className="option">Edit</p>
						<p className="option">View</p>
						<p className="option">Insert</p>
						<p className="option">Format</p>
						<p className="option">Tools</p>
					</div>
				</div>
				<Button
					color="lightBlue"
					buttonType="filled"
					size="regular"
					className="hidden md:inline-flex h-10"
					rounded={false}
					block={false}
					iconOnly={false}
					ripple="light"
				>
					<Icon name="people" size="md" /> SHARE
				</Button>
				<img 
					src={session.user.image} 
					className="cursor-pointer rounded-full h-10 w-10 ml-2" 
					alt="avatar"
				/>
			</header>
			<TextEditor />
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
