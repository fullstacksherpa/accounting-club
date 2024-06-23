import {SignIn} from "@clerk/nextjs";

export default function Page() {
	return (
		<section className="flex flex-col justify-center mx-auto pt-12 items-center">
			<div>
				<SignIn />
			</div>

		</section>
	)



}