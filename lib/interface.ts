export interface simpleBlogCard {
	title: string;
	smallDescription: string;
	currentSlug: string;
	titleImage: any;
}

export interface fullBlog {
	currentSlug: string;
	title: string;
	content: any;
	titleImage: any;
}

export interface simpleEventCard {
	date: string;
	title: string;
	smallDescription: string;
	format: string;
	href: string;
}