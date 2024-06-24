interface SectionTitleProps {
	title: string;
	sub: string;
}
const SectionTitle = ({title, sub}: SectionTitleProps) => {
	return (
		<div className="pl-10">
			<h2 className="text-2xl lg:text-3xl font-semibold tracking-widest">{title}</h2>
			<p className="text-sm lg:text-lg text-muted-foreground">
				{sub}
			</p>
		</div>

	)
}

export default SectionTitle