import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
useUser;
export default function Home() {
	const { user, error, isLoading } = useUser();
	if (isLoading) return <div>...loading</div>;
	if (error) return <div>{error.message}</div>;
	if (user) {
		return (
			<>
				Welcome, {user.name}
				<br />
				<Link href={"/api/auth/logout"}>Logout</Link>
			</>
		);
	}
	return <Link href={"/api/auth/login"}>Login</Link>;
}
