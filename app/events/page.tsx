import Image from "next/image";
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {client, urlFor} from "../../lib/sanity"
import {simpleEventCard} from "@/lib/interface";

export const revalidate = 10800000; // revalidate at most 30 minute

async function getData() {
	const query = `
  *[_type == 'event'] | order(_createdAt desc) {
    date,
      title,
     smallDescription,
      format, href
  }`;

	const data = await client.fetch(query);

	return data;
}

export default async function Events() {
	const data: simpleEventCard[] = await getData();
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-x-9 px-[3%] gap-y-9">
			{data.map((event, idx) => (
				<Card key={idx} className="rounded-3xl flex flex-col h-full shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
					<CardContent className="py-5 flex flex-col h-full">
						<div className="flex-grow">
							<h4 className="text-sm text-gray-700 dark:text-gray-300">{event.date}</h4>
							<h3 className="text-lg font-bold pt-2 line-clamp-2 h-14">{event.title}</h3>
							<p className="text-sm mt-2 text-gray-700 dark:text-gray-300 line-clamp-3 h-18 overflow-hidden">
								{event.smallDescription}
							</p>
						</div>
						<div className="flex justify-between items-center pt-5 mt-auto">
							<Button variant="ghost" size="sm" className="text-gray-800">{event.format}</Button>
							<Button asChild className="" size="sm">
								<Link href={event.href} target="_blank" rel="noopener noreferrer">Register</Link>
							</Button>
						</div>
					</CardContent>
				</Card>
			))}
		</div>
	);
}