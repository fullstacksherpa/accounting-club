import {FC} from "react";
import {AvatarProps} from "@radix-ui/react-avatar";

import {Icons} from "@/components/Icons";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

interface User {
	image?: string;
	name?: string;
}

interface UserAvatarProps extends AvatarProps {
	user: User;
}

const UserAvatar: FC<UserAvatarProps> = ({user, ...props}) => {
	return (
		<Avatar {...props}>
			<AvatarImage src={user.image ?? ""} alt={user.name ?? "user avatar"} />
			<AvatarFallback>
				<span className="sr-only">{user?.name ?? "User"}</span>
				<Icons.user className="h-4 w-4" />
			</AvatarFallback>
		</Avatar>
	);
};

export default UserAvatar;
