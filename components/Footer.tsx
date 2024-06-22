"use client"

import Link from 'next/link'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'



const Footer = () => {

	const handleClick = () => {
		window.open('https://www.fullstacksherpa.tech/', '_blank');
	}
	return (
		<footer className='bg-white h-20 relative'>
			<MaxWidthWrapper>
				<div className="py-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64  text-sm ">
					{/* TOP */}

				</div>
				<div className='border-t border-[rgba(33,38,166,0.93)]' />

				<div className='h-full flex flex-col md:flex-row md:justify-between justify-center items-center'>
					<div className='text-center md:text-left pb-2 md:pb-0'>
						<p className='text-sm text-muted-foreground'>
							<span className='dark:hover:text-white hover:text-purple-900 hover:underline'>AAC &copy;</span>  {new Date().getFullYear()} All rights reserved
						</p>
					</div>
					<div className='text-center'>
						<p className='text-sm text-muted-foreground'>Site architecture and support by <span onClick={handleClick} className='dark:text-white hover:underline hover:text-purple-900'>fullstacksherpa</span></p>
					</div>

					<div className='flex items-center justify-center'>
						<div className='flex space-x-8'>
							<Link
								href='#'
								className='text-sm text-muted-foreground hover:text-gray-600'>
								Terms
							</Link>
							<Link
								href='#'
								className='text-sm text-muted-foreground hover:text-gray-600'>
								Privacy Policy
							</Link>
							<Link
								href='/cookie'
								className='text-sm text-muted-foreground hover:text-gray-600'>
								Cookie Policy
							</Link>
						</div>
					</div>
				</div>
			</MaxWidthWrapper>
		</footer>
	)
}

export default Footer