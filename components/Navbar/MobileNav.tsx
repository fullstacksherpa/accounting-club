"use client";
import Link from "next/link";
import {useState} from "react";
import {usePathname} from "next/navigation";

import {cn} from "@/lib/utils";
import {Button, buttonVariants} from "@/components/ui/button";
import {ScrollArea} from "@/components/ui/scroll-area";
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
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetTrigger asChild>
				<Button
					variant="ghost"
					className="mr-2 lg:hidden text-[#2D4F8F]"
				>
					<Icons.menu className="h-8 w-8" />
				</Button>
			</SheetTrigger>
			<SheetContent side="left" className="pl-1 pr-0">
				<div className="px-7">
					<Link
						aria-label="Home"
						href="/"
						className="flex items-center"
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
								"text-2xl font-medium"
							)}>
							{item.label}
						</Link>
					))}
				</div>

			</SheetContent>
		</Sheet>
	);
}
