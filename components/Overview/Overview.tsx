// import {db} from "@/lib/db";
import OverviewClient from "@/components/Overview/OverviewClient";
import {OverviewType} from "./type";

const Overview = async () => {
	const currentDate = new Date();

	const firstDayOfCurrentMonth = new Date(
		currentDate.getFullYear(),
		currentDate.getMonth(),
		1
	);
	const lastDayOfPreviousMonth = new Date(firstDayOfCurrentMonth);
	lastDayOfPreviousMonth.setDate(0);

	lastDayOfPreviousMonth.setUTCHours(23);
	lastDayOfPreviousMonth.setUTCMinutes(59);
	lastDayOfPreviousMonth.setUTCSeconds(59);

	// const promises = [
	// 	db.user.count(),
	// 	db.anime.count(),
	// 	db.poll.count(),
	// 	db.user.count({
	// 		where: {
	// 			createdAt: {
	// 				lte: lastDayOfPreviousMonth,
	// 			},
	// 		},
	// 	}),
	// 	db.anime.count({
	// 		where: {
	// 			createdAt: {
	// 				lte: lastDayOfPreviousMonth,
	// 			},
	// 		},
	// 	}),
	// 	db.poll.count({
	// 		where: {
	// 			createdAt: {
	// 				lte: lastDayOfPreviousMonth,
	// 			},
	// 		},
	// 	}),
	// ];

	// const [
	// 	userCount,
	// 	animeCount,
	// 	pollCount,
	// 	previousMonthUserCount,
	// 	previousMonthAnimeCount,
	// 	previousMonthPollCount,
	// ] = await Promise.all(promises);

	const data: OverviewType[] = [
		{
			title: "Total Users",
			category: "user",
			count: 6,
			previousMonthCount: 3,
		},
		{
			title: "Total Events",
			category: "anime",
			count: 5,
			previousMonthCount: 0,
		},
		{
			title: "Total Blogs",
			category: "poll",
			count: 6,
			previousMonthCount: 1,
		},
	];

	return <OverviewClient data={data} />;
};

export default Overview;