"use client"
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer"
import {Button} from "@/components/ui/button"

const Contribute = () => {
	return (
		<Drawer>
			<DrawerTrigger asChild>
				<Button className="lg:mx-2 group mx-1 bg-gradient-to-r from-[#0092CB] via-[#2D4F8F] to-[#422774]" size="lg">
					<span className="lg:mr-2 mr-1">How You Can Contribute</span>
					<svg className="group-hover:translate-x-2 duration-200 max-w-[22px]" width={27} height={14} viewBox="0 0 27 14" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M0.217443 6.25H18.4827C18.6276 6.25 18.7001 6.30263 18.7001 6.40789V7.59211C18.7001 7.69737 18.6276 7.75 18.4827 7.75H0.217443C0.0724811 7.75 0 7.69737 0 7.59211V6.40789C0 6.30263 0.0724811 6.25 0.217443 6.25Z" fill="currentColor" />
						<path d="M20.7001 12.2802L25.0467 7.93355C25.5601 7.42021 25.5601 6.58021 25.0467 6.06688L20.7001 1.72021" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				</Button>
			</DrawerTrigger>
			<DrawerContent className="pb-6">
				<DrawerHeader className="px-4 lg:px-6 text-left">
					<DrawerTitle>Ways you can contribute to the club.</DrawerTitle>
					<DrawerDescription className="pt-4">If you would like to write and publish blog articles, please send your work in .docx format, along with one image in webp format, to ongchen10sherpa@gmail.com. <br /> Additionally, if you have any ideas for improving the website or if you encounter any issues while using it, feel free to email us at the same address. We appreciate your feedback and contributions!</DrawerDescription>
				</DrawerHeader>
				<DrawerFooter className="flex flex-row items-center justify-end pr-10">
					<Button className="bg-gradient-to-r from-[#0092CB] via-[#2D4F8F] to-[#422774]">
						<a href="mailto:ongchen10sherpa@gmail.com?subject=Blog Submission or Website Feedback">
							Send Email
						</a>
					</Button>
					<DrawerClose>
						<Button variant="outline">Close</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>

	)
}

export default Contribute