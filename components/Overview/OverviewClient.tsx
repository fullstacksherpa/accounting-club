"use client";
import dynamic from "next/dynamic";

import {OverviewType} from "./type";
import OverviewSkeleton from "@/components/SkeletonLoaders/OverviewSkeleton";

const OverviewDisplay = dynamic(() => import("@/components/Overview/OverviewDisplay"), {
	ssr: false,
	loading: () => <OverviewSkeleton />,
});

const OverviewClient = ({data}: {data: OverviewType[]}) => {
	return <OverviewDisplay data={data} />;
};

export default OverviewClient;