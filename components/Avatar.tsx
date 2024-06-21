"use client"

import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@/components/ui/avatar"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function AvatarDemo() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Avatar>
					<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
					<AvatarFallback className="text-4xl">👽</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => console.log("Sign In")}>
					Sign in
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => console.log("Log in")}>
					Log in
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>

	)
}