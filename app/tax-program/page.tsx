
import {RocketIcon} from "@radix-ui/react-icons"

import {
	Alert,
	AlertDescription,
	AlertTitle,
} from "@/components/ui/alert"

const page = () => {
	return (
		<div className="w-[60%] lg:w-[50%] mx-auto h-[70vh] flex items-center justify-center">
			<Alert className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
				<RocketIcon className="h-4 w-4" />
				<AlertTitle>Heads up!</AlertTitle>
				<AlertDescription>
					Stay tuned for our upcoming tax program and event.
				</AlertDescription>
			</Alert>
		</div>

	)
}
export default page