import {SignUp} from "@clerk/nextjs";

export default function Page() {
	return (
		<section className="flex flex-col justify-center mx-auto pt-12 items-center">
			<div>
				<p className="bg-gradient-to-r from-[#0092CB] via-[#2D4F8F] to-[#422774] bg-clip-text text-transparent text-xl lg:text-4xl">User Login Feature Launching soon</p>
				<SignUp />
			</div>

		</section>
	)



}