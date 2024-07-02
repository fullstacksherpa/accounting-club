interface SectionTitleProps {
	title: string;
	sub: string;
}
const SectionTitle = ({title, sub}: SectionTitleProps) => {
	return (
		<div className="pl-8">
			<h1 className="text-3xl lg:text-4xl font-semibold tracking-wide pb-3">{title}</h1>
			<p className="text-md lg:text-lg text-muted-foreground">
				{sub}
			</p>
		</div>

	)
}

export default SectionTitle