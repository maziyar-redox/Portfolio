import { CardContainer } from "./container";

export function BlogCard() {
    return (
        <>
            <div className="grid grid-cols-2 mx-0 md:mx-10 py-14 gap-6 md:gap-10">
                <CardContainer />
                <CardContainer />
                <CardContainer />
                <CardContainer />
            </div>
        </>
    );
};