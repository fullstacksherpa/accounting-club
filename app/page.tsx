
import {Suspense} from "react";
import {Balancer} from "react-wrap-balancer";
import BlogHome from "./blog/page";
import Events from "./events/page";
import BlogCardSkeleton from "@/components/SkeletonLoaders/blogSkeleton";
import OverviewSkeleton from "@/components/SkeletonLoaders/OverviewSkeleton";
import Overview from "@/components/Overview/Overview";



export const fetchCache = "force-no-store";
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="grid items-center gap-8 pb-8 pt-6 md:py-8 container">
      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="mx-auto flex w-full max-w-[64rem] flex-col items-center justify-center gap-4 pb-8 pt-6 text-center md:pb-12 md:pt-10 lg:pt-24 lg:pb-10"
      >
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
          Discover, Connect, and Explore the Fascinating World of Accounting
        </h1>
        <Balancer className="max-w-[46rem] text-lg text-muted-foreground sm:text-xl">
          Welcome to the Accounting Club, where everybody counts—literally. Join us and dive into the thrilling world of balance sheets and spreadsheets, because who needs excitement when you have numbers?
        </Balancer>
      </section>
      <Suspense fallback={<OverviewSkeleton />}>
        <Overview />
      </Suspense>

      <div className="flex flex-col gap-y-2">
        <h2 className="text-2xl font-semibold tracking-tight">Upcoming events</h2>
        <p className="text-sm text-muted-foreground">
          events from cpabc
        </p>
        <Suspense fallback={<BlogCardSkeleton />}>
          <Events />
        </Suspense>
      </div>
      <div className="flex flex-col gap-y-2">
        <h2 className="text-2xl font-semibold tracking-tight">
          Blogs
        </h2>
        <p className="text-sm text-muted-foreground">
          Enhance your knowledge by exploring our blog.
        </p>

        <Suspense fallback={<BlogCardSkeleton />}>
          <BlogHome />
        </Suspense>
      </div>
    </main>
  );
}
