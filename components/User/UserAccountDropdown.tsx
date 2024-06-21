"use client";

import {FC, useState, useEffect} from "react";
import type {Icon} from "lucide-react";
import Link from "next/link";
// import {signOut} from "next-auth/react";
// import {Session} from "next-auth";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "@/components/User/UserAvatar";
import {Icons} from "@/components/Icons";

interface UserAccountDropdownProps {
	session: Session;
}

export type DropdownItemType = {
	id: number;
	label: string;
	Icon: Icon;
	href: string;
};

const initialDropdownItems: DropdownItemType[] = [
	{
		id: 1,
		label: "About",
		Icon: Icons.info,
		href: "/about",
	},
];

const UserAccountDropdown: FC<UserAccountDropdownProps> = ({session}) => {
	const {user} = session;
	const [dropdownItems, setDropdownItems] = useState<DropdownItemType[]>(initialDropdownItems);

	useEffect(() => {
		if (user.role === "ADMIN")
		{
			const adminItem = dropdownItems.find((item) => item.href === "/admin/users");
			if (!adminItem)
			{
				setDropdownItems((prevItems) => [
					...prevItems,
					{
						id: 2,
						label: "Admin Panel",
						Icon: Icons.admin,
						href: "/admin/users",
					},
				]);
			}
		} else
		{
			setDropdownItems((prevItems) =>
				prevItems.filter((item) => item.href !== "/admin/users")
			);
		}
	}, [user.role]);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="focus:outline-none">
				<UserAvatar className="h-8 w-8" user={user} />
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<div className="flex items-center justify-start gap-2 p-2 text-sm">
					<div className="flex flex-col space-y-1 leading-none">
						{user.name && <p className="font-medium">{user.name}</p>}
						{user.email && (
							<p className="w-[200px] truncate text-sm text-muted-foreground">
								{user.email}
							</p>
						)}
					</div>
				</div>

				<DropdownMenuSeparator />

				{dropdownItems.map((item) => (
					<DropdownMenuItem key={item.id} asChild className="cursor-pointer">
						<Link href={item.href}>
							<div className="flex items-center gap-x-2">
								<item.Icon className="h-4 w-4" />
								{item.label}
							</div>
						</Link>
					</DropdownMenuItem>
				))}

				<DropdownMenuSeparator />

				<DropdownMenuItem
					onSelect={(event) => {
						event.preventDefault();
						signOut({
							callbackUrl: `${window.location.origin}/sign-in`,
						});
					}}
					className="cursor-pointer"
				>
					<div className="flex items-center gap-x-2">
						<Icons.logOut className="h-4 w-4" />
						Log out
					</div>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default UserAccountDropdown;
