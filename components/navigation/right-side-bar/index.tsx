import React from "react";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import Image from "next/image";
import { TagCard } from "@/components/cards/TagCard";

const hotQuestions = [
  {
    _id: "1",
    title: "How to create a custom hook in React?",
  },
  {
    _id: "2",
    title: "What’s the difference between Server and Client Components in Next.js 13+?",
  },
  {
    _id: "3",
    title: "How do I fetch data in Next.js using the new app router?",
  },
  {
    _id: "4",
    title: "How to implement authentication with NextAuth and refresh tokens?",
  },
  {
    _id: "5",
    title: "Best practices for managing global state: Context vs Zustand vs Redux?",
  },
  {
    _id: "6",
    title: "How to optimize images and fonts in Next.js for performance?",
  },
  {
    _id: "7",
    title: "How do dynamic routes and catch‑all routes work in Next.js?",
  },
  {
    _id: "8",
    title: "How to set up Prisma with PostgreSQL in a Next.js project?",
  },
  {
    _id: "9",
    title: "How to create accessible, themeable components with Tailwind CSS?",
  },
  {
    _id: "10",
    title: "What are React Suspense and streaming, and how do I use them in Next.js?",
  },
  {
    _id: "11",
    title: "How to deploy a Next.js app to Vercel with environment variables?",
  },
];

export const popularTags = [
  { _id: "t-react", name: "react", questions: 1243, showCount: true },
  { _id: "t-nextjs", name: "nextjs", questions: 978, compact: true },
  { _id: "t-typescript", name: "typescript", questions: 1567 },
  { _id: "t-tailwind", name: "tailwindcss", questions: 634, showCount: true, compact: true },
  { _id: "t-node", name: "nodejs", questions: 1421 },
  { _id: "t-react-query", name: "react-query", questions: 689 },
];

export const RightSideBar = () => {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border shadow-light-300 sticky top-0 right-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 max-xl:hidden dark:shadow-none">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>

        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map(({ _id, title }) => (
            <Link href={ROUTES.QUESTION(_id)} key={_id} className="flex cursor-pointer items-center gap-7">
              <p className="body-medium text-dark500_light700">{title}</p>
              <Image src="/icons/chevron-right.svg" alt="question" width={20} height={20} className="invert-colors" />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <TagCard key={tag._id} {...tag} />
          ))}
        </div>
      </div>
    </section>
  );
};
