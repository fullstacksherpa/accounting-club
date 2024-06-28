import {Suspense} from "react";
import BlogHome from "./blog/page";
import Events from "./events/page";
import BlogCardSkeleton from "@/components/SkeletonLoaders/blogSkeleton";
import SectionTitle from "@/components/SectionTitle";
import {Lilita_One} from "next/font/google";


const font = Lilita_One({weight: "400", subsets: ["latin"]});
export default function Home() {
  return (
    <main className="grid items-center gap-8 pb-8 pt-6 md:py-8 container">
      <section
        className="mx-auto flex w-full max-w-[64rem] flex-col gap-10 items-center justify-center pb-8 pt-6 text-center md:pb-12 md:pt-10 lg:pt-24 lg:pb-10 h-[60vh]"
      >
        <h1 className={`${font.className} text-3xl font-bold leading-tight tracking-wide md:text-5xl lg:text-6xl lg:leading-[1.1] bg-gradient-to-r from-[#3C71EC] via-[#2D4F8F] to-[#422774] bg-clip-text text-transparent`}>
          Discover,  Connect, and Explore the Fascinating World of Accounting
        </h1>
        <div className="max-w-[54rem] text-lg text-muted-foreground sm:text-xl">
          Welcome to the Accounting Club, where everybody counts.<br /> Join us and dive into the thrilling world of balance sheets and spreadsheets.
        </div>
      </section>

      <div className="flex flex-col gap-y-2">
        <SectionTitle title="Upcoming events" sub="most of the events are hosted by CPABC" />
        <Suspense fallback={<BlogCardSkeleton />}>
          <Events />
        </Suspense>
      </div>
      <div className="flex flex-col gap-y-2 mt-12 pt-6">
        <SectionTitle title=" Blogs" sub="Enhance your knowledge by exploring our blog." />


        <Suspense fallback={<BlogCardSkeleton />}>
          <BlogHome />
        </Suspense>
      </div>
    </main>
  );
}
