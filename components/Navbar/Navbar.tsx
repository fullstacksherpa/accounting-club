"use client"
import Link from "next/link";
import dynamic from "next/dynamic";
import {usePathname} from "next/navigation";
import {
	ClerkProvider,
	SignedIn,
	SignedOut,
	SignInButton,
	UserButton,
} from "@clerk/nextjs";
import {cn} from "@/lib/utils";
import {Button, buttonVariants} from "@/components/ui/button";
import Logo from "@/components/Logo";




const MobileNav = dynamic(() => import("./MobileNav"));

export type navItemType = {
	id: number;
	label: string;
	href: string;
};

const Navbar = () => {
	const pathname = usePathname()
	const session = null

	const navItems: navItemType[] = [
		{
			id: 1,
			label: "Home",
			href: "/",
		},
		{
			id: 2,
			label: "Events",
			href: "/events",
		},
		{
			id: 3,
			label: "Blogs",
			href: "/blogs",
		},
		{
			id: 4,
			label: "About-Us",
			href: "/about-us",
		},
		{
			id: 5,
			label: "Tax-Program",
			href: "/tax-program",
		},
	];

	return (
		<div className="sticky top-0 z-40 w-full  flex justify-between lg:space-around items-center py-3 border-b backdrop-blur-lg px-8 lg:px-16">
			<MobileNav session={session} />
			<div className="w-full lg:flex hidden gap-x-20 items-center">
				<div className="relative z-20 flex items-center">
					<Link
						href="/"
						className={cn(
							buttonVariants({variant: "link"}),
							"text-sm tracking-tighter"
						)}>
						<Logo />
					</Link>
				</div>
				<div className="flex items-center gap-x-4">
					{navItems.map((item) => (
						<Link
							href={item.href}
							key={item.id}
							className={cn(
								buttonVariants({variant: "link"}),
								{'border border-w-2  bg-gradient-to-r from-[#0092CB] via-[#2D4F8F] to-[#422774] rounded-2xl text-white': pathname === item.href},
								"text-md font-medium hover:underline"
							)}>
							{item.label}
						</Link>
					))}
				</div>
			</div>
			<div className="flex lg:hidden">
				<Link
					href="/"
					className={cn(
						buttonVariants({variant: "link"}),
						"text-sm tracking-tighter"
					)}>
					<Logo />
				</Link>
			</div>

			<div className="flex gap-x-4 items-center">
				<SignedIn>
					{/* Mount the UserButton component */}
					<UserButton />
				</SignedIn>
				<SignedOut>
					{/* Signed out users get sign in button */}
					<Link href="/sign-up" className=" tracking-tighter">
						<Button className="mx-2 w-full group" size="sm">
							<span className="mr-2">Join the Club</span>
							<svg className="group-hover:translate-x-2 duration-200 max-w-[22px]" width={27} height={14} viewBox="0 0 27 14" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M0.217443 6.25H18.4827C18.6276 6.25 18.7001 6.30263 18.7001 6.40789V7.59211C18.7001 7.69737 18.6276 7.75 18.4827 7.75H0.217443C0.0724811 7.75 0 7.69737 0 7.59211V6.40789C0 6.30263 0.0724811 6.25 0.217443 6.25Z" fill="currentColor" />
								<path d="M20.7001 12.2802L25.0467 7.93355C25.5601 7.42021 25.5601 6.58021 25.0467 6.06688L20.7001 1.72021" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</Button>
					</Link>
				</SignedOut>
			</div>
		</div >
	);
};

export default Navbar;