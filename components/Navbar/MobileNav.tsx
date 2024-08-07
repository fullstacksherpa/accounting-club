"use client";
import Link from "next/link";
import {useState} from "react";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";
import {Button, buttonVariants} from "@/components/ui/button";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"
import {Icons} from "@/components/Icons"
import Logo from "@/components/Logo";

export type navItemType = {
	id: number;
	label: string;
	href: string;
};

interface MobileNavProps {
	session: null;
}

export default function MobileNav({session}: MobileNavProps) {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);
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
			href: "/blog",
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
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetTrigger asChild>
				<Button
					variant="ghost"
					className=" lg:hidden text-[#2D4F8F]"
				>
					<Icons.menu className="h-10 w-10" />
				</Button>
			</SheetTrigger>
			<SheetContent side="left" className="pl-1 pr-0">
				<div className="px-7">
					<Link
						aria-label="Home"
						href="/"
						className="flex items-center text-4xl"
						onClick={() => setIsOpen(false)}
					>
						<Logo arial-hidden="true" />
					</Link>
				</div>

				<div className="pl-1 pr-7 flex flex-col justify-center items-center h-[60vh] gap-8">
					{navItems.map((item) => (
						<Link
							href={item.href}
							onClick={() => setIsOpen(false)}
							key={item.id}
							className={cn(
								buttonVariants({variant: "link"}),
								{'border border-w-2  bg-gradient-to-r from-[#0092CB] via-[#2D4F8F] to-[#422774] rounded-2xl text-white': pathname === item.href},
								"text-2xl font-medium hover:underline"
							)}>
							{item.label}
						</Link>
					))}
				</div>

			</SheetContent>
		</Sheet>
	);
}
