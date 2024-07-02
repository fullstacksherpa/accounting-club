import {SignUp} from "@clerk/nextjs";

export default function Page() {
	return (
		<section className="flex flex-col justify-center mx-auto pt-12 items-center">
			<SignUp />
		</section>
	)



}