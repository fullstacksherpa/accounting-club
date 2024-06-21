import Link from "next/link"
import Menu from "@/components/Menu"
import Logo from "./Logo"
import {ModeToggle} from "./ModeToggle"
import {AvatarDemo} from "./Avatar"
import MaxWidthWrapper from "./MaxWidthWrapper"



const Navbar = () => {
	return (
		<nav className="h-20 relative">
			<MaxWidthWrapper>


				{/* MOBILE SCREEN */}
				<div className="h-full flex items-center justify-between md:hidden">
					<Link href="/">
						<Logo />
					</Link>
					<Menu />
				</div>


				{/* BIGGER SCREEN */}


				<div className="hidden md:flex items-center justify-between gap-8 h-full">

					{/* LEFT SIDE */}

					<div className="w-[90%] flex items-center gap-4 justify-between">
						<Link href="/">
							<Logo />
						</Link>
						<div className="hidden md:flex gap-8">
							<Link href="/">Home</Link>
							<Link href="/peer-tutors">Peer Tutors</Link>
							<Link href="/about-us">About Us</Link>
							<Link href="/blog">Blogs</Link>
							<Link href="/tax-program">Tax Program</Link>
						</div>
					</div>

					{/* RIGHT SIDE */}

					<div className="w-[10%]  flex items-center justify-between gap-2">
						<ModeToggle />
						<AvatarDemo />
					</div>
				</div>
			</MaxWidthWrapper>
		</nav>
	)
}

export default Navbar

