import Image from "next/image";
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {client, urlFor} from "../../lib/sanity"
import {simpleBlogCard} from "@/lib/interface";

// export const revalidate = 10800; // revalidate at most 30 seconds

async function getData() {
	const query = `
  *[_type == 'blog'] | order(_createdAt desc) {
    title,
      smallDescription,
      "currentSlug": slug.current,
      titleImage
  }`;

	const data = await client.fetch(query);

	return data;
}

export default async function BlogHome() {
	const data: simpleBlogCard[] = await getData();
	console.log(data)
	return (
		<div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 mt-5 gap-10 px-11">
			{data.map((post, idx) => (
				<Card key={idx} className="group shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-3xl">
					<Image
						src={urlFor(post.titleImage).url()}
						alt="image"
						width={500}
						height={500}
						className="rounded-t-lg h-[200px] object-cover"
					/>

					<CardContent className="pt-5 border-gray-200 border-t-2">
						<h3 className="text-lg line-clamp-2 font-bold">{post.title}</h3>
						<p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">
							{post.smallDescription}
						</p>
						<Link href={`/blog/${post.currentSlug}`} className="group ease-in hover:text-primary-1 duration-200 inline-flex items-center mt-4 lg:text-base text-sm text-dark-1 font-medium">
							<span className="mr-2">Read More</span>
							<svg className="group-hover:translate-x-2 duration-200 max-w-[22px]" width={27} height={14} viewBox="0 0 27 14" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M0.217443 6.25H18.4827C18.6276 6.25 18.7001 6.30263 18.7001 6.40789V7.59211C18.7001 7.69737 18.6276 7.75 18.4827 7.75H0.217443C0.0724811 7.75 0 7.69737 0 7.59211V6.40789C0 6.30263 0.0724811 6.25 0.217443 6.25Z" fill="currentColor" />
								<path d="M20.7001 12.2802L25.0467 7.93355C25.5601 7.42021 25.5601 6.58021 25.0467 6.06688L20.7001 1.72021" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</Link>
					</CardContent>
				</Card>
			))}
		</div>
	);
}
