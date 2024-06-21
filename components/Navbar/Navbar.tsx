import Link from "next/link";
import dynamic from "next/dynamic";

// import {getAuthSession} from "@/lib/auth";
import {cn} from "@/lib/utils";
import {Button, buttonVariants} from "@/components/ui/button";
import UserAccountDropdown from "@/components/User/UserAccountDropdown";
import Logo from "@/components/Logo";



const MobileNav = dynamic(() => import("./MobileNav"));

export type navItemType = {
	id: number;
	label: string;
	href: string;
};

const Navbar = async () => {
	const session = null

	const navItems: navItemType[] = [
		{
			id: 1,
			label: "Home",
			href: "/home",
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
		<div className="sticky top-0 z-40 w-full bg-background flex justify-between lg:space-around items-center py-3 border-b px-8 lg:px-16">
			<MobileNav session={session} />
			<div className="w-full lg:flex hidden gap-x-8 items-center">
				<div className="relative z-20 flex items-center">
					<Link
						href="/"
						className={cn(
							buttonVariants({variant: "link"}),
							"text-md tracking-tighter"
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
								"text-sm font-medium hover:underline"
							)}>
							{item.label}
						</Link>
					))}
				</div>
			</div>
			<div className="flex gap-x-4 items-center">

				{session ? (
					<UserAccountDropdown session={session} />
				) : (
					<Link href="/sign-in" className=" tracking-tighter">
						<Button className="mx-2 w-full" size="sm">
							Join the Club
							<div className="sr-only">Sign In</div>
						</Button>
					</Link>
				)}
			</div>
		</div>
	);
};

export default Navbar;