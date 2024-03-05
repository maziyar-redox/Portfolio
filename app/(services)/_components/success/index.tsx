import { TextAnimation } from "@/components/HoveringText";

import { Card } from "./card";

import { Unity } from "@/components/svg/unity";
import { ChartBar } from "@/components/svg/chart-bar";
import { Case } from "@/components/svg/case";
import { DetailButton } from "./detail-button";

const data = [
    {
        id: 1,
        href: "/",
        icon: <Unity size={28} />,
        header: "ABC Tech Solutions",
        categories: [
            {
                id: 1,
                icon: <ChartBar size={16} />,
                head: "E-commerce",
            },
            {
                id: 2,
                icon: <Case size={16} />,
                head: "Web Design & Development",
            },
        ],
        challengeCaption: "ABC Enterprises approached us with a desire to revamp their outdated website and create a more user-friendly and visually appealing platform. They sought to improve user engagement and increase online sales.",
        SolutionCaption: "Our team conducted a thorough analysis of their target audience and business objectives. We designed a modern and intuitive website with seamless navigation and a mobile-responsive layout. checkout process and optimized the site for search engines.",
    },
    {
        id: 2,
        href: "/",
        icon: <Unity size={28} />,
        header: "Fitness Tracker App",
        categories: [
            {
                id: 1,
                icon: <ChartBar size={16} />,
                head: "Health & Fitness",
            },
            {
                id: 2,
                icon: <Case size={16} />,
                head: "Mobile App Development",
            },
        ],
        challengeCaption: "Our client aimed to create an all-in-one fitness tracking app to cater to health enthusiasts and fitness professionals. They wanted a seamless user interface, real-time data tracking, and social sharing features.",
        SolutionCaption: "Leveraging our expertise in app development, we built an interactive mobile app with user-friendly features. The app allowed users to set The app allowed users to set personalized fitness goals, track their progress, and share achievements on social media platforms.",
    }
];

export function Success() {
    return (
        <div className="flex flex-col items-center justify-center px-0 md:px-10 pt-12 md:pt-24 mt-10 md:mt-0 space-y-8 lg:space-y-16 pb-14 md:pb-28">
            <TextAnimation
                HighlightTextAnimation={{
                    opacity: 0,
                    y1: 75
                }}
                VisibleHighlightTextAnimation={{
                    opacity: 1,
                    y1: 0
                }}
                CaptionAnimation={{
                    opacity: 0,
                    y2: -75
                }}
                VisibleCaptionAnimation={{
                    opacity: 1,
                    y2: 0
                }}
                HighlightText="Success"
                Text="Stories"
                Caption="At DigitX, our success is defined by the achievements of our valued clients. We take immense pride in the transformative impact our digital solutions have had on their businesses. Here are some inspiring success stories that highlight the outcomes of our collaborative efforts."
            />
            <div className="flex flex-col w-full md:flex-row justify-center items-center md:px-14 gap-y-5 md:gap-y-0 md:gap-x-5">
                {data.map((items) => (
                    <Card
                        key={items.id}
                        href={items.href}
                        MainIcon={items.icon}
                        head={items.header}
                        categoryCardItems={items.categories}
                        challengeCaption={items.challengeCaption}
                        SolutionCaption={items.SolutionCaption}
                    />
                ))}
            </div>
            <DetailButton link="/" />
        </div>
    );
};