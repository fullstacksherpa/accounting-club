import {fullBlog} from "@/lib/interface";
import {client, urlFor} from "@/lib/sanity"
import {PortableText} from "@portabletext/react";
import Image from "next/image";

export const revalidate = 10800;

async function getData(slug: string) {
	const query = `
    *[_type == "blog" && slug.current == 'about-us'] {
        "currentSlug": slug.current,
          title,
          content,
          titleImage
      }[0]`;

	const data = await client.fetch(query);
	return data;
}

export default async function BlogArticle({
	params,
}: {
	params: {slug: string};
}) {
	const data: fullBlog = await getData(params.slug);

	return (
		<div className="pt-3 lg:pt-8 w-full overflow-x-hidden  pb-20 px-8 items-center content-center flex flex-col ">

			<Image
				src={urlFor(data.titleImage).url()}
				width={800}
				height={800}
				alt="Title Image"
				priority
				className="rounded-lg mt-8 border"
			/>

			<div className="mt-2 lg:mt-9 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary">
				<PortableText value={data.content} />
			</div>
		</div>
	);
}