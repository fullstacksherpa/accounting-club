import Image from "next/image";
import Link from "next/link";
import {ModeToggle} from "./ModeToggle";

export default function Navbar() {
	return (
		<nav className="w-full relative flex items-center justify-between max-w-2xl mx-auto px-4 py-5">
			<Link href="/" className="font-bold text-3xl">

				<Image src={"/logo.png"} alt="" width={200} height={100} />
			</Link>
			<ModeToggle />
		</nav>
	);
}