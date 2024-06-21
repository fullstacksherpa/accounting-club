export type OverviewType = {
	title: string;
	category: OverviewCategory;
	count: number;
	previousMonthCount: number;
};

type OverviewCategory = "anime" | "user" | "poll";