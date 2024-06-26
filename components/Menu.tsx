"use client"

import Image from "next/image"
import Link from "next/link"
import {useState} from "react"

const Menu = () => {
	const [open, setOpen] = useState(false)
	return (
		<div>
			<Image src="/menu.png" alt="Menu Button" width={28} height={28} className="cursor-pointer dark:border dark:border-white" onClick={() => setOpen((prev) => !prev)} />{
				open && (
					<div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
						<Link href="/">Home</Link>
						<Link href="/">Peer Tutors</Link>
						<Link href="/">About Us</Link>
						<Link href="/">Blogs</Link>
						<Link href="/">Tax Program</Link>
					</div>
				)
			}
		</div>
	)
}

export default Menu